import React from 'react';

import AuthorBox from './author-box.component';

const Template = (args) => <AuthorBox {...args} />;

export default {
  title: 'Components/AuthorBox',
  component: AuthorBox,
};

export const Story = Template.bind({});
Story.args = {
  name: 'Joe Blogs',
  imageUrl: 'https://randomuser.me/api/portraits/women/89.jpg',
};
