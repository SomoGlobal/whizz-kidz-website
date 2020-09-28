import Link from 'next/link';
import React from 'react';

export interface ITopicTagProps {
  name: string;
  slug: string;
}

const TopicTag: React.FC<ITopicTagProps> = ({ name, slug }) => {
  return (
    <Link href="/discover/topic/[slug]" as={`/discover/topic/${slug}`}>
      <a className="px-3 py-1 text-sm font-medium text-indigo-900 bg-gray-300 sm:rounded-full hover:underline">
        {name}
      </a>
    </Link>
  );
};

export default TopicTag;
