import Link from 'next/link';
import React from 'react';
import cx from 'classnames';

export interface IButtonProps {
  className?: string;
  linkProps?: any;
  isOutlined?: boolean;
  externalUrl?: string;
  size?: 'sm' | 'm' | 'lg';
  type?: React.ButtonHTMLAttributes<any>['type'];
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  className = '',
  linkProps,
  externalUrl,
  size = 'm',
  isOutlined,
  type = 'button',
  disabled,
}) => {
  const classes = cx(
    'border-2 border-solid rounded-full tracking-wide text-center font-medium inline-block',
    {
      'px-4 py-1 text-sm': size === 'sm',
      'px-6 py-2': size === 'm',
      'px-10 py-3 text-lg font-medium': size === 'lg',
    },
    {
      'bg-gray-300 border-gray-300 text-gray-800': disabled,
      'bg-green-700 text-white hover:bg-green-800 border-transparent':
        !isOutlined && !disabled,
      'bg-white text-green-700 hover:bg-gray-200 border-green-700 hover:border-green-800':
        isOutlined && !disabled,
    },
    className
  );

  if (externalUrl) {
    return (
      <a
        href={externalUrl}
        rel="noreferrer"
        target="_blank"
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (linkProps) {
    return (
      <Link {...linkProps}>
        <a className={classes}>{children}</a>
      </Link>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
