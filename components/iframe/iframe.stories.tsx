import React from 'react';

import Iframe from './iframe.component';

const Template = (args) => <Iframe {...args} />;

export default {
  title: 'Components/Iframe',
  component: Iframe,
  args: {
    title: 'title',
    url: 'https://www.example.com',
  },
};

export const Story = Template.bind({});
Story.args = {};
