import React from 'react';

import LinkCloud from './link-cloud.component';

const Template = (args) => <LinkCloud {...args} />;

export default {
  title: 'Components/LinkCloud',
  component: LinkCloud,
  args: {
    items: [
      { label: 'Accessibility', linkProps: { href: '/accessibility' } },
      { label: 'Cookies', linkProps: { href: '/cookies' } },
      { label: 'Privacy', linkProps: { href: '/privacy' } },
      { label: 'Terms and Conditions', linkProps: { href: '/terms' } },
    ],
  },
};

export const Story = Template.bind({});
Story.args = {};
