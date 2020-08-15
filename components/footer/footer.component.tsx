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
    <footer className="bg-indigo-900">
      <Container>
        <div className="flex justify-between text-white py-12 items-center">
          <Logo />
          <Button>Donate</Button>
        </div>
      </Container>
      <hr className="border-indigo-800" />
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between text-white py-8 md:items-center text-sm">
          <span className="opacity-75 hidden md:block">
            Copyright 2020 All rights reserved. <a>Website by Somo</a>
          </span>
          <nav>
            <ul className="flex flex-col md:flex-row">
              {footerNavigationLinks.map((nav) => (
                <li key={nav.href} className="md:ml-4">
                  <Link href={nav.href}>
                    <a className="py-4 block hover:underline">{nav.label}</a>
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
