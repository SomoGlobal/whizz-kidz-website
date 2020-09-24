import Link from 'next/link';
import React from 'react';
import cx from 'classnames';
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
  'bg-pink-600',
  'bg-blue-600',
  'bg-green-600',
  'bg-yellow-700',
  'bg-indigo-700',
  'bg-purple-600',
  'bg-red-500',
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
                  'text-white hover:underline font-bold leading-normal text-5xl sm:text-6xl md:text-7xl px-4 py-4 clone',
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
