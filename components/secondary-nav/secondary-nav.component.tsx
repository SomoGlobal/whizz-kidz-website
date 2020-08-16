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
  const { backgroundColor } = useContext(BrandContext);

  return (
    <section
      className="z-10 bg-white rounded-b-lg shadow-lg"
      aria-label="Navigation Section"
    >
      <Container>
        <nav aria-label="Sibling pages">
          <ul className="flex">
            {items.map((nav, index) => (
              <li key={nav.href}>
                <Link href={nav.href}>
                  <a
                    aria-current={index === activeIndex ? 'page' : 'false'}
                    className="relative block py-4 mr-8 text-base font-medium text-gray-700 bg-white hover:underline"
                  >
                    {nav.label}
                    {index === activeIndex && (
                      <span
                        className={`absolute w-full ${
                          color || backgroundColor
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
    </section>
  );
};

export default SecondaryNav;
