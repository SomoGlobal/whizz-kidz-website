import cx from 'classnames';
import Link from 'next/link';
import React from 'react';
import Container from '../container';

export interface IJourneyStartProps {
  color: string;
  label: string;
  href: string;
}

const JourneyStart: React.FC<IJourneyStartProps> = ({ href, label, color }) => {
  return (
    <Link href={href}>
      <a className="bg-gray-100 hover:bg-primary-yellow flex-1 hover:underline text-white">
        <Container>
          <div className={cx('flex items-center justify-center py-20')}>
            <h2
              className={cx(
                color,
                'text-4xl md:text-6xl font-bold leading-snug p-4 text-gray-100 flex items-center'
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
            </h2>
          </div>
        </Container>
      </a>
    </Link>
  );
};

export default JourneyStart;
