import React from 'react';
import responsiveImage from '../text-with-image/lib/default-story-args';
import SectionImageLink from './section-image-link.component';

const Template = (args) => <SectionImageLink {...args} />;

export default {
  title: 'Components/SectionImageLink',
  component: SectionImageLink,
  args: {
    heading: 'This is a heading',
    image: { responsiveImage },
    callToAction: {
      label: 'Donate',
      internal: {
        slug: 'charity',
        _modelApiKey: 'page',
      },
    },
  },
};

export const Green = Template.bind({});
Green.args = { theme: 'green' };

export const Blue = Template.bind({});
Blue.args = { theme: 'blue' };

export const Yellow = Template.bind({});
Yellow.args = { theme: 'yellow' };

export const Pink = Template.bind({});
Pink.args = { theme: 'pink' };

export const Gray = Template.bind({});
Gray.args = { theme: 'gray' };
