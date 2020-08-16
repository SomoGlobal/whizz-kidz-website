import React from 'react';
import Statement from '../statement';
import Container from '../container';

export interface IMissionProps {
  eyebrow: string;
  heading: string;
}

const Mission: React.FC<IMissionProps> = ({ eyebrow, heading }) => {
  return (
    <Container element="section">
      <div className="my-40 text-center md:mx-16">
        <div className="max-w-3xl mx-auto">
          <Statement eyebrow={eyebrow} heading={heading} isCentered />
        </div>
      </div>
    </Container>
  );
};

export default Mission;
