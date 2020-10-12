import React from 'react';
import { Image } from 'react-datocms';
import Container from '../container';

export interface IThreeCardProps {
  card3Text?: string;
  card3Heading?: string;
  card3Image?: any;
  card2Text?: string;
  card2Heading?: string;
  card2Image?: any;
  card1Text?: string;
  card1Heading?: string;
  card1Image?: any;
}

const Card = ({ image, heading, text }) => (
  <div className="rounded-lg shadow-xl justify-between flex flex-col bg-white text-gray-700 h-full">
    {image && <Image data={image.responsiveImage} className="rounded-t-lg" />}
    <div className="px-4 md:px-6 py-4 flex-1 flex flex-col">
      {heading && <div className="text-2xl font-bold mb-4">{heading}</div>}
      {text && <div>{text}</div>}
    </div>
  </div>
);

const ThreeCard: React.FC<IThreeCardProps> = ({
  card3Text,
  card3Heading,
  card3Image,
  card2Text,
  card2Heading,
  card2Image,
  card1Text,
  card1Heading,
  card1Image,
}) => {
  return (
    <Container as="section" className="my-10 md:my-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card image={card1Image} heading={card1Heading} text={card1Text} />
        <Card image={card2Image} heading={card2Heading} text={card2Text} />
        <Card image={card3Image} heading={card3Heading} text={card3Text} />
      </div>
    </Container>
  );
};

export default ThreeCard;
