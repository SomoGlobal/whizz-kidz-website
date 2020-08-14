import Link from 'next/link';
import React from 'react';
import cx from 'classnames';
import Container from '../container';

export interface ISecondaryNavProps {
  color: string;
  activeIndex?: number;
  items: Array<{
    label: string;
    href: string;
  }>;
}

const SecondaryNav: React.FC<ISecondaryNavProps> = ({
  items,
  color = 'bg-blue-500',
  activeIndex,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-b-lg">
      <Container>
        <nav title="Secondary Navigation">
          <ul className="flex">
            {items.map((nav, index) => (
              <li key={nav.href}>
                <Link href={nav.href} prefetch>
                  <a
                    aria-current={index === activeIndex ? 'page' : 'false'}
                    className={cx(
                      'py-4 text-gray-700 text-base font-medium block mr-8 hover:underline bg-white'
                    )}
                  >
                    {nav.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default SecondaryNav;
