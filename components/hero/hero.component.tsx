import cx from 'classnames';
import React, { useContext } from 'react';
import BrandContext, { brands } from '../../lib/brand-context';
import Container from '../container';

export interface IHeroProps {
  color?: string;
  title: string;
  subtitle?: string;
  backgroundType?: 'grey' | 'color' | 'image';
  image?: any;
  pattern?: string;
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

const Mark: React.FC<{ className: string }> = ({ className, children }) => (
  <span className={cx('px-4 py-4 md:px-3 md:py-1 clone', className)}>
    {children}
  </span>
);

/**
 * This component is normally placed at the top of landing pages
 */
const Hero: React.FC<IHeroProps> = ({
  title,
  subtitle,
  color,
  backgroundType = 'grey',
  pattern,
}) => {
  const { backgroundColor } = useContext(BrandContext);
  const bgColor = color || backgroundColor;
  const split = false;

  return (
    <Container
      as="section"
      className={cx('grid grid-cols-1 grid-rows-1 pl-0 pr-0', {
        'bg-gray-200': backgroundType === 'grey',
        [bgColor]: backgroundType === 'color',
      })}
      aria-label="hero"
    >
      {pattern && (
        <img
          src={`/svg/hero/${pattern}-hero.svg`}
          alt="pattern"
          className="col-start-1 col-end-2 row-start-1 row-end-2 w-auto ml-auto h-full"
        />
      )}
      <div
        className={cx(
          'z-10 px-4 py-24 sm:px-12 md:py-48 col-start-1 col-end-2 row-start-1 row-end-2'
        )}
      >
        <div className="text-white w-11/12 lg:w-7/12 z-10">
          <h1 className="font-bold leading-normal text-5xl sm:text-6xl md:text-7xl">
            {split ? (
              title.split(' ').map((part, index) => (
                <>
                  <Mark key={index} className={colors[index % colors.length]}>
                    {part}
                  </Mark>{' '}
                </>
              ))
            ) : (
              <Mark className={bgColor}>{title}</Mark>
            )}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl leading-loose">
              <Mark className={bgColor}>{subtitle}</Mark>
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Hero;
