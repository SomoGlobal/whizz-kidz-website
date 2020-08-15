import React from 'react';

import JourneyStart from './journey-start.component';

const Template = (args) => <JourneyStart {...args} />;

export default {
  title: 'Components/JourneyStart',
  component: JourneyStart,
  argTypes: {
    color: { control: 'text' },
    label: { control: 'text' },
    href: { control: 'text' },
  },
};

export const Story = Template.bind({});

Story.args = {
  color: 'bg-blue-600',
  label: 'Journey Name',
  href: '/section',
};
