import Link from 'next/link';
import React from 'react';
import cx from 'classnames';

export interface IPrimaryNavProps {
  activeIndex?: number;
  links: Array<{
    label: string;
    href: string;
    background: string;
  }>;
}

const PrimaryNav: React.FC<IPrimaryNavProps> = ({ links }) => {
  return (
    <nav aria-label="Primary Navigation" className="hidden md:block">
      <ul className="flex">
        {links.map((nav) => (
          <li key={nav.href}>
            <Link href={nav.href}>
              <a
                className={cx(
                  'px-3 py-2 hover:text-white text-gray-700 uppercase font-bold text-sm',
                  nav.background
                )}
              >
                {nav.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PrimaryNav;
