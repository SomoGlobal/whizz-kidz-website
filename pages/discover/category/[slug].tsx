import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from '../../../components/layout';
import LinkGrid from '../../../components/link-grid';
import { fetchAPI } from '../../../lib/api';

export default function DiscoverCategory({ preview, topicGridTiles, title }) {
  return (
    <>
      <Layout preview={preview} brand="discover" pageTitle={title}>
        <Head>
          <title>{title}</title>
        </Head>
        <ol>
          <li>todo: breadcrumbs!</li>
        </ol>
        <LinkGrid title="Explore by topic" tiles={topicGridTiles} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const data = await fetchAPI(
    `
query AllCategoriesForSlugs {
  allCategories {
    slug
  }
}

`,
    { preview: false, variables: {} }
  );

  const staticPaths = data.allCategories.map((cat) => ({ params: cat }));

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
query TopicsByCategory($slug: String) {
  category(filter: {slug: {eq: $slug}}) {
    name
    topics {
      slug
      name
    }
  }
}

`,
    { preview, variables: { slug } }
  );

  const topicGridTiles = data.category.topics.map((item) => ({
    label: item.name,
    linkProps: {
      as: `/discover/topic/${item.slug}`,
      href: `/discover/topic/[slug]`,
    },
  }));

  return {
    props: { preview, topicGridTiles, title: data?.category.name },
  };
};
