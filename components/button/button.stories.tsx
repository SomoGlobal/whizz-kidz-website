import React from 'react';

import Button from './button.component';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Story = () => <Button>Donate</Button>;

Story.story = {
  name: 'button',
};
