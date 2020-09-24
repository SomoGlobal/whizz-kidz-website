import React from 'react';

import PlayButton from './play-button.component';

const Template = (args) => (
  <div className="p-12 bg-gray-700 flex items-center justify-center">
    <PlayButton {...args} />
  </div>
);

export default {
  title: 'Components/PlayButton',
  component: PlayButton,
};

export const Story = Template.bind({});
Story.args = {};
