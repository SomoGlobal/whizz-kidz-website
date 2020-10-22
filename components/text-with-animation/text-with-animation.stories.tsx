import React from 'react';
import defaultArgs from '../text-with/lib/default-args';

import TextWithAnimation from './text-with-animation.component';

const Template = (args) => <TextWithAnimation {...args} />;

export default {
  title: 'Components/TextWithAnimation',
  component: TextWithAnimation,
  args: {
    animation: '05',
    ...defaultArgs,
  },
  argTypes: {
    imagePosition: {
      control: {
        type: 'inline-radio',
        options: ['left', 'right'],
      },
    },
    animation: {
      control: {
        type: 'inline-radio',
        options: [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '10',
          '11',
        ],
      },
    },
  },
};

export const Story = Template.bind({});
Story.args = {};
