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
    { label: 'Link 1', linkProps: { href: '/link-1' } },
    { label: 'Link 2', linkProps: { href: '/link-2' } },
    { label: 'Link 3', linkProps: { href: '/link-3' } },
    { label: 'Link 4', linkProps: { href: '/link-4' } },
    { label: 'Link 5', linkProps: { href: '/link-5' } },
    { label: 'Link 6', linkProps: { href: '/link-6' } },
  ],
};
