import React from 'react';
import { Image, ResponsiveImageType } from 'react-datocms';

export interface IFullWidthImageProps {
  image: { responsiveImage: ResponsiveImageType };
}

const FullWidthImage: React.FC<IFullWidthImageProps> = ({ image }) => (
  <Image data={image.responsiveImage} />
);

export default FullWidthImage;
