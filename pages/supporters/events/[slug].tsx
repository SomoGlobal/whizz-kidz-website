import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { fetchAPI } from '../../../lib/api';
import Layout from '../../../components/layout';
import LandingHero from '../../../components/landing-hero';
import BorderedGrid from '../../../components/bordered-grid';
import DatoModule from '../../../lib/dato-module';

export default function EventPage({ event, preview }) {
  if (!event) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{event.name}</title>
      </Head>
      <Layout brand="supporters" preview={preview}>
        <LandingHero title={event.name} />
        <BorderedGrid
          heading="Event Details"
          items={[
            {
              title: 'Event Date',
              border: 'border-green-500',
              children: event.startDate,
            },
            {
              title: 'Location',
              border: 'border-indigo-600',
              children: event.startDate,
            },
            {
              title: 'Registration Fee',
              border: 'border-blue-400',
              children: event.startDate,
            },
            {
              title: 'Minimum Target',
              border: 'border-purple-700',
              children: event.startDate,
            },
          ]}
        />
        {event.modules.map((module, index) => (
          <DatoModule key={module.id || index} module={module} />
        ))}
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const response = await fetchAPI(`query LatestEventSlugs {
  events: allEvents(first: "5") {
    slug
  }
}
`);

  const staticPaths = response.events.map((obj) => ({
    params: { slug: obj.slug },
  }));

  return {
    paths: staticPaths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const { slug } = context.params;
  const { event } = await fetchAPI(
    `
query EventPageQuery($slug: String) {
  event(filter: {slug: {eq: $slug}}) {
    slug
    startDate
    registrationFee
    name
    minimumTarget
    description(markdown: true)
    endDate
    id
    location {
      latitude
      longitude
    }
    modules {
      ... on ArticleRecord {
        id
        _modelApiKey
        body(markdown: true)
        centered
      }
    }
  }
}
`,
    { variables: { slug }, preview }
  );

  return {
    props: { preview, event },
  };
};
