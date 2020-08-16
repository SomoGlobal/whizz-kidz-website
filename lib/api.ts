import 'isomorphic-unfetch';

const API_URL = 'https://graphql.datocms.com';
const API_TOKEN = process.env.CMS_DATOCMS_API_TOKEN;

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const responsiveImageFragment = `
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
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
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
          }
          ... on ImageWithTextRecord {
            id
            heading
            eyebrow
            text
            _modelApiKey
            image {
              responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 300, h: 300}) {
                ...responsiveImageFragment
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
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
        author {
          name
          picture {
            url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
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
        url(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 })
      }
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
        }
      }
    }

    morePosts: allPosts(orderBy: date_DESC, first: 2, filter: {slug: {neq: $slug}}) {
      title
      slug
      excerpt
      date
      coverImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      author {
        name
        picture {
          url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
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
