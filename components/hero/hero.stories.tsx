import React from 'react';

import Hero from './hero.component';

const Template = (args) => <Hero {...args} />;

export default {
  title: 'Modules/Hero',
  component: Hero,
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
    pattern: {
      control: {
        type: 'radio',
        options: ['home', 'kidz', 'families', 'supporters'],
      },
    },
  },
};

export const Home = Template.bind({});
Home.args = { pattern: 'home', title: 'home' };

export const Kidz = Template.bind({});
Kidz.args = { pattern: 'kidz', title: 'kidz' };

export const Supporters = Template.bind({});
Supporters.args = { pattern: 'supporters', title: 'supporters' };

export const Families = Template.bind({});
Families.args = { pattern: 'families', title: 'families' };
