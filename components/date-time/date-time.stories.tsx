import React from 'react';

import DateTime from './date-time.component';

const Template = (args) => <DateTime {...args} />;

export default {
  title: 'Components/DateTime',
  component: DateTime,
};

export const Story = Template.bind({});
Story.args = {
  label: 'aria label',
  time: new Date().toISOString(),
};
