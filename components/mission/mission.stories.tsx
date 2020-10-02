import React from 'react';

import Mission from './mission.component';

export default {
  title: 'Modules/Mission',
  component: Mission,
};

const missionText = `Our mission is to transform the lives of disabled children by providing the equipment, support and life skills they need, when they need them – giving them the chance to develop their full potential.`;

export const Story = () => (
  <Mission eyebrow="Our Mission" heading={missionText} />
);

Story.storyName = 'mission';
