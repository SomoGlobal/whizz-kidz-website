import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Container from '../../../components/container';
import Breadcrumbs from '../../../components/breadcrumbs';
import Layout from '../../../components/layout';
import PostCard from '../../../components/post-card';
import { fetchAPI, responsiveImageFragment } from '../../../lib/api';

export default function DiscoverCategory({ preview, topic, topicPosts }) {
  return (
    <>
      <Layout preview={preview} brand="discover" pageTitle={topic.name}>
        <Head>
          <title>{topic.name}</title>
        </Head>
        <Breadcrumbs
          items={[
            { label: 'Discover', linkProps: { href: '/discover' } },
            {
              label: topic.name,
              linkProps: {
                as: `/discover/topic/${topic.slug}`,
                href: `/discover/topic/[slug]`,
              },
            },
          ]}
        />
        <Container>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topicPosts.posts.map((post) => (
              <li key={post.slug}>
                <PostCard
                  title={post.title}
                  image={post.coverImage}
                  publishedAt={post._publishedAt}
                  linkProps={{
                    as: `/discover/post/${post.slug}`,
                    href: `/discover/post/[slug]`,
                  }}
                />
              </li>
            ))}
          </ul>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const data = await fetchAPI(
    `
query AllTopicsForSlugs {
  allTopics {
    slug
  }
}

`,
    { preview: false, variables: {} }
  );

  const staticPaths = data.allTopics.map((cat) => ({ params: cat }));

  return {
    paths: staticPaths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const { slug } = context.params;
  const data = await fetchAPI(
    `
query TopicName($slug: String) {
  topic(filter: {slug: {eq: $slug}}) {
    id
    name
    slug
  }
}
`,
    { preview, variables: { slug } }
  );

  const topicPosts = await fetchAPI(
    `
query PostsInTopic($topicId: ItemId) {
  posts: allPosts(filter: {topic: {eq: $topicId}}) {
    id
    title
    slug
    _publishedAt
    coverImage {
      responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 400, ar: "16:9"}) {
        ...responsiveImageFragment
      }
    }
  }
}
${responsiveImageFragment}
`,
    { preview, variables: { topicId: data.topic.id } }
  );

  return {
    props: { preview, topic: data.topic, topicPosts },
  };
};
