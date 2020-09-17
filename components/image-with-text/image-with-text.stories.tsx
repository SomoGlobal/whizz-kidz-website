import React from 'react';

import ImageWithText from './image-with-text.component';
import responsiveImage from '../text-with-image/lib/default-story-args';

const Template = (args) => <ImageWithText {...args} />;

export default {
  title: 'Modules/ImageWithText',
  component: ImageWithText,
  args: {
    transparentBackground: false,
    imagePosition: 'right',
    eyebrow: 'eyebrow',
    heading: 'Heading',
    text: 'text',
    image: { responsiveImage },
  },
};

export const ImageRight = Template.bind({});
ImageRight.args = { imagePosition: 'right' };

export const ImageLeft = Template.bind({});
ImageLeft.args = { imagePosition: 'left' };
