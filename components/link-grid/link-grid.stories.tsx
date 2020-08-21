import React from 'react';

import LinkGrid from './link-grid.component';

const Template = (args) => <LinkGrid {...args} />;

export default {
  title: 'Components/LinkGrid',
  component: LinkGrid,
};

export const Story = Template.bind({});

Story.args = {
  title: 'Explore by topic',
  tiles: [
    { label: 'Whizz-Kidz Clubs', linkProps: { href: '/whizz-link' } },
    { label: 'Online Learning', linkProps: { href: '/online-link' } },
    { label: 'Ambassador Club', linkProps: { href: '/ambassador-link' } },
    { label: 'Equipment', linkProps: { href: '/equipment-link' } },
    { label: 'Work Placement', linkProps: { href: '/work-link' } },
  ],
};
