import Link from 'next/link';
import React from 'react';
import { brands } from '../../lib/brand-context';
import Container from '../container';
import Logo from '../logo';
import PrimaryNav from '../primary-nav';

const primaryNavigationLinks = [
  {
    label: 'Home',
    href: '/',
    background: brands.default.hoverSmallBackgroundColor,
  },
  {
    label: 'Kidz',
    href: '/kidz',
    background: brands.kidz.hoverSmallBackgroundColor,
  },
  {
    label: 'Parents',
    href: '/parents',
    background: brands.parents.hoverSmallBackgroundColor,
  },
  {
    label: 'Supporters',
    href: '/supporters',
    background: brands.supporters.hoverSmallBackgroundColor,
  },
  {
    label: 'About Us',
    href: '/about',
    background: brands.default.hoverSmallBackgroundColor,
  },
  {
    label: 'Discover',
    href: '/discover',
    background: brands.default.hoverSmallBackgroundColor,
  },
];

const Header: React.FC = () => {
  return (
    <>
      <a
        href="#main"
        className="z-50 text-lg font-bold tracking-wider text-center text-blue-700 underline uppercase bg-white sr-only focus:not-sr-only focus:sticky focus:top-0 border-1"
      >
        <span className="block p-3 m-4">Skip to main content</span>
      </a>
      <header
        className="sticky top-0 z-40 bg-white"
        aria-label="Primary Header"
      >
        <Container>
          <div className="flex items-center justify-between py-4 border-b border-gray-300">
            <Link href="/">
              <a className="text-gray-700 fill-current">
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
