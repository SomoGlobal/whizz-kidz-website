import React, { useContext } from 'react';
import cx from 'classnames';
import BrandContext from '../../lib/brand-context';

const Triangle: React.FC<{
  width: number | string;
  height: number | string;
  position: 'left' | 'right';
}> = ({ width, height, position }) => {
  const { textColor } = useContext(BrandContext);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={cx(
        'transform -translate-y-1/2 opacity-25',
        {
          '-translate-x-1/2': position === 'left',
          'translate-x-1/2 rotate-180': position === 'right',
        },
        textColor
      )}
    >
      <path d="M0 0L10 5L0 10V0Z" fill="currentColor" />
    </svg>
  );
};

export default Triangle;
