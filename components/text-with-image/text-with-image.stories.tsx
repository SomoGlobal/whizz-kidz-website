import React from 'react';
import defaultArgs from '../text-with/lib/default-args';
import responsiveImage from './lib/default-story-args';

import TextWithImage from './text-with-image.component';

const Template = (args) => <TextWithImage {...args} />;

export default {
  title: 'Modules/TextWithImage',
  component: TextWithImage,
  args: defaultArgs,
};

export const Story = Template.bind({});
Story.args = { image: { responsiveImage } };
