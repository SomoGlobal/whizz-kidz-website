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
    { id: 'link-1', label: 'Item 1', linkProps: { href: '/item1' } },
    { id: 'link-2', label: 'Item 2', linkProps: { href: '/item2' } },
    { id: 'link-3', label: 'Item 3', linkProps: { href: '/item3' } },
  ],
};
