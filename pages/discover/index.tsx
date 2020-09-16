import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import PostCardList from '../../components/post-card-list';
import Layout from '../../components/layout';
import LinkGrid from '../../components/link-grid';
import { fetchAPI, responsiveImageFragment } from '../../lib/api';

export default function Discover({ preview, categoryGridTiles, recentPosts }) {
  return (
    <>
      <Layout preview={preview} brand="discover" pageTitle="Discover">
        <Head>
          <title>Discover</title>
        </Head>
        <LinkGrid title="Explore by category" tiles={categoryGridTiles} />
        <PostCardList posts={recentPosts} label="Recent Posts" />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const data = await fetchAPI(
    `
query AllCategories {
  categories: allCategories(orderBy: position_ASC) {
    name
    slug
    id
  }
  recentPosts: allPosts(orderBy: _firstPublishedAt_DESC, first: "6") {
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
    { preview, variables: {} }
  );

  const categoryGridTiles = data.categories.map((item) => ({
    label: item.name,
    linkProps: {
      as: `/discover/category/${item.slug}`,
      href: `/discover/category/[slug]`,
    },
  }));

  return {
    props: { preview, categoryGridTiles, recentPosts: data.recentPosts },
  };
};
