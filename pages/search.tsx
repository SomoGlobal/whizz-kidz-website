import Head from 'next/head';
import React from 'react';
import DatoSearch from '../components/dato-search';
import Layout from '../components/layout';
import PageTitle from '../components/page-title';

export default function Search() {
  return (
    <>
      <Layout>
        <Head>
          <title>Search</title>
        </Head>
        <PageTitle text="Search" />
        <DatoSearch apiToken="2a7b52b9118bf254d3a1d30398e71a" />
      </Layout>
    </>
  );
}
