import React from 'react';

import SocialIcon from './social-icon.component';

const Template = (args) => <SocialIcon {...args} />;

export default {
  title: 'Components/SocialIcon',
  component: SocialIcon,
  args: {
    type: 'facebook',
  },
  argTypes: {
    pattern: {
      control: {
        type: 'radio',
        options: ['facebook', 'instagram', 'twitter', 'youtube'],
      },
    },
  },
};

export const Story = Template.bind({});
Story.args = {};
