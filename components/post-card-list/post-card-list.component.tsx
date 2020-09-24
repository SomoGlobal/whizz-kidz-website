import React from 'react';
import Container from '../container';
import PostCard from '../post-card';

export interface IPostCardListProps {
  label: string;
  posts: any[];
}

const PostCardList: React.FC<IPostCardListProps> = ({ posts, label }) => {
  return (
    <Container as="section" className="my-20">
      <h2 className="text-gray-700 font-bold leading-snug text-3xl mb-6">
        {label}
      </h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard
              title={post.title}
              image={post.coverImage}
              publishedAt={post._publishedAt}
              hasVideo={!!post.videoFile}
              linkProps={{
                as: `/discover/post/${post.slug}`,
                href: `/discover/post/[slug]`,
              }}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PostCardList;
