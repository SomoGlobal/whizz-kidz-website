import React from 'react';

import Podcast from './podcast.component';

const Template = (args) => <Podcast {...args} />;

export default {
  title: 'Components/Podcast',
  component: Podcast,
  args: {
    file: {
      title: 'This is a sample caption',
      url: 'file://sample.mp3',
      mimeType: 'audio/mp3',
    },
    transcript: {
      url: 'file://sample.vtt',
    },
  },
};

export const Story = Template.bind({});
Story.args = {};
