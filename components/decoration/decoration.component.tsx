import { useReducedMotion } from 'framer-motion';
import React from 'react';
import { Parallax } from 'react-scroll-parallax/cjs';
import cx from 'classnames';
import Container from '../container';
import DecorateDiamond from '../decorate-diamond';
import DecorateTriangle from '../decorate-triangle';

export interface IDecorationProps {
  decorationType: string;
  decorationPosition: string;
}

const SVGDecoration = ({ fileName, disableParallax, position }) => (
  <Container>
    <Parallax
      disabled={disableParallax}
      y={[-10, 10]}
      x={[-10, 10]}
      className={cx('absolute -z-1', {
        'left-0': position === 'left',
        'right-0': position === 'right',
      })}
    >
      <img
        alt="Decoration"
        src={`/svg/decoration/${fileName}.svg`}
        className={cx('transform -translate-y-1/2', {
          '-translate-x-1/2': position === 'left',
          'translate-x-1/2': position === 'right',
        })}
      />
    </Parallax>
  </Container>
);

const Decoration: React.FC<IDecorationProps> = ({
  decorationType,
  decorationPosition,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div role="presentation">
      {decorationType === 'diamond' && (
        <DecorateDiamond position={decorationPosition as any} />
      )}
      {decorationType === 'triangle' && (
        <DecorateTriangle position={decorationPosition as any} />
      )}
      {decorationType !== 'triangle' && decorationType !== 'diamond' && (
        <SVGDecoration
          position={decorationPosition}
          disableParallax={shouldReduceMotion}
          fileName={decorationType}
        />
      )}
    </div>
  );
};

export default Decoration;
