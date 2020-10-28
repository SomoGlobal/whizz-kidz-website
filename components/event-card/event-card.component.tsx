import Link from 'next/link';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import cx from 'classnames';
import { Image, ResponsiveImageType } from 'react-datocms';
import DateTime from '../date-time';

import styles from './event-card.module.css';

export interface IEventCardProps {
  title: string;
  image: { responsiveImage: ResponsiveImageType };
  publishedAt: string;
  linkProps: any;
}

const EventCard: React.FC<IEventCardProps> = ({
  title,
  image,
  publishedAt,
  linkProps,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <article
      aria-label="Event"
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
      <p className="px-6 py-2 text-sm font-normal flex justify-between items-center bg-gray-100 rounded-b rounded-t-none border-t border-solid border-gray-300">
        <DateTime time={publishedAt} />
      </p>
    </article>
  );
};

export default EventCard;
