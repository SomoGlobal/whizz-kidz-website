import React from 'react';

import TopicTag from './topic-tag.component';

const Template = (args) => <TopicTag {...args} />;

export default {
  title: 'Components/TopicTag',
  component: TopicTag,
  args: {
    name: 'Kidz',
    slug: 'Kidz',
  },
};

export const Story = Template.bind({});
Story.args = {};
