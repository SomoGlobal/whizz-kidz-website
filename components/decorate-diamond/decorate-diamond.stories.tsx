import React from 'react';

import DecorateDiamond from './decorate-diamond.component';

const Template = (args) => <DecorateDiamond {...args} />;

export default {
  title: 'Modules/DecorateDiamond',
  component: DecorateDiamond,
};

export const Left = Template.bind({});
Left.args = { position: 'left' };

export const Right = Template.bind({});
Right.args = { position: 'right' };
