import React from 'react';

import Triangle from './triangle.component';

const Template = (args) => <Triangle {...args} />;

export default {
  title: 'Components/Triangle',
  component: Triangle,
};

export const Story = Template.bind({});
