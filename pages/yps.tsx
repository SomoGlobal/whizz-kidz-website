import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';

const YPS: React.FC = () => (
  <Layout brand="home">
    <Head>
      <title>Young People's Services | Whizz-Kidz</title>
      <meta name="robots" content="noindex" />
    </Head>
    <iframe
      id="yps"
      title="Young People's Services"
      onLoad={() => window.parent.scrollTo(0, 0)}
      allow="geolocation; microphone; camera"
      src="https://www.whizz-kidz-formz.co.uk/"
      frameBorder="0"
      className="w-full h-full min-h-screen"
    />
  </Layout>
);

export default YPS;
