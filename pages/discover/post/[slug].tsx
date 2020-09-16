import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { Image } from 'react-datocms';
import Container from '../../../components/container';
import Article from '../../../components/article';
import Breadcrumbs from '../../../components/breadcrumbs';
import Layout from '../../../components/layout';
import PostHeader from '../../../components/post-header';
import { fetchAPI, responsiveImageFragment } from '../../../lib/api';

export default function DiscoverCategory({ preview, post }) {
  return (
    <>
      <Layout preview={preview} brand="discover" pageTitle="Discover">
        <Head>
          <title>{post.title}</title>
        </Head>
        <Breadcrumbs
          items={[
            { label: 'Discover', linkProps: { href: '/discover' } },
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
          ]}
        />
        {post.coverImage && (
          <Container as="figure">
            <Image data={post.coverImage.responsiveImage} />
          </Container>
        )}
        <PostHeader
          title={post.title}
          summary={post.summary}
          publishedAt={post._publishedAt}
          author={post.author}
        />
        <Article body={post.content} centered />
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

  return { paths, fallback: false };
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
    }
    author {
      name
      slug
      picture {
        url(imgixParams: {fm: jpg, fit: crop, w: 150, h: 150})
      }
    }
    coverImage {
      responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1024, ar: "16:9"}) {
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
