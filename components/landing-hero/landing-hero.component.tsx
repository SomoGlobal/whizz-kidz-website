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
      <div className="absolute top-0 right-0 invisible w-1/2 h-full md:visible">
        <Puzzle />
      </div>
      <div className="relative z-10 px-4 py-24 sm:px-12 md:py-48">
        <div>
          <h1 className="font-bold leading-normal text-white text-7xl">
            <Mark className={bgColor}>{title}</Mark>
          </h1>
          {subtitle && (
            <p className="text-2xl leading-loose text-white">
              <Mark className={bgColor}>{subtitle}</Mark>
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default LandingHero;
