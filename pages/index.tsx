import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { renderMetaTags } from 'react-datocms';
import LegacyJourneyLauncher from '../components/legacy-journey-launcher';
import { getPage } from '../lib/api';
import DatoModule from '../lib/dato-module';
import Layout from '../components/layout';

export default function Index({ data, preview }) {
  if (!data.page) {
    return null;
  }

  return (
    <Layout preview={preview} brand="home">
      <Head>{renderMetaTags(data.page.seo.concat(data.site.favicon))}</Head>
      {data.page.modules.map((module) => (
        <DatoModule key={module.id} module={module} />
      ))}
      <LegacyJourneyLauncher />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const data = await getPage(preview, 'home');

  return {
    props: { preview, data },
    revalidate: 60 * 60, // once every 60 mins
  };
};
