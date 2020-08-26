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
        className={cx('grid items-center my-20 lg:my-40 lg:grid-cols-5', {
          'bg-gray-200': !transparentBackground,
        })}
      >
        <div
          className={cx('grid gap-8 p-8 lg:p-16 lg:row-start-1 lg:row-end-2', {
            'lg:col-start-3 lg:col-end-6': imagePosition === 'left',
            'lg:col-start-1 lg:col-end-4': imagePosition === 'right',
          })}
        >
          <Statement heading={heading} eyebrow={eyebrow} text={text} />
          <div>
            <Button size="lg">Donate Now</Button>
          </div>
        </div>
        <div
          className={cx('lg:row-start-1 lg:row-end-2', {
            'lg:col-start-1 lg:col-end-3': imagePosition === 'left',
            'lg:col-start-4 lg:col-end-6': imagePosition === 'right',
          })}
        >
          <Image data={image.responsiveImage} />
        </div>
      </div>
    </Container>
  );
};

export default ImageWithText;
