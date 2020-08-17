import React from 'react';
import { Image } from 'react-datocms';
import Container from '../container';
import Statement from '../statement';
import Button from '../button';
import { IStatementProps } from '../statement/statement.component';

export interface IImageWithTextProps extends IStatementProps {
  image?: any;
}

/** Documentation */
const ImageWithText: React.FC<IImageWithTextProps> = ({
  image,
  heading,
  eyebrow,
  text,
}) => {
  return (
    <Container as="section">
      <div className="grid items-center my-20 md:my-40 bg-gray-200 md:grid-cols-5">
        <div className="grid gap-8 p-8 md:p-16 md:col-span-3">
          <Statement heading={heading} eyebrow={eyebrow} text={text} />
          <div>
            <Button>Donate Now</Button>
          </div>
        </div>
        <div className="md:col-span-2">
          <Image data={image.responsiveImage} />
        </div>
      </div>
    </Container>
  );
};

export default ImageWithText;
