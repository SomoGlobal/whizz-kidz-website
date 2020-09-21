import React from 'react';

import CallToAction from './call-to-action.component';

const Template = (args) => <CallToAction {...args} />;

export default {
  title: 'Components/CallToAction',
  component: CallToAction,
  args: {
    label: 'Donate',
    internal: {
      slug: 'charity',
      _modelApiKey: 'page',
    },
  },
};

export const Story = Template.bind({});
Story.args = {};
