import cx from 'classnames';
import React, { useContext } from 'react';
import BrandContext from '../../lib/brand-context';

export interface IStatementProps {
  eyebrow?: string;
  heading?: string;
  text?: string;
  isCentered?: boolean;
  hasBigHeading?: boolean;
}

const Statement: React.FC<IStatementProps> = ({
  eyebrow,
  heading,
  text,
  isCentered = false,
  hasBigHeading = false,
}) => {
  const { smallTextColor } = useContext(BrandContext);

  return (
    <div className={cx({ 'text-center': isCentered })}>
      {eyebrow && (
        <h2
          className={cx(
            'uppercase font-bold tracking-wider mb-3',
            smallTextColor
          )}
        >
          {eyebrow}
        </h2>
      )}
      {heading && (
        <p
          className={cx(`text-gray-700 font-bold leading-snug`, {
            'text-4xl': !hasBigHeading,
            'text-6xl': hasBigHeading,
          })}
        >
          {heading}
        </p>
      )}
      {text && (
        <div className="mt-3 text-2xl font-light text-gray-700">{text}</div>
      )}
    </div>
  );
};

export default Statement;
