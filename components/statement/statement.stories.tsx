import React from 'react';
import Statement from './statement.component';

export default {
  title: 'Components/Statement',
  component: Statement,
};

const missionText = `Our mission is to transform the lives of disabled children by providing the equipment, support and life skills they need, when they need them – giving them the chance to develop their full potential.`;

export const Centered = () => (
  <Statement
    hasEyebrowStyle
    isCentered
    eyebrow="Our Mission"
    heading={missionText}
    text="Our dynamic approach makes us stand out from the rest"
  />
);

export const Left = () => (
  <Statement
    hasEyebrowStyle
    eyebrow="Our Mission"
    heading={missionText}
    text="Our dynamic approach makes us stand out from the rest"
  />
);

export const WithoutParagraph = () => (
  <Statement hasEyebrowStyle eyebrow="Our Mission" heading={missionText} />
);
export const BigHeading = () => (
  <Statement
    hasEyebrowStyle
    hasBigHeading
    eyebrow="Our Mission"
    heading={missionText}
  />
);
