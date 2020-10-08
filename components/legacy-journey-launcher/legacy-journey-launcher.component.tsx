import React from 'react';
import { brands } from '../../lib/brand-context';
import LegacyJourneyStart from '../legacy-journey-start';

const LegacyJourneyLauncher: React.FC = () => {
  return (
    <section className="flex w-full flex-col">
      <LegacyJourneyStart href="/kidz" label="Kidz" brand={brands.kidz} />
      <LegacyJourneyStart
        href="/families"
        label="Families"
        brand={brands.families}
      />
      <LegacyJourneyStart
        href="/supporters"
        label="Supporters"
        brand={brands.supporters}
      />
    </section>
  );
};

export default LegacyJourneyLauncher;
