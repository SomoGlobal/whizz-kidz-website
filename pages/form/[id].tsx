import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/layout';

export default function Form() {
  const router = useRouter();

  return (
    <Layout brand="home">
      <Head>
        <title>Form</title>
      </Head>
      {router.query.id && (
        <iframe
          id={`form-${router.query.id}`}
          title="Form"
          onLoad={() => window.parent.scrollTo(0, 0)}
          allowTransparency
          allowFullScreen
          allow="geolocation; microphone; camera"
          src={`https://form.jotform.com/${router.query.id}`}
          frameBorder="0"
          className="w-full h-full min-h-screen"
        />
      )}
    </Layout>
  );
}
