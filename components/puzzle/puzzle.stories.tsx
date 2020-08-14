import React from 'react';

import Puzzle from './puzzle.component';

export default {
  title: 'Components/Puzzle',
  component: Puzzle,
};

export const Story = () => <Puzzle />;

Story.story = {
  name: 'puzzle',
};
