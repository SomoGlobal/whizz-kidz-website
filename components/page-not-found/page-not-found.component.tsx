import Head from 'next/head';
import React from 'react';
import Layout from '../layout';
import Mission from '../mission';

const PageNotFound: React.FC = () => {
  return (
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
  );
};

export default PageNotFound;
