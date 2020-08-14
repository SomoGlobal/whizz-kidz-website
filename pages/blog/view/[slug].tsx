import Layout from 'components/layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const Post = ({ preview }) => {
  const router = useRouter();

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <div>loading</div>
      ) : (
        <>
          <article>
            <Head>
              <title>title</title>
            </Head>
          </article>
        </>
      )}
    </Layout>
  );
};

export default Post;
