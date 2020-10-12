import React from 'react';
import { Image } from 'react-datocms';
import CallToAction from '../call-to-action';
import Container from '../container';

export interface IThreeCardProps {
  card3Text?: string;
  card3Heading?: string;
  card3Image?: any;
  card3Cta?: any;

  card2Text?: string;
  card2Heading?: string;
  card2Image?: any;
  card2Cta?: any;

  card1Text?: string;
  card1Heading?: string;
  card1Image?: any;
  card1Cta?: any;
}

const Card = ({ image, heading, text, callToAction }) => (
  <div className="rounded-lg shadow-xl justify-between flex flex-col bg-white text-gray-700 h-full">
    {image && <Image data={image.responsiveImage} className="rounded-t-lg" />}
    <div className="px-4 md:px-6 py-6 flex-1 grid gap-6">
      {heading && (
        <div className="text-2xl font-bold w-full text-center">{heading}</div>
      )}
      {text && <div>{text}</div>}
      {callToAction && (
        <div className="w-full text-center">
          <CallToAction {...callToAction} isOutlined size="m" />
        </div>
      )}
    </div>
  </div>
);

const ThreeCard: React.FC<IThreeCardProps> = ({
  card3Text,
  card3Heading,
  card3Image,
  card3Cta,
  card2Text,
  card2Heading,
  card2Image,
  card2Cta,
  card1Text,
  card1Heading,
  card1Image,
  card1Cta,
}) => {
  return (
    <Container as="section" className="my-10 md:my-20">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card
          image={card1Image}
          heading={card1Heading}
          text={card1Text}
          callToAction={card1Cta}
        />
        <Card
          image={card2Image}
          heading={card2Heading}
          text={card2Text}
          callToAction={card2Cta}
        />
        <Card
          image={card3Image}
          heading={card3Heading}
          text={card3Text}
          callToAction={card3Cta}
        />
      </div>
    </Container>
  );
};

export default ThreeCard;
