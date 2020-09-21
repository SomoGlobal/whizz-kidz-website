import Link from 'next/link';
import React from 'react';
import Button from '../button';
import Container from '../container';
import FullPageSitemap from '../full-page-sitemap';
import Logo from '../logo';
import PrimaryNav from '../primary-nav';

const Header: React.FC<{ links: any[]; primaryActiveIndex?: number }> = ({
  links,
  primaryActiveIndex,
}) => {
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
              <a className="text-gray-700 fill-current w-32">
                <Logo />
              </a>
            </Link>
            <PrimaryNav links={links} activeIndex={primaryActiveIndex} />
            <div className="flex items-center ml-4">
              <Button
                size="m"
                linkProps={{ href: process.env.DONATE_URL || '/donate' }}
              >
                Donate
              </Button>
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
              <div>
                <FullPageSitemap links={links} />
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
