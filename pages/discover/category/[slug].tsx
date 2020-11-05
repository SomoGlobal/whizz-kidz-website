import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../../components/layout';
import LinkGrid from '../../../components/link-grid';
import PageLoading from '../../../components/page-loading';
import PageNotFound from '../../../components/page-not-found';
import { fetchAPI } from '../../../lib/api';

export default function DiscoverCategory({
  preview,
  topicGridTiles,
  title,
  category,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <PageLoading />;
  }

  if (!title) {
    return <PageNotFound />;
  }

  return (
    <>
      <Layout
        preview={preview}
        brand="discover"
        pageTitle={title}
        breadcrumbs={[
          { label: 'Discover', linkProps: { href: '/discover' } },
          {
            label: category.name,
            linkProps: {
              as: `/discover/category/${category.slug}`,
              href: `/discover/category/[slug]`,
            },
          },
        ]}
      >
        <Head>
          <title>{title} | Whizz-Kidz</title>
        </Head>
        <LinkGrid title="Explore by topic" tiles={topicGridTiles} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const data = await fetchAPI(
    `
query AllCategoriesForSlugs {
  allCategories {
    slug
  }
}

`,
    { preview: false, variables: {} }
  );

  const staticPaths = data.allCategories.map((cat) => ({ params: cat }));

  return {
    paths: staticPaths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const preview = !!context.preview;
  const { slug } = context.params;
  const props: any = {
    preview,
    topicGridTiles: [],
    title: '',
    category: null,
  };

  try {
    const categoryData = await fetchAPI(
      `
query GetCategoryId($slug: String) {
  category(filter: {slug: {eq: $slug}}) {
    id
    name
    slug
  }
}
`,
      { preview, variables: { slug } }
    );

    const topicsData = await fetchAPI(
      `
query GetTopicsByCategoryId($categoryId: ItemId) {
  allTopics(filter: {category: {eq: $categoryId}}) {
    name
    slug
  }
}
`,
      { preview, variables: { categoryId: categoryData.category.id } }
    );

    const topicGridTiles = topicsData.allTopics.map((item) => ({
      label: item.name,
      linkProps: {
        as: `/discover/topic/${item.slug}`,
        href: `/discover/topic/[slug]`,
      },
    }));

    props.topicGridTiles = topicGridTiles;
    props.title = categoryData.category.name;
    props.category = categoryData.category;
  } catch (e) {
    //
  }

  return {
    props,
    revalidate: 60 * 60 * 24, // once every 24 hours
  };
};
