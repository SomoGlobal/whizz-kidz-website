import cx from 'classnames';
import React, { useContext } from 'react';
import BrandContext, { brands } from '../../lib/brand-context';
import CallToAction from '../call-to-action';
import Container from '../container';

export interface IHeroProps {
  color?: string;
  title: string;
  callToAction?: any;
  subtitle?: string;
  backgroundType?: 'grey' | 'color' | 'image';
  image?: {
    url: string;
  };
  pattern?: 'home' | 'kidz' | 'families' | 'supporters';
  split?: boolean;
}

const colors = [
  brands.families.backgroundColor,
  brands.charity.backgroundColor,
  brands.home.backgroundColor,
  brands.kidz.backgroundColor,
  brands.discover.backgroundColor,
  brands.supporters.backgroundColor,
];

// const colors = [
//   'bg-primary-green',
//   'bg-primary-yellow',
//   'bg-primary-pink',
//   'bg-primary-blue',
//   'bg-primary-gray',
// ];

const Mark: React.FC<{
  className: string;
  hidden?: boolean;
  isShort?: boolean;
}> = ({ className, children, hidden, isShort }) => (
  <span
    aria-hidden={hidden}
    className={cx(
      'px-3 clone',
      { 'py-1': isShort, 'py-3': !isShort },
      className
    )}
  >
    {children}
  </span>
);

/**
 * This component is normally placed at the top of landing pages
 * on a dark background the cta should be outlines
 */
const Hero: React.FC<IHeroProps> = ({
  title,
  subtitle,
  color,
  backgroundType = 'grey',
  pattern,
  image,
  split,
  callToAction,
}) => {
  const { backgroundColor } = useContext(BrandContext);
  const bgColor = color || backgroundColor;
  const containerStyleProps: any = {};
  containerStyleProps.backgroundPosition = 'center right';
  containerStyleProps.backgroundRepeat = 'no-repeat';
  containerStyleProps.backgroundSize = 'contain';

  if (pattern) {
    containerStyleProps.backgroundImage = `url("/svg/hero/${pattern}-hero.svg")`;
  }

  if (image) {
    containerStyleProps.backgroundImage = `url("${image.url}")`;
  }

  return (
    <Container
      as="section"
      className={cx(
        'grid grid-cols-1 grid-rows-1 pl-0 pr-0 items-center bg-cover md:bg-contain',
        {
          'bg-gray-200':
            !split && (backgroundType === 'grey' || backgroundType === 'image'),
          [bgColor]: !split && backgroundType === 'color',
        }
      )}
      style={containerStyleProps}
      aria-label="hero"
    >
      <div
        className={cx(
          'z-10 px-4 py-24 sm:px-12 md:py-48 col-start-1 col-end-2 row-start-1 row-end-2'
        )}
      >
        <div className="text-white w-11/12 lg:w-7/12 z-10">
          <h1
            className="font-bold leading-normal text-5xl sm:text-6xl md:text-7xl"
            aria-label={title}
          >
            {split ? (
              title.split(' ').map((part, index) => (
                <React.Fragment key={index}>
                  <Mark
                    hidden
                    className={colors[index % colors.length]}
                    isShort
                  >
                    {part}
                  </Mark>{' '}
                </React.Fragment>
              ))
            ) : (
              <Mark hidden className={bgColor}>
                {title}
              </Mark>
            )}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl leading-loose">
              <Mark className={bgColor}>{subtitle}</Mark>
            </p>
          )}
          {callToAction && (
            <div className="w-full mt-10">
              <CallToAction {...callToAction} size="lg" isGhost />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Hero;
