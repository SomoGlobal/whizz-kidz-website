import Link from 'next/link';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import cx from 'classnames';
import { Image, ResponsiveImageType } from 'react-datocms';
import DateTime from '../date-time';

import styles from './post-card.module.css';

export interface IPostCardProps {
  title: string;
  image: { responsiveImage: ResponsiveImageType };
  publishedAt: string;
  linkProps: any;
}

const PostCard: React.FC<IPostCardProps> = ({
  title,
  image,
  publishedAt,
  linkProps,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <article
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
            className={cx('px-8 py-4 text-2xl font-bold flex-1 bg-white z-10')}
          >
            <div className={styles.clamp}>{title}</div>
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
      <p className="px-8 py-2 text-sm font-normal text-right bg-gray-100 rounded-b rounded-t-none border-t border-solid border-gray-300">
        <DateTime time={publishedAt} label="Published" />
      </p>
    </article>
  );
};

export default PostCard;
