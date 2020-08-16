import React from 'react';
import cx from 'classnames';

export interface IBorderedBoxProps {
  title: React.ReactChild;
  border?: string;
}

/** This component is to be used in a grid, normally used to display features or benefits of a product or service */
const BorderedBox: React.FC<IBorderedBoxProps> = ({
  title,
  border = 'border-blue-500',
  children,
}) => {
  return (
    <div
      className={cx(
        border,
        'border-4',
        'p-8',
        'rounded-lg',
        'shadow-xl',
        'justify-between',
        'flex',
        'flex-col',
        'bg-white'
      )}
    >
      <h3 className="mb-4 text-2xl font-bold text-center text-gray-700">
        {title}
      </h3>
      <div className="font-light leading-relaxed text-left text-gray-700">
        {children}
      </div>
    </div>
  );
};

export default BorderedBox;
