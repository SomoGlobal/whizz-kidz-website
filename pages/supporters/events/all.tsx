import { fetchAPI } from 'lib/api';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { renderMetaTags } from 'react-datocms';
import Container from '../../../components/container';
import Layout from '../../../components/layout';

/* eslint-disable react/no-danger */
export default function AllEvents({ preview, allEvents, favicon }) {
  const breadcrumbs = [
    { label: 'Supporters', linkProps: { href: '/supporters' } },
    {
      label: 'Events',
      linkProps: {
        href: `/supporters/events`,
      },
    },
    {
      label: 'All Events',
      linkProps: { href: `/supporters/events/all` },
    },
  ];

  return (
    <>
      <Head>
        <title>All Events & Challenges | Whizz-Kidz</title>
        {renderMetaTags(favicon)}
      </Head>
      <Layout
        breadcrumbs={breadcrumbs}
        brand="supporters"
        preview={preview}
        pageTitle="All Events & Challenges"
      >
        <Container>
          <ul className="text-gray-700 mt-10 text-lg">
            {allEvents.map((event) => (
              <li key={event.slug} className="mb-4">
                <Link
                  href="/supporters/events/[slug]"
                  as={`/supporters/events/${event.slug}`}
                >
                  <a className="hover:underline">{event.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;

  const { allEvents, site } = await fetchAPI(
    `
query AllEventsPage {
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
  allEvents(orderBy: startDate_ASC, first: "100") {
    slug
    name
  }
}
`,
    {
      variables: {},
      preview,
    }
  );

  return {
    props: {
      preview,
      allEvents,
      favicon: site.favicon,
    },
  };
};
