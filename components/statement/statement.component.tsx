import cx from 'classnames';
import React, { useContext } from 'react';
import BrandContext from '../../lib/brand-context';

export interface IStatementProps {
  eyebrow?: React.ReactNode;
  heading?: React.ReactNode;
  text?: React.ReactNode;
  isCentered?: boolean;
  hasBigHeading?: boolean;
  headerElement?: 'eyebrow' | 'heading';
  headerLevel?: number;
}

const Statement: React.FC<IStatementProps> = ({
  eyebrow,
  heading,
  text,
  isCentered = false,
  hasBigHeading = false,
  headerElement = 'eyebrow',
  headerLevel = 2,
}) => {
  const { smallTextColor } = useContext(BrandContext);
  const eyebrowElement = React.createElement(
    headerElement === 'eyebrow' ? `h${headerLevel}` : 'p',
    {
      className: cx(
        'uppercase font-bold tracking-wider mb-3 text-base',
        smallTextColor
      ),
    },
    eyebrow
  );

  const headingElement = React.createElement(
    headerElement === 'heading' ? `h${headerLevel}` : 'p',
    {
      className: cx(`text-gray-700 font-bold leading-snug`, {
        'text-4xl': !hasBigHeading,
        'text-6xl': hasBigHeading,
      }),
    },
    heading
  );

  return (
    <div className={cx({ 'text-center': isCentered })}>
      {eyebrow && eyebrowElement}
      {heading && headingElement}
      {text && (
        <div className="mt-3 text-2xl font-light text-gray-700">{text}</div>
      )}
    </div>
  );
};

export default Statement;
