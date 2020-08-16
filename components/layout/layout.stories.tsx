import React from 'react';

import Layout from './layout.component';

const Template = (args) => <Layout {...args} />;

export default {
  title: 'Components/Layout',
  component: Layout,
  argTypes: {
    brand: { control: 'text' },
  },
};

export const Story = Template.bind({});

Story.args = {
  brand: 'kidz',
  preview: false,
  pageTitle: 'Page Title',
  activeNavIndex: 0,
  secondaryNavItems: [
    { label: 'Item 1', href: '/item1' },
    { label: 'Item 2', href: '/item2' },
    { label: 'Item 3', href: '/item3' },
  ],
};
