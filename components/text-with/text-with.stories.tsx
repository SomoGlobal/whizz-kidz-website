import React from 'react';
import defaultArgs from './lib/default-args';

import TextWith from './text-with.component';

const Template = (args) => <TextWith {...args} />;

export default {
  title: 'Components/TextWith',
  component: TextWith,
  args: defaultArgs,
};

export const Story = Template.bind({});
Story.args = { children: 'item' };
