import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from 'components/layout';

export default function Post({ page, preview }) {
  const router = useRouter();

  return (
    <Layout preview={preview}>
      {router.isFallback ? (
        <div>loading</div>
      ) : (
        <>
          <article>
            <Head>
              <title>{page.title}</title>
              <meta property="og:image" content={page.ogImage.url} />
            </Head>
          </article>
        </>
      )}
    </Layout>
  );
}
