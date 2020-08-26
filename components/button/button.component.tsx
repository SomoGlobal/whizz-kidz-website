import Link from 'next/link';
import React from 'react';
import cx from 'classnames';

export interface IButtonProps {
  className?: string;
  href?: string;
  size?: 'sm' | 'm' | 'lg';
}

const Button: React.FC<IButtonProps> = ({
  children,
  className = '',
  href,
  size = 'm',
}) => {
  const classes = cx(
    'bg-green-700 text-white border-0 rounded-full tracking-wide hover:bg-green-800',
    {
      'px-4 py-1 text-sm': size === 'sm',
      'px-6 py-2': size === 'm',
      'px-10 py-3 text-lg font-medium': size === 'lg',
    },
    className
  );

  if (href) {
    return (
      <Link href={href}>
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
