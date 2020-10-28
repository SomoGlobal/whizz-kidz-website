import React from 'react';

import CTA from './cta.component';

const Template = (args) => <CTA {...args} />;

export default {
  title: 'Components/CTA',
  component: CTA,
  args: {
    link: {
      label: 'Delivering digital ambitions',
      externalUrl: 'https://www.somoglobal.com',
    },
  },
};

export const Story = Template.bind({});
Story.args = {};
