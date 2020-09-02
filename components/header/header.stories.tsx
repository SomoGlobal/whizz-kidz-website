import React from 'react';

import Header from './header.component';

const Template = (args) => <Header {...args} />;

export default {
  title: 'Components/Header',
  component: Header,
  args: {
    primaryActiveIndex: 1,
    links: [
      {
        id: 'link4',
        label: 'Discover',
        type: 'category',
        brand: 'discover',
        linkProps: { href: '/discover' },
        children: [],
      },
      {
        id: 'link5',
        label: 'The Charity',
        type: 'category',
        brand: 'charity',
        linkProps: { href: '/charity' },
        children: [],
      },
    ],
  },
};

export const Story = Template.bind({});
Story.args = {};
