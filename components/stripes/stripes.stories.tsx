import React from 'react';

import Stripes from './stripes.component';

export default {
  title: 'Components/Stripes',
  component: Stripes,
};

export const Basic = () => (
  <div style={{ width: '400px', height: '400px' }}>
    <Stripes id="story" />
  </div>
);

Basic.story = {
  name: 'stripes',
};
