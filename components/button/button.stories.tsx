import React from 'react';

import Button from './button.component';

const Template = (args) => <Button {...args} />;

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Donate',
  },
};

export const Small = Template.bind({});
Small.args = { size: 'sm' };

export const Medium = Template.bind({});
Medium.args = { size: 'm' };

export const Large = Template.bind({});
Large.args = { size: 'lg' };
