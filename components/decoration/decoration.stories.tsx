import React from 'react';

import Decoration from './decoration.component';

const Template = (args) => <Decoration {...args} />;

export default {
  title: 'Components/Decoration',
  component: Decoration,
  argTypes: {
    decorationType: {
      control: {
        type: 'radio',
        options: ['diamond', 'triangle', 'doughnut'],
      },
    },
  },
};

export const Story = Template.bind({});
