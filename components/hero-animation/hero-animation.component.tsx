import React from 'react';
import Hero, { IHeroProps } from '../hero/hero.component';

export interface IHeroAnimationProps
  extends Pick<IHeroProps, 'title' | 'subtitle' | 'backgroundType'> {
  animation: string;
}

const HeroAnimation: React.FC<IHeroAnimationProps> = ({
  title,
  subtitle,
  animation,
  backgroundType,
}) => {
  return (
    <Hero
      title={title}
      subtitle={subtitle}
      animation={animation}
      backgroundType={backgroundType}
    />
  );
};

export default HeroAnimation;
