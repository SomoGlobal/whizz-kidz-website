import React from 'react';

import JourneyLauncher from './journey-launcher.component';

const Template = (args) => <JourneyLauncher {...args} />;

export default {
  title: 'Components/JourneyLauncher',
  component: JourneyLauncher,
};

export const Story = Template.bind({});
