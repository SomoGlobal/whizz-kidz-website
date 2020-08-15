import Link from 'next/link';
import React from 'react';
import cx from 'classnames';

export interface IButtonProps {
  className?: string;
  href?: string;
}

const Button: React.FC<IButtonProps> = ({ children, className = '', href }) => {
  const classes = cx(
    'bg-green-700 text-white border-0 px-6 py-2 rounded-full',
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
