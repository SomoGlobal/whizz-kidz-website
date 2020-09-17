import React from 'react';
import { Image } from 'react-datocms';
import TextWith from '../text-with';
import { ITextWithProps } from '../text-with/text-with.component';

export interface ITextWithImageProps extends ITextWithProps {
  image: any;
}

const TextWithImage: React.FC<ITextWithImageProps> = ({ image, ...props }) => {
  return (
    <TextWith {...props}>
      <Image data={image.responsiveImage} />
    </TextWith>
  );
};

export default TextWithImage;
