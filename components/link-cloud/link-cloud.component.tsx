import Link from 'next/link';
import React from 'react';
import cx from 'classnames';
import { brands } from '../../lib/brand-context';
import Container from '../container';

type LinkItem = {
  label: string;
  linkProps: {
    href: string;
    as?: string;
  };
};

export interface ILinkCloudProps {
  label: string;
  items: LinkItem[];
}

const colors = [
  brands.families.backgroundColor,
  brands.charity.backgroundColor,
  brands.home.backgroundColor,
  brands.kidz.backgroundColor,
  brands.discover.backgroundColor,
  brands.supporters.backgroundColor,
];

const LinkCloud: React.FC<ILinkCloudProps> = ({ items, label }) => {
  return (
    <Container className="my-10 md:my-20 lg:my-40">
      <ul className="flex flex-wrap" aria-label={label}>
        {items.map((item, index) => (
          <li key={item.linkProps.href} className="mr-8 mb-10">
            <Link {...item.linkProps}>
              <a
                className={cx(
                  'text-white hover:underline font-bold leading-normal text-6xl md:text-7xl px-4 py-4 clone',
                  colors[index % colors.length]
                )}
              >
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default LinkCloud;
