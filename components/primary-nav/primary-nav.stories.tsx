import React from 'react';

import PrimaryNav from './primary-nav.component';

const Template = (args) => <PrimaryNav {...args} />;

export default {
  title: 'Components/PrimaryNav',
  component: PrimaryNav,
};

export const Story = Template.bind({});

Story.args = {
  links: [
    {
      id: 'link-1',
      label: 'Link 1',
      brand: 'kidz',
      linkProps: {
        href: '/link-1',
      },
    },
    {
      id: 'link-2',
      label: 'Link 2',
      brand: 'families',
      linkProps: {
        href: '/link-2',
      },
    },
    {
      id: 'link-3',
      label: 'Link 3',
      brand: 'supporters',
      linkProps: {
        href: '/link-3',
      },
    },
  ],
};
