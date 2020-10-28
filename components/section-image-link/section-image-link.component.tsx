import cx from 'classnames';
import { useReducedMotion } from 'framer-motion';
import React from 'react';
import { Image } from 'react-datocms';
import { Parallax } from 'react-scroll-parallax';
import CallToAction from '../call-to-action';
import Container from '../container';

type SectionImageLinkTheme = 'blue' | 'green' | 'pink' | 'yellow' | 'gray';

export interface ISectionImageLinkProps {
  heading: string;
  image: any;
  theme: SectionImageLinkTheme;
  callToAction?: any;
}

const themes = {
  blue: {
    sectionBackground: 'bg-primary-blue',
    textBackground: 'bg-secondary-blue',
    textColor: 'text-white',
  },
  green: {
    sectionBackground: 'bg-primary-green',
    textBackground: 'bg-secondary-green',
    textColor: 'text-white',
  },
  pink: {
    sectionBackground: 'bg-primary-pink',
    textBackground: 'bg-secondary-pink',
    textColor: 'text-white',
  },
  yellow: {
    sectionBackground: 'bg-primary-yellow',
    textBackground: 'bg-secondary-green',
    textColor: 'text-white',
  },
  gray: {
    sectionBackground: 'bg-primary-gray',
    textBackground: 'bg-secondary-gray',
    textColor: 'text-white',
  },
};

const SectionImageLink: React.FC<ISectionImageLinkProps> = ({
  heading,
  theme = 'blue',
  image,
  callToAction,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Container
      className={cx(
        'grid items-center my-10 md:my-20 lg:my-40 lg:grid-cols-5',
        themes[theme].sectionBackground
      )}
    >
      <div
        className={cx(
          'grid gap-8 py-8 lg:px-16 lg:py-16 lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-4'
        )}
      >
        <div className="text-6xl lg:text-7xl font-bold">
          <span
            className={cx(
              'px-4 py-3 clone',
              themes[theme].textBackground,
              themes[theme].textColor
            )}
          >
            {heading}
          </span>
        </div>
        {callToAction && (
          <div className="mt-10">
            <CallToAction {...callToAction} size="lg" isOutlined />
          </div>
        )}
      </div>
      <Parallax
        disabled={!!shouldReduceMotion}
        y={[10, -10]}
        x={[2, 0]}
        className={cx(
          'lg:row-start-1 lg:row-end-2 max-w-lg lg:col-start-4 lg:col-end-6'
        )}
      >
        <Image data={image.responsiveImage} />
      </Parallax>
    </Container>
  );
};

export default SectionImageLink;
