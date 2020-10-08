import cx from 'classnames';
import { IBrand } from 'lib/brand-context';
import Link from 'next/link';
import React from 'react';
import Container from '../container';

export interface ILegacyJourneyStartProps {
  brand: IBrand;
  label: string;
  href: string;
}

const LegacyJourneyStart: React.FC<ILegacyJourneyStartProps> = ({
  href,
  label,
  brand,
}) => {
  return (
    <Link href={href}>
      <a
        aria-label={`For ${label}`}
        className={cx(
          brand.backgroundColor,
          brand.hoverSmallBackgroundColor,
          'bg-gray-100 flex flex-1 hover:underline bg-cover bg-center text-white'
        )}
      >
        <Container>
          <div className={cx('py-10 md:py-20')}>
            <p
              className={cx(
                'text-4xl md:text-6xl font-bold leading-snug flex items-center w-full justify-between'
              )}
            >
              For {label}
              <svg
                role="presentation"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width=".8em"
                height=".8em"
                className="stroke-current ml-3"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </p>
          </div>
        </Container>
      </a>
    </Link>
  );
};

export default LegacyJourneyStart;
