import React from 'react';

import BorderedBox from './bordered-box.component';

const Template = (args) => <BorderedBox {...args} />;

export default {
  title: 'Components/BorderedBox',
  component: BorderedBox,
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
  },
};

export const Story = Template.bind({});

Story.args = {
  title: 'Title',
  children: 'children',
};
