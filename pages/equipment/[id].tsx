import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Article from '../../components/article';
import Layout from '../../components/layout';
import TextWithImage from '../../components/text-with-image';
import { fetchAPI, responsiveImageFragment } from '../../lib/api';

export default function EquipmentPage({ data }) {
  const breadcrumbs = [
    { label: 'Equipment', linkProps: { href: '/equipment' } },
    {
      label: data.equipment.name,
      linkProps: {
        as: `/equipment/${data.equipment.id}`,
        href: `/equipment/[id]`,
      },
    },
  ];

  return (
    <Layout
      pageTitle={data.equipment.name}
      breadcrumbs={breadcrumbs}
      brand="home"
    >
      <Head>
        <title>{data.equipment.name} | Whizz-Kidz</title>
      </Head>
      <TextWithImage
        imagePosition="left"
        eyebrow={data.equipment.chairType}
        heading={data.equipment.name}
        text={<Article body={data.equipment.description} />}
        image={data.equipment.image}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await fetchAPI(
    `
query AllEquipmentId {
  allEquipment {
    id
  }
}
`,
    { preview: false, variables: {} }
  );

  const staticPaths = data.allEquipment.map((equip) => ({ params: equip }));

  return {
    paths: staticPaths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const data = await fetchAPI(
    `
query EquipmentPage($id: ItemId!) {
  equipment(filter: {id: {eq: $id}}) {
    name
    id
    description(markdown: false)
    chairType
    image {
      responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 400, ar: "1:1"}) {
        ...responsiveImageFragment
      }
    }
  }
}
${responsiveImageFragment}
`,
    { preview: false, variables: { id } }
  );

  return {
    props: { data },
    revalidate: 60 * 60 * 24, // once every 24 hours
  };
};
