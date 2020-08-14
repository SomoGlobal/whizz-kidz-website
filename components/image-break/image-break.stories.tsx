import React from 'react';

import ImageBreak from './image-break.component';

export default {
  title: 'Modules/ImageBreak',
  component: ImageBreak,
};

export const Story = () => (
  <ImageBreak>
    <img
      alt=""
      src="http://www.whizz-kidz.org.uk/images/sized/uploads/general/London_runners_2019-1000x500.jpg"
    />
  </ImageBreak>
);

Story.story = {
  name: 'image break',
};
