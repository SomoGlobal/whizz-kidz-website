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
          <h2 className="text-6xl font-bold leading-snug">
            I am a{' '}
            <Link href={href}>
              <a>
                <mark className="bg-indigo-900 text-gray-100 p-4 hover:underline">
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
