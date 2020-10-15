import Link from 'next/link';
import React, { useContext } from 'react';
import cx from 'classnames';
import BrandContext from '../../lib/brand-context';
import { event } from '../../lib/google-analytics';

export interface IButtonProps {
  className?: string;
  linkProps?: any;
  isOutlined?: boolean;
  isGhost?: boolean;
  externalUrl?: string;
  size?: 'sm' | 'm' | 'lg';
  type?: React.ButtonHTMLAttributes<any>['type'];
  disabled?: boolean;
  eventLabelSuffix?: string;
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
  isGhost,
  eventLabelSuffix,
}) => {
  const { smallBackgroundColor, hoverSmallBackgroundColor } = useContext(
    BrandContext
  );

  const classes = cx(
    'border-2 border-solid rounded-full tracking-wide text-center font-medium inline-block',
    {
      'px-4 py-1 text-sm': size === 'sm',
      'px-6 py-2': size === 'm',
      'px-10 py-3 text-lg font-medium': size === 'lg',
    },
    {
      'border-white text-white': isGhost,
      [smallBackgroundColor]: isGhost,
      [hoverSmallBackgroundColor]: isGhost,
      'bg-gray-300 border-gray-300 text-gray-800': disabled,
      'bg-green-700 text-white hover:bg-green-800 border-transparent':
        !isOutlined && !disabled && !isGhost,
      'bg-white text-green-700 hover:bg-gray-200 border-green-700 hover:border-green-800':
        isOutlined && !disabled && !isGhost,
    },
    className
  );

  const gaLabel = eventLabelSuffix
    ? `${children} - ${eventLabelSuffix}`
    : `${children}`;

  if (externalUrl) {
    return (
      <a
        href={externalUrl}
        rel="noreferrer"
        target="_blank"
        className={classes}
        aria-label={`${children} (opens in new window)`}
        onClick={() =>
          event({
            action: 'Click',
            category: 'External Link',
            label: gaLabel,
          })
        }
      >
        {children}
      </a>
    );
  }

  if (linkProps) {
    return (
      <Link {...linkProps}>
        <a
          className={classes}
          onClick={() =>
            event({
              action: 'Click',
              category: 'Internal Link',
              label: gaLabel,
            })
          }
        >
          {children}
        </a>
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
