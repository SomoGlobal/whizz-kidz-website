import React from 'react';

import TopicGrid from './topic-grid.component';

const Template = (args) => <TopicGrid {...args} />;

export default {
  title: 'Modules/TopicGrid',
  component: TopicGrid,
  args: {
    category: {
      id: 1,
      slug: 'example',
      name: 'example',
    },
  },
};

export const Story = Template.bind({});
Story.args = {};
