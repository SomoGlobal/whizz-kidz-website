import React from 'react';
import DecorateDiamond from '../decorate-diamond';
import DecorateTriangle from '../decorate-triangle';

export interface IDecorationProps {
  decorationType: string;
  decorationPosition: string;
}

const Decoration: React.FC<IDecorationProps> = ({
  decorationType,
  decorationPosition,
}) => {
  return (
    <div role="presentation">
      {decorationType === 'diamond' && (
        <DecorateDiamond position={decorationPosition as any} />
      )}
      {decorationType === 'triangle' && (
        <DecorateTriangle position={decorationPosition as any} />
      )}
      {decorationType === 'doughnut' && (
        <img src="/svg/decoration/doughnut01.svg" alt={decorationType} />
      )}
    </div>
  );
};

export default Decoration;
