import { motion } from 'framer-motion';
import cx from 'classnames';
import React from 'react';

export interface IIconButtonProps {
  type: 'close' | 'back' | 'menu' | 'next';
  className?: string;
  onClick: any;
}

const IconButton: React.FC<IIconButtonProps> = ({
  onClick,
  type = 'close',
  className = '',
}) => {
  const types = {
    close: `M18 6L6 18M6 6l12 12`,
    back: `M19 12H5M12 19l-7-7 7-7`,
    menu: `M3 12h18M3 6h18M3 18h18`,
    next: `M5 12h14M12 5l7 7-7 7`,
  };

  return (
    <motion.button
      layout
      onClick={onClick}
      type="button"
      className={cx('p-3 rounded-lg', className)}
      aria-label={type}
    >
      <svg
        role="img"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="stroke-current w-8 h-8"
      >
        <title>{type}</title>
        <path d={types[type]} />
      </svg>
    </motion.button>
  );
};

export default IconButton;
