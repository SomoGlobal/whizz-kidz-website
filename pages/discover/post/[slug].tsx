import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { Image } from 'react-datocms';
import Article from '../../../components/article';
import Container from '../../../components/container';
import Layout from '../../../components/layout';
import Podcast from '../../../components/podcast';
import PostHeader from '../../../components/post-header';
import { fetchAPI, responsiveImageFragment } from '../../../lib/api';

export default function DiscoverCategory({ preview, post }) {
  if (!post) {
    return null;
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

  return (
    <>
      <Layout
        preview={preview}
        brand="discover"
        pageTitle="Discover"
        breadcrumbs={breadcrumbs}
      >
        <Head>
          <title>{post.title}</title>
        </Head>
        <article>
          {post.coverImage && (
            <Container as="figure" className="pl-0 pr-0 lg:pl-4 lg:pr-4">
              <Image data={post.coverImage.responsiveImage} explicitWidth />
            </Container>
          )}
          <PostHeader
            title={post.title}
            summary={post.summary}
            publishedAt={post._publishedAt}
            author={post.author}
          />
          {post.podcastFile && (
            <Podcast
              file={post.podcastFile}
              transcript={post.podcastTranscript}
            />
          )}
          <Article body={post.content} centered />
        </article>
      </Layout>
    </>
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
  post(filter: {slug: {eq: $slug}}) {
    slug
    title
    summary
    _publishedAt
    content(markdown: true)
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
    props: { preview, post: data?.post },
  };
};
