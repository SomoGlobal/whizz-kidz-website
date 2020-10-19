import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import EventBoxes from '../../../components/event-boxes';
import Layout from '../../../components/layout';
import { fetchAPI } from '../../../lib/api';
import DatoModule from '../../../lib/dato-module';

export default function EventPage({ event, preview }) {
  if (!event) {
    return null;
  }

  const breadcrumbs = [
    { label: 'Supporters', linkProps: { href: '/supporters' } },
    {
      label: 'Events',
      linkProps: {
        href: `/supporters/events`,
      },
    },
    {
      label: event.name,
      linkProps: {
        href: `/supporters/events/[slug]`,
        as: `/supporters/events/${event.slug}`,
      },
    },
  ];

  return (
    <>
      <Head>
        <title>{event.name}</title>
      </Head>
      <Layout
        brand="supporters"
        preview={preview}
        pageTitle={event.name}
        breadcrumbs={breadcrumbs}
      >
        <EventBoxes
          startDate={event.startDate}
          endDate={event.endDate}
          location={event.location}
          minimumTarget={event.minimumTarget}
          registrationFee={event.registrationFee}
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
    fallback: false,
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
    revalidate: 60 * 30, // once every 30 mins
  };
};
