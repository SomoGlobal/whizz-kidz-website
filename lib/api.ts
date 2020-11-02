import 'isomorphic-unfetch';
import memo from 'memoizee';
import { GraphQLClient } from 'graphql-request';

const CUSTOM_NAV_ITEMS = {
  families: [],
  supporters: [
    {
      id: 'events',
      label: 'Events & Challenges',
      linkProps: {
        href: `/supporters/events`,
      },
    },
  ],
};

const API_URL = 'https://graphql.datocms.com';
const API_TOKEN = process.env.CMS_DATOCMS_API_TOKEN;

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${API_TOKEN}`,
};

const client = new GraphQLClient(API_URL, { headers });

export default client;

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
export const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

export const internalLinkRecords = `
  ... on CategoryRecord {
    slug
    _modelApiKey
  }
  ... on PageRecord {
    slug
    _modelApiKey
    parent {
      slug
      parent {
        slug
      }
    }
  }
  ... on EventRecord {
    slug
    _modelApiKey
  }
  ... on TopicRecord {
    slug
    _modelApiKey
  }
  ... on PostRecord {
    slug
    _modelApiKey
  }
`;

export const linkFragment = `
  fragment linkFragment on LinkRecord {
    label
    externalUrl
    internal {
      ${internalLinkRecords}
    }
  }
`;

export const fetchAPI = async (
  query,
  { variables, preview } = { variables: {}, preview: false }
) => {
  const res = await fetch(API_URL + (preview ? '/preview' : ''), {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
};

export async function getPage(preview: boolean, slug: string) {
  const data = await fetchAPI(
    `
    query PageQuery($slug: String) {
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
      page(filter: {slug: {eq: $slug}}) {
        id
        slug
        title
        seo: _seoMetaTags {
          tag
          attributes
          content
        }
        modules {
          ... on HeroAnimationRecord {
            id
            _modelApiKey
            subtitle
            title
            animation
            backgroundType
          }
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
          ... on SectionImageLinkRecord {
            id
            theme
            heading
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
          ... on SectionLinkRecord {
            id
            theme
            heading
            _modelApiKey
            callToAction {
              ...linkFragment
            }
          }
          ... on IframeRecord {
            id
            _modelApiKey
            title
            url
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
          ... on JourneyLauncherRecord {
            id
            _modelApiKey
          }
          ... on LinkCloudRecord {
            id
            _modelApiKey
            items {
              ${internalLinkRecords}
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
          ... on ArticleRecord {
            id
            _modelApiKey
            body(markdown: true)
            centered
          }
          ... on MissionRecord {
            id
            _modelApiKey
            heading
            eyebrow
            text
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
          ... on FullWidthImageRecord {
            id
            _modelApiKey
            image {
              responsiveImage(imgixParams: {auto: format, fit: crop, w: 1440, h: 500}) {
                ...responsiveImageFragment
              }
            }
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
        }
      }
    }
    ${responsiveImageFragment}
    ${linkFragment}
    `,
    {
      preview,
      variables: {
        slug,
      },
    }
  );
  return data;
}

export const getChildNavItems = memo(async (slug, pathPrefix = '') => {
  const data = await fetchAPI(
    `
    query ChildNavItems($slug: String) {
      page(filter: {slug: {eq: $slug}}) {
        slug
        title
        children {
          slug
          title
        }
      }
    }`,
    {
      preview: false,
      variables: {
        slug,
      },
    }
  );

  let paths: any[] = [
    {
      id: data.page.slug,
      label: data.page.title,
      linkProps: {
        href: `${pathPrefix}/${data.page.slug}`,
      },
    },
  ];

  data.page.children.forEach((child) => {
    paths.push({
      id: child.slug,
      label: child.title,
      linkProps: {
        as: `${paths[0].linkProps.href}/${child.slug}`,
        href: `${paths[0].linkProps.href}/[[...slug]]`,
      },
    });
  });

  if (CUSTOM_NAV_ITEMS[slug]) {
    paths = [...paths, ...CUSTOM_NAV_ITEMS[slug]];
  }

  return paths;
});

export const getSectionChildren = memo(async (slug) => {
  const data = await fetchAPI(
    `
    query SectionChildren($slug: String) {
      page(filter: {slug: {eq: $slug}}) {
        slug
        title
        children {
          slug
          title
          children {
            slug
            title
            children {
              slug
              title
              children {
                slug
                title
                children {
                  slug
                  title
                  children {
                    slug
                    title
                  }
                }
              }
            }
          }
        }
      }
    }`,
    {
      preview: false,
      variables: {
        slug,
      },
    }
  );
  return data?.page;
});
