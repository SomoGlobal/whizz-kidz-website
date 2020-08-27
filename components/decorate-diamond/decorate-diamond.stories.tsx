import React from 'react';

import DecorateDiamond from './decorate-diamond.component';

const Template = (args) => <DecorateDiamond {...args} />;

export default {
  title: 'Modules/DecorateDiamond',
  component: DecorateDiamond,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Story = Template.bind({});

Story.args = {
  children: 'text',
};
