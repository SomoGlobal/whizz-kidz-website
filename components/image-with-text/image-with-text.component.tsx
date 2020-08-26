import React from 'react';
import cx from 'classnames';
import { Image } from 'react-datocms';
import Container from '../container';
import Statement from '../statement';
import Button from '../button';
import { IStatementProps } from '../statement/statement.component';

export interface IImageWithTextProps extends IStatementProps {
  image?: any;
  transparentBackground?: boolean;
  imagePosition: 'left' | 'right';
}

const ImageWithText: React.FC<IImageWithTextProps> = ({
  image,
  heading,
  eyebrow,
  text,
  imagePosition = 'right',
  transparentBackground,
}) => {
  return (
    <Container as="section">
      <div
        className={cx('grid items-center my-20 md:my-40 md:grid-cols-5', {
          'bg-gray-200': !transparentBackground,
        })}
      >
        <div
          className={cx('grid gap-8 p-8 md:p-16 md:row-start-1 md:row-end-2', {
            'md:col-start-3 md:col-end-6': imagePosition === 'left',
            'md:col-start-1 md:col-end-4': imagePosition === 'right',
          })}
        >
          <Statement heading={heading} eyebrow={eyebrow} text={text} />
          <div>
            <Button size="lg">Donate Now</Button>
          </div>
        </div>
        <div
          className={cx('md:row-start-1 md:row-end-2', {
            'md:col-start-1 md:col-end-3': imagePosition === 'left',
            'md:col-start-4 md:col-end-6': imagePosition === 'right',
          })}
        >
          <Image data={image.responsiveImage} />
        </div>
      </div>
    </Container>
  );
};

export default ImageWithText;
