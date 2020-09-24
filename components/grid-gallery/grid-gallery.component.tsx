import React, { useContext } from 'react';
import cx from 'classnames';
import BrandContext from '../../lib/brand-context';
import Container from '../container';
import Stripes from '../stripes';

export interface IGridGalleryProps {
  images: Array<{ url: string; alt: string }>;
}

const GridGallery: React.FC<IGridGalleryProps> = ({ images }) => {
  const { textColor } = useContext(BrandContext);

  return (
    <Container as="section" className="my-10 md:my-20" aria-label="Gallery">
      <ul className="max-w-4xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <li
            key={img.url}
            className={cx({
              'lg:col-span-2': index === 1 || index === 6,
              'lg:col-span-2 lg:row-span-2': index === 3,
              'col-span-2 row-span-2 lg:col-span-1 lg:row-span-1': index === 2,
            })}
          >
            <img
              alt={img.alt}
              src={img.url}
              className="w-full h-full object-cover rounded-lg"
            />
          </li>
        ))}
      </ul>
      <div
        role="presentation"
        className={cx('absolute w-1/4 h-full -z-1', textColor)}
        style={{ top: '10%', left: '-4%' }}
      >
        <Stripes color="currentColor" id="bordered-left" opacity={0.1} />
      </div>
      <div
        role="presentation"
        className={cx('absolute w-1/2 -z-1', textColor)}
        style={{ top: '-10%', right: '-4%', height: '80%' }}
      >
        <Stripes color="currentColor" id="bordered-right" opacity={0.1} />
      </div>
    </Container>
  );
};

export default GridGallery;
