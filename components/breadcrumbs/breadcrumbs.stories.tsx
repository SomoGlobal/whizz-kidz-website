import React from 'react';

import Breadcrumbs from './breadcrumbs.component';

const Template = (args) => <Breadcrumbs {...args} />;

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    items: [
      { label: 'Link 1', linkProps: { href: '/1' } },
      { label: 'Link 2', linkProps: { href: '/2' } },
      { label: 'Link 3', linkProps: { href: '/3' } },
      { label: 'Link 4', linkProps: { href: '/4' } },
    ],
  },
};

export const Themed = Template.bind({});
Themed.args = { isThemed: true };
export const NotThemed = Template.bind({});
NotThemed.args = { isThemed: false };
