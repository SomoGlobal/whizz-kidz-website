import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import DateTime from '../date-time';
import BrandContext from '../../lib/brand-context';
import Container from '../container';

export interface IFeaturedPostProps {
  slug: string;
  title: string;
  publishedAt?: string;
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
}) => {
  const { backgroundColor } = useContext(BrandContext);
  const router = useRouter();

  return (
    <Container as="section" className="my-20" aria-label="Featured Post">
      <h2 className="text-gray-700 font-bold leading-snug text-3xl mb-6">
        Featured Post
      </h2>
      <div className="grid grid-cols-1 sm:grid-rows-1">
        <button
          type="button"
          className="col-start-1 col-end-2 row-start-1 row-end-2 z-0"
          onClick={() => router.push(`/discover/post/${slug}`)}
        >
          <Image data={image.responsiveImage} />
        </button>
        <div className="col-start-1 col-end-2 md:row-start-1 sm:row-end-2 z-10 flex flex-col justify-between sm:p-10 md:p-16">
          <div className="flex justify-between">
            {topic && (
              <Link
                href="/discover/topic/[slug]"
                as={`/discover/topic/${topic.slug}`}
              >
                <a className="text-white sm:rounded-full bg-indigo-900 py-1 px-3 text-sm font-medium hover:underline">
                  {topic.name}
                </a>
              </Link>
            )}
            {publishedAt && (
              <DateTime
                label="Published"
                time={publishedAt}
                className="bg-white sm:rounded-full text-indigo-900 py-1 px-3 text-sm font-medium lead"
              />
            )}
          </div>

          <div>
            <Link as={`/discover/post/${slug}`} href="/discover/post/[slug]">
              <a
                className={`clone text-2xl md:text-3xl text-white p-2 md:p-4 md:leading-loose font-bold hover:underline cursor-pointer ${backgroundColor}`}
              >
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
