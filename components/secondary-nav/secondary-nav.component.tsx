import Link from 'next/link';
import React, { useContext } from 'react';
import BrandContext from '../../lib/brand-context';
import Container from '../container';

export interface ISecondaryNavProps {
  color?: string;
  activeIndex?: number;
  items: Array<{
    label: string;
    href: string;
  }>;
}

const SecondaryNav: React.FC<ISecondaryNavProps> = ({
  items,
  color,
  activeIndex,
}) => {
  const { bg } = useContext(BrandContext);

  return (
    <header className="bg-white shadow-lg rounded-b-lg z-10">
      <Container>
        <nav title="Secondary Navigation">
          <ul className="flex">
            {items.map((nav, index) => (
              <li key={nav.href}>
                <Link href={nav.href}>
                  <a
                    aria-current={index === activeIndex ? 'page' : 'false'}
                    className="py-4 text-gray-700 text-base font-medium block mr-8 hover:underline bg-white relative"
                  >
                    {nav.label}
                    {index === activeIndex && (
                      <span
                        className={`absolute w-full ${
                          color || bg
                        } rounded-t-full bottom-0 left-0 h-1 px-4`}
                      />
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default SecondaryNav;
