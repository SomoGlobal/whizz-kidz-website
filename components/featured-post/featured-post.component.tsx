import Link from 'next/link';
import React, { useContext } from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import BrandContext from '../../lib/brand-context';
import Container from '../container';

export interface IFeaturedPostProps {
  slug: string;
  title: string;
  topic: string;
  image: {
    responsiveImage: ResponsiveImageType;
  };
}

const FeaturedPost: React.FC<IFeaturedPostProps> = ({
  slug,
  title,
  topic,
  image,
}) => {
  const { backgroundColor } = useContext(BrandContext);

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-rows-1 grid-rows-2">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 z-0">
          <Image data={image.responsiveImage} />
        </div>
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 z-10 flex flex-col justify-between sm:p-10 md:p-16">
          <div className="flex justify-between">
            <div className="text-white sm:rounded-full bg-indigo-900 py-1 px-3 text-sm font-medium">
              {topic}
            </div>
            <div className="bg-white sm:rounded-full text-indigo-900 py-1 px-3 text-sm font-medium lead">
              11 Aug 2020
            </div>
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
