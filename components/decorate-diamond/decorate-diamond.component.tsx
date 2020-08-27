import { useReducedMotion } from 'framer-motion';
import React from 'react';
import cx from 'classnames';
import { Parallax } from 'react-scroll-parallax';

import Container from '../container';
import Diamond from '../diamond';

enum Position {
  Right = 'right',
  Left = 'left',
}

export interface IDecorateDiamondProps {
  position: Position;
}

const DecorateDiamond: React.FC<IDecorateDiamondProps> = ({ position }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Container>
      <Parallax
        disabled={shouldReduceMotion}
        y={[-10, 10]}
        x={[-10, 10]}
        className={cx('absolute text-purple-100 -z-1', {
          'left-0': position === Position.Left,
          'right-0': position === Position.Right,
        })}
      >
        <Diamond width="15rem" height="15rem" position={position} />
      </Parallax>
    </Container>
  );
};

export default DecorateDiamond;
