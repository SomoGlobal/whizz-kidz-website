import cx from 'classnames';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { Image, renderMetaTags } from 'react-datocms';
import { DiscussionEmbed } from 'disqus-react';
import styles from '../../../components/article/article.module.css';
import Container from '../../../components/container';
import Layout from '../../../components/layout';
import Podcast from '../../../components/podcast';
import PostHeader from '../../../components/post-header';
import VideoPlayer from '../../../components/video-player';
import { fetchAPI, responsiveImageFragment } from '../../../lib/api';

export default function DiscoverPost({ preview, post, site }) {
  if (!post) {
    return null;
  }

  let url = `http://www.whizz-kidz.org.uk/discover/post/${post.slug}`;

  if (typeof window !== 'undefined') {
    url = (window as any).location.href;
  }

  const breadcrumbs = [
    { label: 'Discover', linkProps: { href: '/discover' } },
    {
      label: post.topic.category.name,
      linkProps: {
        as: `/discover/category/${post.topic.category.slug}`,
        href: `/discover/category/[slug]`,
      },
    },
    {
      label: post.topic.name,
      linkProps: {
        as: `/discover/topic/${post.topic.slug}`,
        href: `/discover/topic/[slug]`,
      },
    },
    {
      label: post.title,
      linkProps: {
        as: `/discover/post/${post.slug}`,
        href: `/discover/post/[slug]`,
      },
    },
  ];

  const hasVideo = post.coverImage && post.videoFile;
  const hasImageWithNoVideo = post.coverImage && !post.videoFile;

  return (
    <Layout
      preview={preview}
      brand="discover"
      pageTitle="Discover"
      breadcrumbs={breadcrumbs}
    >
      <Head>{renderMetaTags(post.seo.concat(site.favicon))}</Head>
      <article style={{ display: 'unset' }}>
        {hasVideo && (
          <VideoPlayer coverImage={post.coverImage} video={post.videoFile} />
        )}
        {hasImageWithNoVideo && (
          <Container
            as="figure"
            className="pl-0 pr-0 lg:pl-4 lg:pr-4 grid grid-cols-1 grid-rows-1"
          >
            <Image
              className="col-start-1 col-end-2 row-start-1 row-end-2 z-10"
              data={post.coverImage.responsiveImage}
            />
          </Container>
        )}
        <PostHeader
          title={post.title}
          summary={post.summary}
          topic={post.topic}
          publishedAt={post.publishedDate}
          author={post.author}
          share={{
            title: post.title,
            url,
          }}
        />
        {post.podcastFile && (
          <Podcast
            file={post.podcastFile}
            transcript={post.podcastTranscript}
          />
        )}
        <Container className="grid grid-cols-6 gap-4">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className={cx(
              styles.article,
              'md:col-start-2 md:col-end-6 col-span-6'
            )}
          />
          <section
            aria-label="Comments"
            data-datocms-noindex
            className="md:col-start-2 md:col-end-6 col-span-6 my-20"
          >
            <DiscussionEmbed
              shortname={process.env.DISQUS_SHORTNAME}
              config={{
                url,
                identifier: post.slug,
                title: post.title,
                language: 'en-GB',
              }}
            />
          </section>
        </Container>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await fetchAPI(
    `
query Top10Posts {
  posts: allPosts(first: "10", orderBy: _firstPublishedAt_ASC) {
    slug
  }
}
`,
    { preview: false, variables: {} }
  );

  const paths = data.posts.map((post) => ({
    params: post,
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const { slug } = context.params;
  const data = await fetchAPI(
    `
query PostPageQuery($slug: String) {
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
  post(filter: {slug: {eq: $slug}}) {
    slug
    title
    summary
    publishedDate
    content(markdown: true)
    seo: _seoMetaTags {
      tag
      content
      attributes
    }
    topic {
      name
      slug
      category {
        name
        slug
      }
    }
    podcastFile {
      url
      title
      mimeType
    }
    podcastTranscript {
      url
    }
    videoFile {
      provider
      providerUid
    }
    author {
      name
      slug
      picture {
        url(imgixParams: {auto: format, fit: crop, w: 150, h: 150})
      }
    }
    coverImage {
      responsiveImage(imgixParams: {auto: format, fit: crop, w: 2480, ar: "16:9"}) {
        ...responsiveImageFragment
      }
    }
  }
}
${responsiveImageFragment}
`,
    { preview, variables: { slug } }
  );

  return {
    props: { preview, post: data?.post, site: data?.site },
  };
};
