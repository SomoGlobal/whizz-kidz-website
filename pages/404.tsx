import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import Mission from '../components/mission';

export default function NotFound() {
  return (
    <>
      <Layout>
        <Head>
          <title>404 - Not Found</title>
        </Head>
        <Mission
          eyebrow="404"
          hasBigHeading
          heading="Page not found"
          text="Hmm, we can't find the page you were after"
        />
      </Layout>
    </>
  );
}
