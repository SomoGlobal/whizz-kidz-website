import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import TextWith from '../text-with';
import { ITextWithProps } from '../text-with/text-with.component';

export interface ITextWithAnimationProps extends ITextWithProps {
  animation: string;
}

const TextWithAnimation: React.FC<ITextWithAnimationProps> = ({
  animation,
  ...props
}) => {
  return (
    <TextWith {...props}>
      <Player
        autoplay
        loop
        src={`/lottie/json/${animation || '01'}.json`}
        style={{ height: '100%', width: '100%' }}
      />
    </TextWith>
  );
};

export default TextWithAnimation;
