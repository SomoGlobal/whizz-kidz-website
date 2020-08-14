import React from 'react';

import Subtitle from './subtitle.component';

export default {
  title: 'Components/Subtitle',
  component: Subtitle,
};

export const Story = () => (
  <Subtitle>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam delectus
    earum eos est et harum in inventore libero nesciunt nisi non, placeat, quam
    rerum, saepe sequi tempore veniam vitae voluptatem?
  </Subtitle>
);

Story.story = {
  name: 'subtitle',
};
