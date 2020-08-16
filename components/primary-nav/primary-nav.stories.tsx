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
    { label: 'Link 1', href: '/1', background: 'hover:bg-blue-800' },
    { label: 'Link 2', href: '/2', background: 'hover:bg-yellow-800' },
  ],
};
