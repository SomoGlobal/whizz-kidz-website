import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { renderMetaTags } from 'react-datocms';
import JourneyLauncher from '../components/journey-launcher';
import { getPage } from '../lib/api';
import DatoModule from '../lib/dato-module';
import Layout from '../components/layout';

export default function Accessibility({ data, preview }) {
  return (
    <Layout preview={preview} pageTitle={data.page.title}>
      <Head>{renderMetaTags(data.page.seo.concat(data.site.favicon))}</Head>
      {data.page.modules.map((module) => (
        <DatoModule key={module.id} module={module} />
      ))}
      <JourneyLauncher />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const data = await getPage(preview, 'accessibility');

  return {
    props: { preview, data },
  };
};
