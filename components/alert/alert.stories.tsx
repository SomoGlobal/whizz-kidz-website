import React from 'react';

import Alert from './alert.component';

const Template = (args) => <Alert {...args} />;

export default {
  title: 'Components/Alert',
  component: Alert,
  args: {
    preview: true,
  },
};

export const Story = Template.bind({});
