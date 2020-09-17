import React from 'react';

import PostCardList from './post-card-list.component';

const Template = (args) => <PostCardList {...args} />;

export default {
  title: 'Components/PostCardList',
  component: PostCardList,
  args: {
    label: 'Most Recent Posts',
    posts: [],
  },
};

export const Story = Template.bind({});
Story.args = {};
