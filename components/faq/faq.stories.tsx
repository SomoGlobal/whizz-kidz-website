import React from 'react';

import Faq, { IFaqProps } from './faq.component';

const Template = (args) => <Faq {...args} />;

export default {
  title: 'Modules/FAQ',
  component: Faq,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Story = Template.bind({});

Story.args = {
  items: [
    { id: 1, question: 'Title 1', answer: 'answer 1' },
    { id: 2, question: 'Title 2', answer: 'answer 2' },
  ],
} as IFaqProps;
