import React from 'react';

import EventCardList from './event-card-list.component';

const Template = (args) => <EventCardList {...args} />;

export default {
  title: 'Components/EventCardList',
  component: EventCardList,
};

export const Story = Template.bind({});
Story.args = {
  label: null,
  events: [],
};
