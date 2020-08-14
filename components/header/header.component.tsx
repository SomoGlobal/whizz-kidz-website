import React from 'react';
import Link from 'next/link';
import { SECTIONS_COLORS } from '../../lib/constants';
import Container from '../container';
import Logo from '../logo';

const primaryNavigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Kidz', href: '/kidz', bg: SECTIONS_COLORS.kidz.bg },
  { label: 'Parents', href: '/parents', bg: SECTIONS_COLORS.parents.bg },
  {
    label: 'Supporters',
    href: '/supporters',
    bg: SECTIONS_COLORS.supporters.bg,
  },
  { label: 'About Us', href: '/about' },
  { label: 'Discover', href: '/discover' },
];

const Header: React.FC = () => {
  return (
    <>
      <a
        href="#main"
        className="bg-white text-center sr-only focus:not-sr-only text-lg text-blue-700 uppercase tracking-wider border-1 font-bold underline"
      >
        <span className="m-4 p-3 block">Skip to main content</span>
      </a>
      <header className="bg-white sticky top-0 z-40">
        <Container>
          <div className="flex items-center justify-between py-4 border-gray-300 border-b">
            <Link href="/">
              <a className="fill-current text-yellow-600 hover:text-yellow-500">
                <Logo />
              </a>
            </Link>
            <nav title="Primary Navigation" className="hidden md:block">
              <ul className="flex">
                {primaryNavigationLinks.map((nav) => (
                  <li key={nav.href}>
                    <Link href={nav.href} prefetch>
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
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
