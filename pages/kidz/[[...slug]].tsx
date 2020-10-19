import { getPage, getSectionChildren, getChildNavItems } from 'lib/api';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { renderMetaTags } from 'react-datocms';
import Layout from '../../components/layout';
import DatoModule from '../../lib/dato-module';
import { treeToArray } from '../../lib/helpers';

export default function Kids({ data, preview, secondaryNavItems }) {
  if (!data.page) {
    return null;
  }

  return (
    <Layout
      brand="kidz"
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
  const sectionItems = await getSectionChildren('kidz');
  const paths = treeToArray(sectionItems).map((parts) => {
    parts.shift();
    return { params: { slug: parts } };
  });
  const staticPaths = [{ params: { slug: [''] } }, ...paths];

  return {
    paths: staticPaths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const { slug } = context.params;
  const docSlug = slug ? slug[slug.length - 1] : 'kidz';
  const data = await getPage(preview, docSlug);
  const secondaryNavItems = await getChildNavItems('kidz');

  return {
    props: { preview, data, secondaryNavItems },
    revalidate: 60 * 30, // once every 30 mins
  };
};
