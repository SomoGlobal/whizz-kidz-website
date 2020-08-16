import React from 'react';

import Expander from './expander.component';

const Template = (args) => <Expander {...args} />;

export default {
  title: 'Components/Expander',
  component: Expander,
  argTypes: {
    id: { control: 'text' },
    children: { control: 'text' },
    title: { control: 'text' },
  },
};

export const Story = Template.bind({});

Story.args = {
  title: 'How do I apply for mobility equipment?',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem culpa inventore itaque laboriosam? Ab adipisci animi blanditiis cum dolorem fugit harum iusto laudantium, maiores, necessitatibus nobis quae quaerat voluptatem? ',
};
