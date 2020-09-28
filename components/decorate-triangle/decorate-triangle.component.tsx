import cx from 'classnames';
import { useReducedMotion } from 'framer-motion';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Container from '../container';
import Triangle from '../triangle';

type Position = 'right' | 'left';

export interface IDecorateTriangleProps {
  position: Position;
}

const DecorateTriangle: React.FC<IDecorateTriangleProps> = ({ position }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Container>
      <Parallax
        disabled={shouldReduceMotion}
        y={[-10, 10]}
        x={[-10, 10]}
        className={cx('absolute -z-1', {
          'left-0': position === 'left',
          'right-0': position === 'right',
        })}
      >
        <Triangle width="15rem" height="30rem" position={position} />
      </Parallax>
    </Container>
  );
};

export default DecorateTriangle;
