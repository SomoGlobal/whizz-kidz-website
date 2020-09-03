import React from 'react';

import DecorateTriangle from './decorate-triangle.component';

const Template = (args) => <DecorateTriangle {...args} />;

export default {
  title: 'Modules/DecorateTriangle',
  component: DecorateTriangle,
};

export const Left = Template.bind({});
Left.args = { position: 'left' };

export const Right = Template.bind({});
Right.args = { position: 'right' };
