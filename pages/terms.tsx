import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Container from '../components/container';
import Layout from '../components/layout';

export default function Terms({ preview }) {
  return (
    <>
      <Layout preview={preview} pageTitle="Terms and Conditions">
        <Head>
          <title>Terms and Conditions</title>
        </Head>
        <section>
          <Container>
            <p className="text-gray-700 lg:w-3/4 my-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos eligendi excepturi, in ipsa iste itaque pariatur
              praesentium quas quia quis repudiandae suscipit temporibus
              tenetur. Cumque harum ipsum nostrum omnis reprehenderit!
            </p>
          </Container>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;

  return {
    props: { preview },
  };
};
