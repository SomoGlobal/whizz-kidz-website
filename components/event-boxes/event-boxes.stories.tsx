import React from 'react';

import EventBoxes from './event-boxes.component';

const Template = (args) => <EventBoxes {...args} />;

export default {
  title: 'Components/EventBoxes',
  component: EventBoxes,
};

export const Story = Template.bind({});
Story.args = {
  location: {
    latitude: 51.5073509,
    longitude: -0.1277583,
  },
  registrationFee: '£100',
  startDate: '2020-10-04T10:00:00+01:00',
  minimumTarget: '£2000',
  endDate: '2020-10-04T17:00:00+01:00',
};
