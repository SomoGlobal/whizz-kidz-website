import React from 'react';

import LandingHero from './landing-hero.component';

export default {
  title: 'Modules/LandingHero',
  component: LandingHero,
};

export const Story = () => (
  <LandingHero
    title="Who we are"
    subtitle="Some text that sits below the main title"
  />
);

Story.story = {
  name: 'landing hero',
};
