import Link from 'next/link';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import cx from 'classnames';
import { Image, ResponsiveImageType } from 'react-datocms';
import DateTime from '../date-time';
import TopicTag from '../topic-tag';

import styles from './post-card.module.css';

export interface IPostCardProps {
  title: string;
  topic: { name: string; slug: string };
  image: { responsiveImage: ResponsiveImageType };
  publishedAt: string;
  hasVideo?: boolean;
  linkProps: any;
}

const PostCard: React.FC<IPostCardProps> = ({
  title,
  image,
  publishedAt,
  linkProps,
  topic,
  hasVideo,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <article
      aria-label={hasVideo ? 'Video' : 'Article'}
      className={cx(
        'border-4 rounded-lg shadow-xl justify-between flex flex-col bg-white text-gray-700 h-full',
        styles.article
      )}
      style={{ borderColor: image.responsiveImage?.bgColor }}
    >
      <Link {...linkProps}>
        <a
          className={`hover:underline ${styles.link} flex flex-col-reverse flex-1 overflow-hidden`}
          aria-label={title}
        >
          <div
            className={cx(
              'px-4 md:px-6 py-4 text-2xl font-bold flex-1 bg-white z-10'
            )}
          >
            <div className={styles.clamp}>
              {hasVideo && (
                <svg
                  aria-label="Video"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="1.5em"
                  height="1.5em"
                  className="inline-flex mr-2 pb-1"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
              )}
              {title}
            </div>
          </div>
          <motion.figure
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
            className="z-0"
          >
            <Image
              data={image.responsiveImage}
              className="rounded-t rounded-b-none"
            />
          </motion.figure>
        </a>
      </Link>
      <p className="px-6 py-2 text-sm font-normal flex justify-between items-center bg-gray-100 rounded-b rounded-t-none border-t border-solid border-gray-300">
        {topic && <TopicTag name={topic.name} slug={topic.slug} />}
        <DateTime time={publishedAt} label="Published" />
      </p>
    </article>
  );
};

export default PostCard;
