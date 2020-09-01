import React, { useContext } from 'react';
import cx from 'classnames';
import { Image } from 'react-datocms';
import BrandContext from '../../lib/brand-context';
import Container from '../container';
import Puzzle from '../puzzle';

export interface ILandingHeroProps {
  color?: string;
  title: string;
  subtitle: string;
  backgroundType?: 'grey' | 'color' | 'image';
  image?: any;
}

const Mark: React.FC<{ className: string }> = ({ className, children }) => (
  <span className={cx('px-4 py-4 clone', className)}>{children}</span>
);

const BGImage: React.FC<{ src: string }> = ({ src, children }) => (
  <div
    style={{
      backgroundImage: `url(${src})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    {children}
  </div>
);

/**
 * This component is normally placed at the top of landing pages
 */
const LandingHero: React.FC<ILandingHeroProps> = ({
  title,
  subtitle,
  color,
  backgroundType = 'grey',
  image,
}) => {
  const { backgroundColor } = useContext(BrandContext);
  const bgColor = color || backgroundColor;

  const PuzzleBackground = (
    <div className="absolute top-0 right-0 invisible w-1/2 h-full md:visible">
      <Puzzle />
    </div>
  );

  const content = (
    <Container
      as="section"
      className={cx('grid grid-cols-1 grid-rows-1 pl-0 pr-0 lg:pl-4 lg:pr-4', {
        'bg-gray-200': backgroundType === 'grey',
        [bgColor]: backgroundType === 'color',
      })}
      aria-label="hero"
    >
      <div
        className={cx(
          'relative z-10 px-4 py-24 sm:px-12 md:py-48 col-start-1 col-end-2 row-start-1 row-end-2',
          {}
        )}
      >
        <div>
          <h1 className="font-bold leading-normal text-white text-5xl sm:text-6xl md:text-7xl">
            <Mark className={bgColor}>{title}</Mark>
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl leading-loose text-white">
              <Mark className={bgColor}>{subtitle}</Mark>
            </p>
          )}
        </div>
      </div>
    </Container>
  );

  if (backgroundType === 'image') {
    return <BGImage src={image.responsiveImage.src}>{content}</BGImage>;
  }

  return content;
};

export default LandingHero;
