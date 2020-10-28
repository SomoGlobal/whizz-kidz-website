import { fetchAPI, responsiveImageFragment } from 'lib/api';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { renderMetaTags } from 'react-datocms';
import EventCardList from '../../../components/event-card-list';
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
        <EventCardList events={allEvents} />
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
  allEvents(orderBy: startDate_DESC, first: "100") {
    slug
    name
    startDate
    image {
      responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 400, ar: "16:9"}) {
        ...responsiveImageFragment
      }
    }
  }
}
${responsiveImageFragment}
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
