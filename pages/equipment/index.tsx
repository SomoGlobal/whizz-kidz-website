import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Image, renderMetaTags } from 'react-datocms';
import Container from '../../components/container';
import Layout from '../../components/layout';
import { fetchAPI } from '../../lib/api';

const Card = ({ image, name, id }) => (
  <Link href="/equipment/[id]" as={`/equipment/${id}`}>
    <a className="rounded-lg shadow-xl justify-between flex flex-col bg-white text-gray-700 h-full hover:underline">
      {image && <img src={image} className="rounded-t-lg" alt={name} />}
      <div className="px-4 md:px-6 py-6 flex-1 grid gap-6">
        <div className="text-2xl font-bold w-full text-center">{name}</div>
      </div>
    </a>
  </Link>
);

const equipmentTypes = ['Powered', 'Manual', 'Buggies', 'Trikes'];

export default function Index({ data, preview }) {
  return (
    <Layout preview={preview} pageTitle="Equipment" brand="home">
      <Head>
        {renderMetaTags(data.site.favicon)}
        <title>Equipment | Whizz-Kidz</title>
      </Head>
      {equipmentTypes.map((equipmentType) => (
        <Container as="section" className="my-10 md:my-20" key={equipmentType}>
          <h2 className="text-gray-700 font-bold leading-snug text-3xl mb-6">
            {equipmentType}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {(data[equipmentType.toLowerCase()] || []).map((e) => (
              <Card key={e.id} name={e.name} id={e.id} image={e.image.url} />
            ))}
          </div>
        </Container>
      ))}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const data = await fetchAPI(
    `
query EquipmentsPage {
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
  buggies: allEquipment(orderBy: position_ASC, filter: {chairType: {eq: "Buggies"}}) {
    ...chairFields
  }
  manual: allEquipment(orderBy: position_ASC, filter: {chairType: {eq: "Manual"}}) {
    ...chairFields
  }
  powered: allEquipment(orderBy: position_ASC, filter: {chairType: {eq: "Powered"}}) {
    ...chairFields
  }
  trikes: allEquipment(orderBy: position_ASC, filter: {chairType: {eq: "Trikes"}}) {
    ...chairFields
  }
}
fragment chairFields on EquipmentRecord {
  name
  id
  image {
    url
  }
}
`,
    { preview, variables: {} }
  );

  return {
    props: { preview, data },
  };
};
