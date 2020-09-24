import Link from 'next/link';
import React from 'react';
import cx from 'classnames';

export interface IButtonProps {
  className?: string;
  linkProps?: any;
  isOutlined?: boolean;
  size?: 'sm' | 'm' | 'lg';
}

const Button: React.FC<IButtonProps> = ({
  children,
  className = '',
  linkProps,
  size = 'm',
  isOutlined,
}) => {
  const classes = cx(
    'border-2 border-solid rounded-full tracking-wide text-center font-medium inline-block',
    {
      'px-4 py-1 text-sm': size === 'sm',
      'px-6 py-2': size === 'm',
      'px-10 py-3 text-lg font-medium': size === 'lg',
    },
    {
      'bg-green-700 text-white hover:bg-green-800 border-transparent': !isOutlined,
      'bg-white text-green-700 hover:bg-gray-200 border-green-700 hover:border-green-800': isOutlined,
    },
    className
  );

  if (linkProps) {
    return (
      <Link {...linkProps}>
        <a className={classes}>{children}</a>
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
};

export default Button;
