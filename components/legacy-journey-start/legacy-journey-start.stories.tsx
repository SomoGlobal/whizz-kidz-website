import React from 'react';
import { brands } from '../../lib/brand-context';

import LegacyJourneyStart from './legacy-journey-start.component';

const Template = (args) => <LegacyJourneyStart {...args} />;

export default {
  title: 'Components/LegacyJourneyStart',
  component: LegacyJourneyStart,
  args: {
    href: '/kidz',
    label: 'Kidz',
    brand: brands.kidz,
  },
};

export const Story = Template.bind({});
Story.args = {};
