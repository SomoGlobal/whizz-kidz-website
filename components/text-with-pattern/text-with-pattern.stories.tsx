import React from 'react';
import defaultArgs from '../text-with/lib/default-args';

import TextWithPattern from './text-with-pattern.component';

const Template = (args) => <TextWithPattern {...args} />;

export default {
  title: 'Modules/TextWithPattern',
  component: TextWithPattern,
  args: defaultArgs,
  argTypes: {
    pattern: {
      control: {
        type: 'radio',
        options: [
          'families',
          'meetthekidz',
          'supporters',
          'supporters2',
          'kidz',
        ],
      },
    },
  },
};

export const Pattern1 = Template.bind({});
Pattern1.args = { pattern: 'families' };

export const Pattern2 = Template.bind({});
Pattern2.args = { pattern: 'meetthekidz' };

export const Pattern3 = Template.bind({});
Pattern3.args = { pattern: 'supporters' };

export const Pattern4 = Template.bind({});
Pattern4.args = { pattern: 'supporters2' };

export const Pattern5 = Template.bind({});
Pattern5.args = { pattern: 'kidz' };
