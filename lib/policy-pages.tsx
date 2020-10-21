import Head from 'next/head';
import React from 'react';
import { renderMetaTags } from 'react-datocms';
import JourneyLauncher from '../components/journey-launcher';
import Layout from '../components/layout';
import DatoModule from './dato-module';

export default function PolicyPageComponent({ data, preview }) {
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
