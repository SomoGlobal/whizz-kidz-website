import Link from 'next/link';
import React from 'react';

export interface IPrimaryNavProps {
  activeIndex?: number;
  links: Array<{
    label: string;
    href: string;
    bg?: string;
  }>;
}

const PrimaryNav: React.FC<IPrimaryNavProps> = ({ links }) => {
  return (
    <nav title="Primary Navigation" className="hidden md:block">
      <ul className="flex">
        {links.map((nav) => (
          <li key={nav.href}>
            <Link href={nav.href}>
              <a
                className={`px-3 py-2 hover:text-white hover:${
                  nav.bg || 'bg-blue-700'
                } text-gray-700 uppercase font-bold text-sm`}
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
