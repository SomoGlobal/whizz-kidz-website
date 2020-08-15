import { brands } from 'lib/brand-context';
import Link from 'next/link';
import React from 'react';
import Container from '../container';
import Logo from '../logo';
import PrimaryNav from '../primary-nav';

const primaryNavigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Kidz', href: '/kidz', bg: brands.kidz.smallBackgroundColor },
  {
    label: 'Parents',
    href: '/parents',
    bg: brands.parents.smallBackgroundColor,
  },
  {
    label: 'Supporters',
    href: '/supporters',
    bg: brands.supporters.smallBackgroundColor,
  },
  { label: 'About Us', href: '/about' },
  { label: 'Discover', href: '/discover' },
];

const Header: React.FC = () => {
  return (
    <>
      <a
        href="#main"
        className="bg-white text-center sr-only focus:not-sr-only focus:sticky focus:top-0 z-50 text-lg text-blue-700 uppercase tracking-wider border-1 font-bold underline"
      >
        <span className="m-4 p-3 block">Skip to main content</span>
      </a>
      <header
        className="bg-white sticky top-0 z-40"
        aria-label="Primary Header"
      >
        <Container>
          <div className="flex items-center justify-between py-4 border-gray-300 border-b">
            <Link href="/">
              <a className="fill-current text-gray-700">
                <Logo />
              </a>
            </Link>
            <PrimaryNav links={primaryNavigationLinks} />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
