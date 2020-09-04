import Link from 'next/link';
import React from 'react';
import cx from 'classnames';

export interface IButtonProps {
  className?: string;
  linkProps?: any;
  size?: 'sm' | 'm' | 'lg';
}

const Button: React.FC<IButtonProps> = ({
  children,
  className = '',
  linkProps,
  size = 'm',
}) => {
  const classes = cx(
    'bg-green-700 text-white border-0 rounded-full tracking-wide hover:bg-green-800 text-center font-medium',
    {
      'px-4 py-1 text-sm': size === 'sm',
      'px-6 py-2': size === 'm',
      'px-10 py-3 text-lg font-medium': size === 'lg',
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
