import 'isomorphic-unfetch';
import memo from 'memoizee';
import { GraphQLClient } from 'graphql-request';

const CUSTOM_NAV_ITEMS = {
  families: [
    {
      id: 'meet-the-kidz',
      label: 'Meet the kidz',
      linkProps: {
        href: `/families/meet-the-kidz`,
      },
    },
  ],
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
      page(filter: {slug: {eq: $slug}}) {
        id
        slug
        title
        modules {
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
          ... on TextWithPatternRecord {
            id
            heading
            eyebrow
            pattern
            text
            _modelApiKey
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
          ... on ImageWithTextRecord {
            id
            heading
            eyebrow
            text
            imagePosition
            transparentBackground
            _modelApiKey
            image {
              responsiveImage(imgixParams: {auto: format, fit: crop, w: 300, h: 300}) {
                ...responsiveImageFragment
              }
            }
            callToAction {
              label
              internal {
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
              }
            }
          }
        }
      }
    }
    ${responsiveImageFragment}
    `,
    {
      preview,
      variables: {
        slug,
      },
    }
  );
  return data?.page;
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
      preview: true,
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

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String) {
      post(filter: {slug: {eq: $slug}}) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        slug,
      },
    }
  );
  return data?.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      allPosts {
        slug
      }
    }
  `);
  return data?.allPosts;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    {
      allPosts(orderBy: date_DESC, first: 20) {
        title
        slug
        excerpt
        date
        coverImage {
          responsiveImage(imgixParams: {auto: format, fit: crop, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
        author {
          name
          picture {
            url(imgixParams: {auto: format, fit: crop, w: 100, h: 100, sat: -100})
          }
        }
      }
    }

    ${responsiveImageFragment}
  `,
    { preview, variables: {} }
  );

  return data?.allPosts;
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: String) {
    post(filter: {slug: {eq: $slug}}) {
      title
      slug
      content
      date
      ogImage: coverImage{
        url(imgixParams: {auto: format, fit: crop, w: 2000, h: 1000 })
      }
      coverImage {
        responsiveImage(imgixParams: {auto: format, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: {auto: format, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
    }

    morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
      title
      slug
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: {auto: format, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: {auto: format, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
    }
  }

  ${responsiveImageFragment}
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
