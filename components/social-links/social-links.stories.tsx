import React from 'react';

import SocialLinks from './social-links.component';

const Template = (args) => <SocialLinks {...args} />;

export default {
  title: 'Components/SocialLinks',
  component: SocialLinks,
  args: {
    facebook: 'whizzkidz',
    twitter: 'WhizzKidz',
    instagram: 'whizzkidzuk',
    youtube: 'WhizzKidzUK',
  },
};

export const Story = Template.bind({});
Story.args = {};
