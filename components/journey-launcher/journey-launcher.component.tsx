import React from 'react';
import { brands } from '../../lib/brand-context';
import JourneyStart from '../journey-start';

const JourneyLauncher: React.FC = () => {
  return (
    <section>
      <JourneyStart
        href="/kidz"
        label="Kidz"
        color={brands.kidz.backgroundColor}
      />
      <JourneyStart
        href="/families"
        label="Families"
        color={brands.families.backgroundColor}
      />
      <JourneyStart
        href="/supporters"
        label="Supporters"
        color={brands.supporters.backgroundColor}
      />
    </section>
  );
};

export default JourneyLauncher;
