import Link from 'next/link';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { brands } from '../../lib/brand-context';
import Container from '../container';
import IconButton from '../icon-button';
import Logo from '../logo';
import PrimaryNav from '../primary-nav';
import FullPageSitemap from '../full-page-sitemap';

const primaryNavigationLinks = [
  {
    label: 'Home',
    href: '/',
    background: brands.home.hoverSmallBackgroundColor,
  },
  {
    label: 'Kidz',
    href: '/kidz',
    background: brands.kidz.hoverSmallBackgroundColor,
  },
  {
    label: 'Families',
    href: '/families',
    background: brands.families.hoverSmallBackgroundColor,
  },
  {
    label: 'Supporters',
    href: '/supporters',
    background: brands.supporters.hoverSmallBackgroundColor,
  },
  {
    label: 'About Us',
    href: '/about-us',
    background: brands.default.hoverSmallBackgroundColor,
  },
  {
    label: 'Discover',
    href: '/discover',
    background: brands.discover.hoverSmallBackgroundColor,
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
          <div className="flex items-center justify-between py-2">
            <Link href="/">
              <a className="text-gray-700 fill-current w-20 md:w-32 text-center">
                <Logo />
              </a>
            </Link>
            <PrimaryNav links={primaryNavigationLinks} />
            <FullPageSitemap />
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
