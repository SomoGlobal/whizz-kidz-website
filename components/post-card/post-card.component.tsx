import Link from 'next/link';
import React from 'react';
import { Image } from 'react-datocms';
import DateTime from '../date-time';

import styles from './post-card.module.css';

export interface IPostCardProps {
  title: string;
  image: any;
  publishedAt: string;
  linkProps: any;
}

const PostCard: React.FC<IPostCardProps> = ({
  title,
  image,
  publishedAt,
  linkProps,
}) => {
  return (
    <article
      className="border-4 rounded-lg shadow-xl justify-between flex flex-col bg-white text-2xl font-bold text-gray-700 h-full"
      style={{ borderColor: image.responsiveImage?.bgColor }}
    >
      <Link {...linkProps}>
        <a className="hover:underline flex flex-col flex-1">
          <Image
            data={image.responsiveImage}
            className="rounded-t rounded-b-none"
          />
          <h3 className={`mx-8 my-4 flex-1 flex items-center ${styles.clamp}`}>
            {title}
          </h3>
        </a>
      </Link>
      <hr />
      <p className="px-8 py-2 text-sm font-normal text-gray-700 text-right bg-gray-100">
        <DateTime time={publishedAt} label="Published" />
      </p>
    </article>
  );
};

export default PostCard;
