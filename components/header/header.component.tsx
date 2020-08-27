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
    label: 'The Charity',
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
            <div className="flex">
              <Link href="/search">
                <a
                  className="text-gray-700 p-3 rounded-lg hover:bg-gray-200"
                  aria-label="Search"
                  title="Search"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="stroke-current w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </a>
              </Link>
              <FullPageSitemap />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
