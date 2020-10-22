import cx from 'classnames';
import React, { useContext } from 'react';
import Container from '../container';
import BrandContext from '../../lib/brand-context';
import CallToAction from '../call-to-action';

export interface ILargeImageHeroProps {
  image: { url: string; alt: string };
  title?: string;
  subtitle?: string;
  callToAction?: any;
}

const Mark: React.FC<{ className: string; hidden?: boolean }> = ({
  className,
  children,
  hidden,
}) => (
  <span aria-hidden={hidden} className={cx('px-3 py-3 clone', className)}>
    {children}
  </span>
);

const LargeImageHero: React.FC<ILargeImageHeroProps> = ({
  image,
  title,
  subtitle,
  callToAction,
}) => {
  const { backgroundColor } = useContext(BrandContext);

  return (
    <section
      className={cx(
        'grid grid-cols-1 grid-rows-1 items-center bg-cover md:bg-contain',
        backgroundColor
      )}
    >
      <Container className="col-start-1 col-end-2 row-start-1 row-end-2 z-10">
        <div className="text-white w-11/12 lg:w-7/12 py-24 md:py-48">
          <h1
            className="font-bold leading-normal text-5xl sm:text-6xl md:text-7xl"
            aria-label={title}
          >
            <Mark hidden className={backgroundColor}>
              {title}
            </Mark>
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl leading-loose">
              <Mark className={backgroundColor}>{subtitle}</Mark>
            </p>
          )}
          {callToAction && (
            <div className="w-full mt-10">
              <CallToAction {...callToAction} size="lg" />
            </div>
          )}
        </div>
      </Container>
      <img
        alt={image.alt}
        className="col-start-1 col-end-2 row-start-1 row-end-2 h-full w-full object-cover"
        src={image.url}
      />
    </section>
  );
};

export default LargeImageHero;
