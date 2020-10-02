import cx from 'classnames';
import Link from 'next/link';
import React from 'react';
import Container from '../container';

import styles from './journey-start.module.css';

export interface IJourneyStartProps {
  color: string;
  label: string;
  href: string;
}

const JourneyStart: React.FC<IJourneyStartProps> = ({ href, label, color }) => {
  return (
    <Link href={href}>
      <a
        aria-label={`For ${label}`}
        className={cx(
          styles.link,
          color,
          'bg-gray-100 items-center flex flex-1 hover:underline text-white bg-cover bg-center'
        )}
        style={{
          backgroundImage: `url("/svg/hero/${label.toLowerCase()}-hero.svg")`,
        }}
      >
        <Container>
          <div
            className={cx('flex items-center justify-center py-10 md:py-20')}
          >
            <p
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
            </p>
          </div>
        </Container>
      </a>
    </Link>
  );
};

export default JourneyStart;
