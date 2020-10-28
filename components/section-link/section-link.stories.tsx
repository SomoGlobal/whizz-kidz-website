import React from 'react';

import SectionLink from './section-link.component';

const Template = (args) => <SectionLink {...args} />;

export default {
  title: 'Components/SectionLink',
  component: SectionLink,
  args: {
    heading: 'This is my heading',
    theme: 'green',
    callToAction: {
      label: 'Donate',
      internal: {
        slug: 'charity',
        _modelApiKey: 'page',
      },
    },
  },
  argTypes: {
    theme: {
      control: { type: 'radio', options: ['green', 'blue'] },
    },
  },
};

export const Green = Template.bind({});
Green.args = { theme: 'green' };

export const Blue = Template.bind({});
Blue.args = { theme: 'blue' };
