import { getChildNavItems } from 'lib/api';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout';
import Mission from '../../components/mission';

export default function MeetTheKids({ page, preview, secondaryNavItems }) {
  if (!page) {
    return null;
  }

  return (
    <Layout
      brand="families"
      preview={preview}
      pageTitle={page.title}
      secondaryNavItems={secondaryNavItems}
    >
      <Head>
        <title>{page.title}</title>
      </Head>
      <Mission
        eyebrow="Meet the Kidz"
        heading="Some of the young people and families that we’ve helped share their stories and explain how Whizz-Kidz transformed their lives."
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const secondaryNavItems = await getChildNavItems('families');
  const page = {
    title: 'Meet the Kidz',
  };

  return {
    props: { preview, page, secondaryNavItems },
  };
};
