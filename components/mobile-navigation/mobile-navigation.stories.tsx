import React from 'react';

import MobileNavigation from './mobile-navigation.component';

const Template = (args) => <MobileNavigation {...args} />;

export default {
  title: 'Components/MobileNavigation',
  component: MobileNavigation,
};

export const Story = Template.bind({});
Story.args = {
  links: [
    {
      id: 'link0',
      label: 'Home',
      type: 'link',
      linkProps: { href: '/' },
      children: [],
      brand: 'home',
    },
    {
      id: 'link1',
      label: 'Kidz',
      type: 'link',
      children: [],
      linkProps: { href: '/kidz' },
      brand: 'kidz',
    },
    {
      id: 'link2',
      label: 'Families',
      type: 'link',
      children: [],
      linkProps: { href: '/families' },
      brand: 'families',
    },
    {
      id: 'link3',
      label: 'Supporters',
      type: 'link',
      children: [],
      linkProps: { href: '/supporters' },
      brand: 'supporters',
    },
    {
      id: 'link5',
      label: 'The Charity',
      type: 'link',
      children: [],
      linkProps: { href: '/charity' },
      brand: 'charity',
    },
    {
      id: 'link4',
      label: 'Discover',
      type: 'link',
      children: [],
      linkProps: { href: '/discover' },
      brand: 'discover',
    },
  ],
};
