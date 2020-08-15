import React, { useContext } from 'react';
import cx from 'classnames';
import BrandContext from '../../lib/brand-context';
import Container from '../container';
import Puzzle from '../puzzle';

export interface ILandingHeroProps {
  color?: string;
  title: string;
  subtitle: string;
}

const Mark: React.FC<{ className: string }> = ({ className, children }) => (
  <span className={cx('px-4 py-4 clone', className)}>{children}</span>
);

/**
 * This component is normally placed at the top of landing pages
 */
const LandingHero: React.FC<ILandingHeroProps> = ({
  title,
  subtitle,
  color,
}) => {
  const { backgroundColor } = useContext(BrandContext);
  const bgColor = color || backgroundColor;

  return (
    <Container element="section" bg="bg-gray-200">
      <div className="absolute right-0 top-0 w-1/2 h-full invisible md:visible">
        <Puzzle />
      </div>
      <div className="px-4 sm:px-12 py-24 md:py-48 z-10 relative">
        <div>
          <h1 className="text-white text-7xl font-bold leading-normal">
            <Mark className={bgColor}>{title}</Mark>
          </h1>
          {subtitle && (
            <p className="text-white text-2xl leading-loose">
              <Mark className={bgColor}>{subtitle}</Mark>
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default LandingHero;
