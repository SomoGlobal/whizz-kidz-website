import React from 'react';

import Share from './share.component';

const Template = (args) => <Share {...args} />;

export default {
  title: 'Components/Share',
  component: Share,
  args: {
    url: 'http://www.whizz-kidz.org.uk/',
  },
};

export const Story = Template.bind({});
Story.args = {};
