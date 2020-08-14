import { getHomePage } from 'lib/api';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout';
import { SECTIONS_COLORS } from '../../lib/constants';

export default function Kids({ home, preview }) {
  return (
    <>
      <Layout
        preview={preview}
        color={SECTIONS_COLORS.kidz.bg}
        pageTitle="Kidz"
        secondaryNavItems={[
          { label: 'Kidz Home', href: '/kidz' },
          { label: 'Young People’s Services', href: '/kidz/yps' },
          { label: 'Meet the kidz', href: '/kidz/meet-the-kidz' },
        ]}
      >
        <Head>
          <title>{home.title}</title>
        </Head>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const home = await getHomePage(preview);

  return {
    props: { preview, home },
  };
};
