import React from 'react';

import LinkCloud from './link-cloud.component';

const Template = (args) => <LinkCloud {...args} />;

const regions = [
  'London',
  'South England',
  'North England',
  'Scotland',
  'Wales',
];

export default {
  title: 'Components/LinkCloud',
  component: LinkCloud,
  args: {
    items: regions.map((region, index) => ({
      label: region,
      linkProps: { href: `/${index}` },
    })),
  },
};

export const Story = Template.bind({});
Story.args = {};
