import React from 'react';

import Button from './button.component';

const Template = (args) => <Button {...args} />;

export default {
  title: 'Components/Button',
  component: Button,
};

export const Story = Template.bind({});

Story.args = {
  children: 'Donate',
};
