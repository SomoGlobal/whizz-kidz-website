import React from 'react';
import Container from '../container';
import Puzzle from '../puzzle';

export interface ILandingHeroProps {
  title: string;
  subtitle: string;
}

/**
 * This component is normally placed at the top of landing pages
 */
const LandingHero: React.FC<ILandingHeroProps> = ({ title, subtitle }) => {
  return (
    <Container bg="bg-gray-200">
      <div className="absolute right-0 top-0 w-1/2 h-full invisible md:visible">
        <Puzzle />
      </div>
      <div className="px-4 sm:px-24 py-24 md:py-48 z-10 relative">
        <div>
          <h1 className="text-white text-7xl font-bold">
            <span className="bg-indigo-800 px-4 py-4">{title}</span>
          </h1>
          <div className="text-white text-2xl">
            <span className="bg-indigo-800 px-4 py-4">{subtitle}</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LandingHero;
