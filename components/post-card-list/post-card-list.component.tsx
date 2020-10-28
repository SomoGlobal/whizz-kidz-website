import React from 'react';
import CardList from '../card-list';
import FadeInListItem from '../fade-in-list-item';
import PostCard from '../post-card';

export interface IPostCardListProps {
  label: string;
  posts: any[];
}

const PostCardList: React.FC<IPostCardListProps> = ({ posts, label }) => {
  return (
    <CardList heading={label}>
      {posts.map((post) => (
        <FadeInListItem key={post.slug}>
          <PostCard
            title={post.title}
            image={post.coverImage}
            topic={post.topic}
            publishedAt={post.publishedDate}
            hasVideo={!!post.videoFile}
            linkProps={{
              as: `/discover/post/${post.slug}`,
              href: `/discover/post/[slug]`,
            }}
          />
        </FadeInListItem>
      ))}
    </CardList>
  );
};

export default PostCardList;
