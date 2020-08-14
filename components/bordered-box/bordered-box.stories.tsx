import React from 'react';

import BorderedBox from './bordered-box.component';

export default {
  title: 'Components/BorderedBox',
  component: BorderedBox,
};

export const Story = () => (
  <BorderedBox title="Example Title">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis expedita
    fuga quidem quod? Amet animi aspernatur corporis cum dolor dolore
    exercitationem impedit iste itaque odio omnis, perspiciatis soluta suscipit
    voluptatem.
  </BorderedBox>
);

Story.story = {
  name: 'bordered box',
};
