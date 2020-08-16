import React from 'react';
import Link from 'next/link';
import Logo from '../logo';
import Container from '../container';
import Button from '../button';

const footerNavigationLinks = [
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms and Conditions', href: '/terms' },
];

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-indigo-900"
      aria-label="Site copyright, privacy and accessibility information"
    >
      <Container>
        <div className="flex items-center justify-between py-12 text-white">
          <Logo />
          <Button>Donate</Button>
        </div>
      </Container>
      <hr className="border-indigo-800" />
      <Container>
        <div className="flex flex-col py-8 text-sm text-white md:flex-row md:justify-between md:items-center">
          <span className="hidden opacity-75 md:block">
            Copyright 2020 All rights reserved. <a>Website by Somo</a>
          </span>
          <nav aria-label="Website Policies">
            <ul className="flex flex-col md:flex-row">
              {footerNavigationLinks.map((nav) => (
                <li key={nav.href} className="md:ml-4">
                  <Link href={nav.href}>
                    <a className="block py-4 hover:underline">{nav.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
