import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout';
import LinkGrid from '../../components/link-grid';
import { fetchAPI } from '../../lib/api';

export default function Discover({ preview, categoryGridTiles }) {
  return (
    <>
      <Layout preview={preview} brand="discover" pageTitle="Discover">
        <Head>
          <title>Discover</title>
        </Head>
        <LinkGrid title="Explore by category" tiles={categoryGridTiles} />
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
}
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
    props: { preview, categoryGridTiles },
  };
};