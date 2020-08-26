import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';
import Container from '../components/container';

export default function Search() {
  return (
    <>
      <Layout>
        <Head>
          <title>Search</title>
        </Head>
        <PageTitle text="Search" />
        <Container />
      </Layout>
    </>
  );
}
