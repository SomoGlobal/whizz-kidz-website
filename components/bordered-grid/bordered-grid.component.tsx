import React from 'react';
import Stripes from '../stripes';
import BorderedBox from '../bordered-box';
import Container from '../container';

export interface IBorderedGridProps {
  heading: React.ReactChild;
  items: Array<{ title: string; children: React.ReactChild; border: string }>;
}

/** Documentation */
const BorderedGrid: React.FC<IBorderedGridProps> = ({ heading, items }) => {
  return (
    <Container>
      <div className="my-40 text-center md:mx-16">
        <h2 className="mb-10 text-3xl font-bold text-gray-700">{heading}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <BorderedBox
              title={item.title}
              key={item.title}
              border={item.border}
            >
              {item.children}
            </BorderedBox>
          ))}
        </div>
      </div>
      <div
        className="absolute w-1/4 h-full -z-1"
        style={{ top: '10%', left: '-4%' }}
      >
        <Stripes id="bordered-left" opacity={0.1} />
      </div>
      <div
        className="absolute w-1/2 -z-1"
        style={{ top: '-10%', right: '-4%', height: '80%' }}
      >
        <Stripes id="bordered-right" opacity={0.1} />
      </div>
    </Container>
  );
};

export default BorderedGrid;
