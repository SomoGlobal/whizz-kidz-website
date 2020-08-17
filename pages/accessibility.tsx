import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import JourneyLauncher from '../components/journey-launcher';
import { getPage } from '../lib/api';
import DatoModule from '../lib/dato-module';
import Layout from '../components/layout';

export default function Accessibility({ home, preview }) {
  return (
    <>
      <Layout preview={preview} pageTitle={home.title}>
        <Head>
          <title>{home.title}</title>
        </Head>
        {home.modules.map((module) => (
          <DatoModule key={module.id} module={module} />
        ))}
        <JourneyLauncher />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const home = await getPage(preview, 'accessibility');

  return {
    props: { preview, home },
  };
};
