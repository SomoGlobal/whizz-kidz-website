import React, { useContext } from 'react';
import cx from 'classnames';
import BrandContext from '../../lib/brand-context';
import Container from '../container';
import GridTile from '../grid-tile';

export interface ILinkGridProps {
  title: string;
  tiles: any[];
}

const colors = [
  'bg-yellow-400',
  'bg-orange-400',
  'bg-blue-400',
  'bg-pink-400',
  'bg-green-400',
];

const LinkGrid: React.FC<ILinkGridProps> = ({ tiles, title }) => {
  const { smallTextColor } = useContext(BrandContext);
  const is4 = tiles.length === 4;

  return (
    <Container as="section" className="my-20">
      <h2
        className={cx(
          'uppercase font-bold tracking-wider mb-3 text-base',
          smallTextColor
        )}
      >
        {title}
      </h2>
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4">
        {tiles.map((tile, index) => (
          <GridTile
            key={tile.label}
            backgroundColor={colors[index]}
            label={tile.label}
            isBig={index === 0 && !is4}
            className={index === 0 && !is4 ? 'md:col-span-2 md:row-span-2' : ''}
            linkProps={tile.linkProps}
          />
        ))}
      </ul>
    </Container>
  );
};

export default LinkGrid;
