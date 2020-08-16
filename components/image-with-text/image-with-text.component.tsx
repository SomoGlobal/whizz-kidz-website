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
}) => {
  return (
    <Container element="section">
      <div className="my-40 grid md:grid-cols-2 items-center bg-gray-200">
        <div className="p-16 grid gap-5">
          <Statement heading={heading} eyebrow={eyebrow} />
          <div>
            <Button>Lorem Ispsum</Button>
          </div>
        </div>
        <Image data={image.responsiveImage} />
      </div>
    </Container>
  );
};

export default ImageWithText;
