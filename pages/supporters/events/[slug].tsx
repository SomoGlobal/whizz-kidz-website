import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import EventBoxes from '../../../components/event-boxes';
import Layout from '../../../components/layout';
import {
  fetchAPI,
  linkFragment,
  responsiveImageFragment,
} from '../../../lib/api';
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
      <Layout brand="supporters" preview={preview} breadcrumbs={breadcrumbs}>
        {event.topModules.map((module, index) => (
          <DatoModule key={module.id || index} module={module} />
        ))}
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
    endDate
    id
    location {
      latitude
      longitude
    }
    topModules {
      ... on FullWidthImageRecord {
        id
        _modelApiKey
        image {
          responsiveImage(imgixParams: {auto: format, fit: crop, w: 1440, h: 500}) {
            ...responsiveImageFragment
          }
        }
      }
      ... on HeroRecord {
        id
        _modelApiKey
        title
        subtitle
        backgroundType
        pattern
        split
        image {
          url(imgixParams: {auto: format, fit: crop, w: 1240, ar: "1:1"})
        }
        callToAction {
          ...linkFragment
        }
      }
      ... on VideoRecord {
        id
        _modelApiKey
        video {
          providerUid
          provider
        }
        hasPattern
        coverImage {
          responsiveImage(imgixParams: {auto: format, fit: crop, w: 2480, ar: "16:9"}) {
            ...responsiveImageFragment
          }
        }
      }
      ... on LargeImageHeroRecord {
        id
        _modelApiKey
        title
        subtitle
        callToAction {
          ...linkFragment
        }
        image {
          url(imgixParams: {fm: jpg, fit: crop, w: 1920, ar: "3:1"})
        }
      }
    }
    modules {
      ... on CtaRecord {
        id
        _modelApiKey
        isGhost
        isOutlined
        size
        link {
          ...linkFragment
        }
      }
      ... on SectionLinkRecord {
        id
        theme
        heading
        _modelApiKey
        callToAction {
          ...linkFragment
        }
      }
      ... on ArticleRecord {
        id
        _modelApiKey
        body(markdown: true)
        centered
      }
      ... on FullWidthImageRecord {
        id
        _modelApiKey
        image {
          responsiveImage(imgixParams: {auto: format, fit: crop, w: 1440, h: 500}) {
            ...responsiveImageFragment
          }
        }
      }
      ... on VideoRecord {
        id
        _modelApiKey
        video {
          providerUid
          provider
        }
        hasPattern
        coverImage {
          responsiveImage(imgixParams: {auto: format, fit: crop, w: 2480, ar: "16:9"}) {
            ...responsiveImageFragment
          }
        }
      }
      ... on GalleryRecord {
        id
        _modelApiKey
        images {
          url(imgixParams: {auto: format, fit: crop, h: 300, ar: "16:9"})
          alt
        }
      }
      ... on TopicGridRecord {
        id
        _modelApiKey
        category {
          slug
          name
          id
        }
      }
      ... on StepRecord {
        id
        header
        number
        body(markdown: true)
        _modelApiKey
      }
      ... on QuestionRecord {
        id
        _modelApiKey
        heading
        items {
          question
          answer(markdown: false)
          id
        }
      }
      ... on TextWithAnimationRecord {
        id
        heading
        eyebrow
        animation
        text
        _modelApiKey
        imagePosition
        callToAction {
          ...linkFragment
        }
      }
      ... on TextWithPatternRecord {
        id
        heading
        eyebrow
        pattern
        text
        _modelApiKey
        imagePosition
        callToAction {
          ...linkFragment
        }
      }
      ... on DecorationRecord {
        id
        _modelApiKey
        decorationType
        decorationPosition
      }
      ... on MissionRecord {
        id
        _modelApiKey
        heading
        eyebrow
        text
      }
      ... on TextWithImageRecord {
        id
        heading
        eyebrow
        text
        imagePosition
        transparentBackground
        _modelApiKey
        callToAction {
          ...linkFragment
        }
        image {
          responsiveImage(imgixParams: {auto: format, fit: crop, w: 300, h: 300}) {
            ...responsiveImageFragment
          }
        }
      }
      ... on ThreeCardRecord {
        id
        _modelApiKey
        card3Text
        card3Heading
        card3Image {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 400, ar: "16:9"}) {
            ...responsiveImageFragment
          }
        }
        card3Cta {
          ...linkFragment
        }
        card2Text
        card2Heading
        card2Image {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 400, ar: "16:9"}) {
            ...responsiveImageFragment
          }
        }
        card2Cta {
          ...linkFragment
        }
        card1Text
        card1Heading
        card1Image {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 400, ar: "16:9"}) {
            ...responsiveImageFragment
          }
        }
        card1Cta {
          ...linkFragment
        }
      }
    }
  }
}
${responsiveImageFragment}
${linkFragment}
`,
    { variables: { slug }, preview }
  );

  return {
    props: { preview, event },
    revalidate: 60 * 5, // once every 5 mins
  };
};
