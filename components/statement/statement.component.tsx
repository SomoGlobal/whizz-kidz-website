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
  hasEyebrowStyle?: boolean;
  className?: string;
}

const Statement: React.FC<IStatementProps> = ({
  eyebrow,
  heading,
  text,
  isCentered = false,
  hasBigHeading = false,
  headerElement = 'eyebrow',
  headerLevel = 2,
  className,
  hasEyebrowStyle,
}) => {
  const { smallTextColor } = useContext(BrandContext);
  const eyebrowElement = React.createElement(
    headerElement === 'eyebrow' ? `h${headerLevel}` : 'div',
    {
      className: cx(
        'mb-3',
        {
          'uppercase font-bold tracking-wider': hasEyebrowStyle,
        },
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
    <div className={cx({ 'text-center': isCentered }, className)}>
      <div>{eyebrow && eyebrowElement}</div>
      <div>{heading && headingElement}</div>
      {text && <p className="mt-3 text-2xl font-light text-gray-700">{text}</p>}
    </div>
  );
};

export default Statement;
