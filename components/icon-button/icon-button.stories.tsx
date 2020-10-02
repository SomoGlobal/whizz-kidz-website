import React from 'react';

import IconButton from './icon-button.component';

const Template = (args) => <IconButton {...args} />;

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Story = Template.bind({});

Story.args = {
  children: 'text'
};

