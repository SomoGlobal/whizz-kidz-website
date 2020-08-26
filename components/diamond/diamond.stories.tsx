import React from 'react';

import Diamond from './diamond.component';

const Template = (args) => <Diamond {...args} />;

export default {
  title: 'Components/Diamond',
  component: Diamond,
};

export const Story = Template.bind({});
