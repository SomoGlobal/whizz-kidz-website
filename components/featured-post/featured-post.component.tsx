import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import BrandContext from '../../lib/brand-context';
import Container from '../container';
import DateTime from '../date-time';

export interface IFeaturedPostProps {
  slug: string;
  title: string;
  publishedAt?: string;
  hasVideo?: boolean;
  topic: {
    name: string;
    slug: string;
  };
  image: {
    responsiveImage: ResponsiveImageType;
  };
}

const FeaturedPost: React.FC<IFeaturedPostProps> = ({
  slug,
  title,
  topic,
  image,
  publishedAt,
  hasVideo,
}) => {
  const { backgroundColor } = useContext(BrandContext);
  const router = useRouter();

  return (
    <Container as="section" className="my-20" aria-label="Featured Post">
      <h2 className="mb-6 text-3xl font-bold leading-snug text-gray-700">
        Featured Post
      </h2>
      <div className="grid grid-cols-1 sm:grid-rows-1">
        <button
          type="button"
          className="z-0 col-start-1 col-end-2 row-start-1 row-end-2"
          onClick={() => router.push(`/discover/post/${slug}`)}
        >
          <Image data={image.responsiveImage} />
        </button>
        <div className="z-10 flex flex-col justify-between col-start-1 col-end-2 md:row-start-1 sm:row-end-2 sm:p-10 md:p-16">
          <div className="flex justify-between">
            {topic && (
              <Link
                href="/discover/topic/[slug]"
                as={`/discover/topic/${topic.slug}`}
              >
                <a className="px-3 py-1 text-sm font-medium text-white bg-indigo-900 sm:rounded-full hover:underline">
                  {topic.name}
                </a>
              </Link>
            )}
            {publishedAt && (
              <DateTime
                label="Published"
                time={publishedAt}
                className="px-3 py-1 text-sm font-medium text-indigo-900 bg-white sm:rounded-full lead"
              />
            )}
          </div>

          <div>
            <Link as={`/discover/post/${slug}`} href="/discover/post/[slug]">
              <a
                className={`clone text-2xl md:text-3xl text-white p-2 md:p-4 md:leading-loose font-bold hover:underline cursor-pointer ${backgroundColor}`}
              >
                {hasVideo && (
                  <svg
                    role="presentation"
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
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedPost;
