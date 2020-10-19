import Button from 'components/button';
import { fetchAPI, getChildNavItems, responsiveImageFragment } from 'lib/api';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { renderMetaTags } from 'react-datocms';
import Article from '../../../components/article';
import BorderedGrid from '../../../components/bordered-grid';
import Hero from '../../../components/hero';
import Layout from '../../../components/layout';
import TextWithImage from '../../../components/text-with-image';

/* eslint-disable react/no-danger */
export default function EventsHome({
  preview,
  secondaryNavItems,
  eventsPage,
  upcomingEvents = [],
  favicon,
}) {
  return (
    <>
      <Head>
        <title>Events & Challenges</title>
        {renderMetaTags(favicon)}
      </Head>
      <Layout
        brand="supporters"
        preview={preview}
        pageTitle="Events & Challenges"
        secondaryNavItems={secondaryNavItems}
      >
        <Hero title="Join Team Whizz‑Kidz" pattern="supporters" />
        <TextWithImage
          image={eventsPage.featuredEvent.image}
          imagePosition="right"
          eyebrow="Featured Event"
          heading={eventsPage.featuredEvent.name}
          callToAction={{
            label: 'See Event Details',
            internal: {
              _modelApiKey: 'event',
              slug: eventsPage.featuredEvent.slug,
            },
          }}
        />
        <Article body={eventsPage.openingParagraph} />
        {upcomingEvents.length > 0 && (
          <BorderedGrid
            heading="Upcoming Events"
            items={upcomingEvents.map((event) => ({
              title: event.name,
              border: 'border-purple-500',
              children: (
                <Button
                  className="block w-full"
                  linkProps={{
                    href: `/supporters/events/[slug]`,
                    as: `/supporters/events/${event.slug}`,
                  }}
                >
                  View Event
                </Button>
              ),
            }))}
          />
        )}
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const secondaryNavItems = await getChildNavItems('supporters');

  const { eventsPage, upcomingEvents, site } = await fetchAPI(
    `
query EventHomePage($now: DateTime) {
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
  eventsPage {
    openingParagraph(markdown: true)
    featuredEvent {
      slug
      name
      image {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 300, h: 300}) {
          ...responsiveImageFragment
        }
      }
    }
  }
  upcomingEvents: allEvents(orderBy: startDate_ASC, filter: {startDate: {gt: $now}}, first: "6") {
    slug
    name
    id
  }
}
${responsiveImageFragment}
`,
    {
      variables: {
        now: new Date().toISOString(),
      },
      preview,
    }
  );

  return {
    props: {
      preview,
      secondaryNavItems,
      eventsPage,
      upcomingEvents,
      favicon: site.favicon,
    },
    revalidate: 60 * 30, // once every 30 mins
  };
};
