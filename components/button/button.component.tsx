import React from 'react';
import cx from 'classnames';

export interface IButtonProps {
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ children, className = '' }) => {
  return (
    <button
      type="button"
      className={cx(
        'bg-green-700 text-white border-0 px-6 py-2 rounded-full',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
