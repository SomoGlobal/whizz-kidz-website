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
    <div role="presentation" className="hidden lg:block">
      {decorationType === 'diamond' && (
        <DecorateDiamond position={decorationPosition as any} />
      )}
    </div>
  );
};

export default Decoration;
