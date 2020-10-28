import React from 'react';

import FadeInListItem from './fade-in-list-item.component';

const Template = (args) => (
  <ul>
    <FadeInListItem {...args} />
  </ul>
);

export default {
  title: 'Components/FadeInListItem',
  component: FadeInListItem,
};

export const Story = Template.bind({});
Story.args = { children: 'hello' };
