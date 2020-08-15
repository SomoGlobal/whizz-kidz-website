import React from 'react';
import { brands } from '../../lib/brand-context';
import JourneyStart from '../journey-start';

const JourneyLauncher: React.FC = () => {
  return (
    <section>
      <JourneyStart
        href="/kidz"
        label="Kid"
        color={brands.kidz.backgroundColor}
      />
      <JourneyStart
        href="/parents"
        label="Parent"
        color={brands.parents.backgroundColor}
      />
      <JourneyStart
        href="/supporters"
        label="Supporter"
        color={brands.supporters.backgroundColor}
      />
    </section>
  );
};

export default JourneyLauncher;
