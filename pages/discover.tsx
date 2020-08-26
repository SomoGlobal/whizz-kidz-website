import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { getPage } from '../lib/api';
import DatoModule from '../lib/dato-module';
import Layout from '../components/layout';

export default function Discover({ page, preview }) {
  return (
    <>
      <Layout preview={preview}>
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
  const page = await getPage(preview, 'discover');

  return {
    props: { preview, page },
  };
};
