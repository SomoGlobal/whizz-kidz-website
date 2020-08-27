import React from 'react';
import DecorateDiamond from '../decorate-diamond';

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
    </div>
  );
};

export default Decoration;
