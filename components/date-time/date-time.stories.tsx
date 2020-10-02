import React from 'react';

import DateTime from './date-time.component';

const Template = (args) => <DateTime {...args} />;

export default {
  title: 'Components/DateTime',
  component: DateTime,
};

export const Story = Template.bind({});
Story.args = {
  time: new Date('1995-12-17T03:24:00').toISOString(),
};
