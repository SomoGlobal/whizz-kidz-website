import React from 'react';
import useSWR from 'swr';
import LinkGrid from 'components/link-grid';
import Button from '../../components/button';
import Container from '../../components/container';
import api from '../../lib/api';

const GET_TOPICS_BY_CATEGORY_ID = `
  query GetTopicsByCategoryId($categoryId: ItemId) {
    allTopics(filter: {category: {eq: $categoryId}}) {
      name
      slug
    }
  }
`;

export interface ITopicGridProps {
  category: {
    slug: string;
    name: string;
    id: string;
  };
}

const TopicGrid: React.FC<ITopicGridProps> = ({ category }) => {
  const { data, error } = useSWR<any>(
    [GET_TOPICS_BY_CATEGORY_ID, category.id],
    (query, id) => api.request(query, { categoryId: id })
  );

  const loading = !data;

  if (error) {
    return null;
  }

  if (loading) {
    return null;
  }

  const topicGridTiles = data.allTopics.map((item) => ({
    label: item.name,
    linkProps: {
      as: `/discover/topic/${item.slug}`,
      href: `/discover/topic/[slug]`,
    },
  }));

  const linkProps = {
    as: `/discover/category/${category.slug}`,
    href: `/discover/category/[slug]`,
  };

  return (
    <>
      <Container className="flex justify-between">
        <h2 className="text-4xl font-bold tracking-wide text-gray-700">
          Discover the {category.name} space
        </h2>
        <Button size="lg" linkProps={linkProps}>
          Jump to the {category.name} space
        </Button>
      </Container>
      <LinkGrid title="Explore by topic" tiles={topicGridTiles} />
    </>
  );
};

export default TopicGrid;
