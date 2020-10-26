import { Player } from '@lottiefiles/react-lottie-player';
import { useReducedMotion } from 'framer-motion';
import React, { useLayoutEffect, useRef } from 'react';
import TextWith from '../text-with';
import { ITextWithProps } from '../text-with/text-with.component';

export interface ITextWithAnimationProps extends ITextWithProps {
  animation: string;
}

const TextWithAnimation: React.FC<ITextWithAnimationProps> = ({
  animation,
  ...props
}) => {
  const playerRef = useRef<Player>();
  const shouldReduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    if (playerRef.current && shouldReduceMotion) {
      playerRef.current.setSeeker(50, false);
    }
  }, []);

  return (
    <TextWith {...props}>
      <Player
        ref={playerRef}
        autoplay={!shouldReduceMotion}
        loop
        src={`/lottie/json/${animation || '01'}.json`}
        style={{ height: '100%', width: '100%' }}
      />
    </TextWith>
  );
};

export default TextWithAnimation;
