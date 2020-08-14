import React from 'react';
import Link from 'next/link';
import Logo from '../logo';
import Container from '../container';
import Button from '../button';

const footerNavigationLinks = [
  { label: 'Contact', href: '/contact' },
  { label: 'Terms and Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Accessibility', href: '/accessibility' },
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
        <div className="flex justify-between text-white py-8 items-center text-sm">
          <span>
            Copyright 2020 All rights reserved. <a>Website by Somo</a>
          </span>
          <nav>
            <ul className="flex">
              {footerNavigationLinks.map((nav) => (
                <li key={nav.href} className="ml-4">
                  <Link href={nav.href}>
                    <a>{nav.label}</a>
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
