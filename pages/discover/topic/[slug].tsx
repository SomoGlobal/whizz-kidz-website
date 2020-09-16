import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Breadcrumbs from '../../../components/breadcrumbs';
import Layout from '../../../components/layout';
import { fetchAPI } from '../../../lib/api';

export default function DiscoverCategory({ preview, topic }) {
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
        <ol>
          <li>
            todo: fetch 10 posts, sort by date first published ascending, put
            them in cards
          </li>
        </ol>
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
    name
    slug
  }
}
`,
    { preview, variables: { slug } }
  );

  return {
    props: { preview, topic: data.topic },
  };
};
