import Link from 'next/link';
import React, { useContext } from 'react';
import BrandContext from '../../lib/brand-context';
import Container from '../container';

export interface ISecondaryNavProps {
  color?: string;
  activeIndex?: number;
  items: Array<{
    id?: string;
    label: string;
    linkProps: any;
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
      aria-label="Secondary Navigation"
    >
      <Container>
        <nav aria-label="Sibling pages">
          <ul className="flex flex-wrap">
            {items.map((nav, index) => (
              <li key={nav.label}>
                <Link {...nav.linkProps}>
                  <a
                    aria-current={index === activeIndex ? 'page' : 'false'}
                    className="relative block p-4 text-base font-medium text-gray-700 hover:underline whitespace-no-wrap hover:bg-gray-200"
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
