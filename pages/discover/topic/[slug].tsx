import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from '../../../components/layout';
import PostCardList from '../../../components/post-card-list';
import { fetchAPI, responsiveImageFragment } from '../../../lib/api';

export default function DiscoverCategory({ preview, topic, topicPosts }) {
  const breadcrumbs = [
    { label: 'Discover', linkProps: { href: '/discover' } },
    {
      label: topic.category.name,
      linkProps: {
        as: `/discover/category/${topic.category.slug}`,
        href: `/discover/category/[slug]`,
      },
    },
    {
      label: topic.name,
      linkProps: {
        as: `/discover/topic/${topic.slug}`,
        href: `/discover/topic/[slug]`,
      },
    },
  ];

  return (
    <>
      <Layout
        preview={preview}
        brand="discover"
        pageTitle={topic.name}
        breadcrumbs={breadcrumbs}
      >
        <Head>
          <title>{topic.name}</title>
        </Head>
        <PostCardList posts={topicPosts.posts} label="Most Recent Posts" />
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
    category {
      slug
      name
    }
  }
}
`,
    { preview, variables: { slug } }
  );

  const topicPosts = await fetchAPI(
    `
query PostsInTopic($topicId: ItemId) {
  posts: allPosts(filter: {topic: {eq: $topicId}}, orderBy: publishedDate_DESC, first: "12") {
    id
    title
    slug
    publishedDate
    topic {
      name
      slug
    }
    videoFile {
      provider
    }
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
    revalidate: 60 * 60 * 6, // once every 6 hours
  };
};
