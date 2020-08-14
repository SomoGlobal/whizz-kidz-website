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
    { label: 'Link 1', href: '/1' },
    { label: 'Link 2', href: '/2', bg: 'bg-yellow-800' },
  ],
};
