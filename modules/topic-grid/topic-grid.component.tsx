import React from 'react';
import useSWR from 'swr';
import LinkGrid from 'components/link-grid';
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

  return <LinkGrid title="Explore by topic" tiles={topicGridTiles} />;
};

export default TopicGrid;
