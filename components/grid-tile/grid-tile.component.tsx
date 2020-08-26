import Link from 'next/link';
import React from 'react';
import cx from 'classnames';

export interface IGridTileProps {
  label: string;
  isBig?: boolean;
  className?: string;
  backgroundColor?: string;
  linkProps: any; // next.js link props
}

/** Tile used as a category in a grid layout, acts as a button or link */
const GridTile: React.FC<IGridTileProps> = ({
  label,
  isBig,
  className = '',
  backgroundColor = 'bg-yellow-400',
  linkProps = { href: '/' },
}) => {
  return (
    <li className={className}>
      <Link {...linkProps}>
        <a
          className={cx(
            'has-focus w-full h-full p-8 text-2xl font-bold text-left text-gray-900 rounded-lg flex items-center hover:underline',
            {
              'text-5xl': isBig,
            },
            backgroundColor
          )}
        >
          <div className="grid gap-4 items-start">
            <span>{label}</span>
            <span
              className="bg-white rounded-full shadow p-2"
              style={{ width: 'min-content' }}
            >
              <svg
                role="presentation"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="stroke-current w-8 h-8"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default GridTile;
