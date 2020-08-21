import { getPage } from 'lib/api';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from '../../components/layout';
import DatoModule from '../../lib/dato-module';

export default function Families({ page, preview }) {
  return (
    <>
      <Layout
        brand="families"
        preview={preview}
        pageTitle={page.title}
        activeNavIndex={0}
        secondaryNavItems={[
          { label: 'Kidz Home', href: '/kidz' },
          { label: 'Young People’s Services', href: '/kidz/yps' },
          { label: 'Meet the kidz', href: '/kidz/meet-the-kidz' },
        ]}
      >
        <Head>
          <title>{page.title}</title>
        </Head>
        {page.modules.map((module) => (
          <DatoModule key={module.id} module={module} />
        ))}
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const page = await getPage(preview, 'families');

  return {
    props: { preview, page },
  };
};
