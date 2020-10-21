import { getPage, getSectionChildren, getChildNavItems } from 'lib/api';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { renderMetaTags } from 'react-datocms';
import Layout from '../../components/layout';
import Mission from '../../components/mission';
import DatoModule from '../../lib/dato-module';
import { treeToArray } from '../../lib/helpers';

export default function Supporters({ data, preview, secondaryNavItems }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout brand="supporters">
        <Mission eyebrow="Please Wait" heading="Page is loading..." />
      </Layout>
    );
  }

  if (!data || !data.page) {
    router.push('/404').catch();
    return null;
  }

  return (
    <Layout
      brand="supporters"
      preview={preview}
      pageTitle={data.page.title}
      secondaryNavItems={secondaryNavItems}
    >
      <Head>{renderMetaTags(data.page.seo.concat(data.site.favicon))}</Head>
      {data.page.modules.map((module, index) => (
        <DatoModule key={module.id || index} module={module} />
      ))}
    </Layout>
  );
}

export async function getStaticPaths() {
  const sectionItems = await getSectionChildren('supporters');
  const paths = treeToArray(sectionItems).map((parts) => {
    parts.shift();
    return { params: { slug: parts } };
  });
  const staticPaths = [{ params: { slug: [''] } }, ...paths];

  return {
    paths: staticPaths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const { slug } = context.params;
  const docSlug = slug ? slug[slug.length - 1] : 'supporters';
  const data = await getPage(preview, docSlug);
  const secondaryNavItems = await getChildNavItems('supporters');

  return {
    props: { preview, data, secondaryNavItems },
    revalidate: 60 * 60, // once every 60 mins
  };
};
