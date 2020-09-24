import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import PostCardList from '../../components/post-card-list';
import Layout from '../../components/layout';
import LinkGrid from '../../components/link-grid';
import { fetchAPI, responsiveImageFragment } from '../../lib/api';
import FeaturedPost from '../../components/featured-post';

export default function Discover({
  preview,
  featuredPost,
  categoryGridTiles,
  topicGridTiles,
  recentPosts,
}) {
  const secondaryNavItems = [
    { label: 'Home', linkProps: { href: '/discover' } },
    ...categoryGridTiles,
  ];

  return (
    <>
      <Layout
        preview={preview}
        brand="discover"
        pageTitle="Discover"
        secondaryNavItems={secondaryNavItems}
      >
        <Head>
          <title>Discover</title>
        </Head>
        {featuredPost && (
          <FeaturedPost
            slug={featuredPost.slug}
            title={featuredPost.title}
            image={featuredPost.coverImage}
            topic={featuredPost.topic}
            publishedAt={featuredPost._firstPublishedAt}
          />
        )}
        <LinkGrid title="Explore by category" tiles={categoryGridTiles} />
        <PostCardList posts={recentPosts} label="Recent Posts" />
        <LinkGrid title="Explore by topic" tiles={topicGridTiles} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const data = await fetchAPI(
    `
query DiscoverHomePage {
  categories: allCategories(orderBy: position_ASC) {
    name
    slug
    id
  }
  topics: allTopics(orderBy: position_ASC) {
    name
    slug
    id
  }
  featuredPost: post(filter: {featured: {eq: true}}, orderBy: publishedDate_DESC) {
    slug
    title
    _firstPublishedAt
    topic {
      slug
      name
    }
    coverImage {
      responsiveImage(imgixParams: {auto: format, fit: crop, w: 2480, ar: "16:9"}) {
        ...responsiveImageFragment
      }
    }
  }
  recentPosts: allPosts(orderBy: publishedDate_DESC, first: "6") {
    id
    title
    slug
    publishedDate
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
    { preview, variables: {} }
  );

  const categoryGridTiles = data.categories.map((item) => ({
    label: item.name,
    linkProps: {
      as: `/discover/category/${item.slug}`,
      href: `/discover/category/[slug]`,
    },
  }));

  const topicGridTiles = data.topics.map((item) => ({
    label: item.name,
    linkProps: {
      as: `/discover/topic/${item.slug}`,
      href: `/discover/topic/[slug]`,
    },
  }));

  return {
    props: {
      preview,
      featuredPost: data.featuredPost,
      categoryGridTiles,
      topicGridTiles,
      recentPosts: data.recentPosts,
    },
  };
};
