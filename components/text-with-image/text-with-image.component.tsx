import React from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';
import TextWith from '../text-with';
import { ITextWithProps } from '../text-with/text-with.component';

export interface ITextWithImageProps extends ITextWithProps {
  image: { responsiveImage: ResponsiveImageType };
}

const TextWithImage: React.FC<ITextWithImageProps> = ({ image, ...props }) => {
  return (
    <TextWith {...props}>
      <Image data={image.responsiveImage} />
    </TextWith>
  );
};

export default TextWithImage;
