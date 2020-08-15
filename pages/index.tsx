import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { getPage } from '../lib/api';
import DatoModule from '../lib/dato-module';
import Layout from '../components/layout';

export default function Index({ home, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{home.title}</title>
        </Head>
        {home.modules.map((module) => (
          <DatoModule key={module.id} module={module} />
        ))}
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const home = await getPage(preview, 'home');

  return {
    props: { preview, home },
  };
};
