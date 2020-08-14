import React from 'react';

import SecondaryNav from './secondary-nav.component';

const Template = (args) => <SecondaryNav {...args} />;

export default {
  title: 'Components/SecondaryNav',
  component: SecondaryNav,
  argTypes: {
    color: { control: 'text' },
    activeIndex: { control: 'number' },
  },
};

export const Story = Template.bind({});

Story.args = {
  color: 'bg-blue-500',
  activeIndex: 1,
  items: [
    { label: 'Link 1', href: '/link-1' },
    { label: 'Link 2', href: '/link-2' },
    { label: 'Link 3', href: '/link-3' },
    { label: 'Link 4', href: '/link-4' },
    { label: 'Link 5', href: '/link-5' },
    { label: 'Link 6', href: '/link-6' },
  ],
};
