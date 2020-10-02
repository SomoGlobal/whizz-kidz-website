import React from 'react';
import Statement from '../statement';
import Container from '../container';
import { IStatementProps } from '../statement/statement.component';

export type IMissionProps = IStatementProps;

const Mission: React.FC<IMissionProps> = ({ eyebrow, heading, text }) => {
  return (
    <Container as="section" className="my-10 md:my-20 lg:my-40 text-center">
      <div className="max-w-3xl mx-auto">
        <Statement
          eyebrow={eyebrow}
          heading={heading}
          text={text}
          isCentered
          hasEyebrowStyle
        />
      </div>
    </Container>
  );
};

export default Mission;
