import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { getPage } from '../lib/api';
import DatoModule from '../lib/dato-module';
import Layout from '../components/layout';

export default function AboutUs({ page, preview }) {
  return (
    <>
      <Layout
        preview={preview}
        activeNavIndex={0}
        secondaryNavItems={[
          { label: 'Charity Home', href: '/charity' },
          { label: 'Our Team', href: '/our-team' },
          { label: 'Supporters & Advisors', href: '/supporters-and-advisors' },
          { label: 'Media Centre', href: '/media' },
          { label: 'Partners', href: '/partners' },
          { label: 'Careers', href: '/careers' },
          { label: 'Trusts, Statutory & Lottery', href: '/trusts' },
        ]}
      >
        <Head>
          <title>{page.title}</title>
        </Head>
        {page.modules.map((module) => (
          <DatoModule key={module.id} module={module} />
        ))}
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const page = await getPage(preview, 'about-us');

  return {
    props: { preview, page },
  };
};
