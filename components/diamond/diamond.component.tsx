import React, { useContext } from 'react';
import cx from 'classnames';
import BrandContext from '../../lib/brand-context';

const Diamond: React.FC<{
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
          'translate-x-1/2': position === 'right',
        },
        textColor
      )}
    >
      <path d="M0 5L5 0L10 5L5 10L0 5Z" fill="currentColor" />
    </svg>
  );
};

export default Diamond;
