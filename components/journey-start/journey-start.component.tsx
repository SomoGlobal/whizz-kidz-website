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
    <div className={cx(color)}>
      <Container>
        <div className="flex items-center justify-between py-20 text-white">
          <h2 className="text-4xl md:text-6xl font-bold leading-snug">
            For{' '}
            <Link href={href}>
              <a>
                <mark className="p-4 text-gray-100 bg-indigo-900 hover:underline">
                  {label}
                </mark>
              </a>
            </Link>
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default JourneyStart;
