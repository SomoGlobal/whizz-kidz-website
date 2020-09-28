import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Container from '../container';
import PostCard from '../post-card';

export interface IPostCardListProps {
  label: string;
  posts: any[];
}

const Li: React.FC = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.li
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { delay: 0.075 } },
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
      }}
    >
      {children}
    </motion.li>
  );
};

const PostCardList: React.FC<IPostCardListProps> = ({ posts, label }) => {
  return (
    <Container as="section" className="my-10 md:my-20">
      <h2 className="text-gray-700 font-bold leading-snug text-3xl mb-6">
        {label}
      </h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Li key={post.slug}>
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
          </Li>
        ))}
      </ul>
    </Container>
  );
};

export default PostCardList;
