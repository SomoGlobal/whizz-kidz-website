import React from 'react';

import ImageFilter from './image-filter.component';

export default {
  title: 'Components/ImageFilter',
  component: ImageFilter,
};

export const Story = () => (
  <ImageFilter>
    <img
      alt="demo"
      src="https://images.unsplash.com/photo-1560073744-7643b964bdf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
    />
  </ImageFilter>
);

Story.story = {
  name: 'image filter',
};
