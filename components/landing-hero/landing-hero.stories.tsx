import React from 'react';

import LandingHero from './landing-hero.component';

const Template = (args) => <LandingHero {...args} />;

export default {
  title: 'Modules/LandingHero',
  component: LandingHero,
  args: {
    title: 'Lorem Ipsum',
    subtitle: 'lorem ipsum',
    backgroundType: 'grey',
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    backgroundType: {
      control: {
        type: 'inline-radio',
        options: ['grey', 'color', 'image'],
      },
    },
  },
};

export const Story = Template.bind({});
Story.args = {};
