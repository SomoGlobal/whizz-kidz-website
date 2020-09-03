import cx from 'classnames';
import Link from 'next/link';
import React from 'react';
import { brands } from '../../lib/brand-context';

export interface IPrimaryNavProps {
  activeIndex?: number;
  links: Array<{
    id: string;
    label: string;
    brand: string;
    linkProps: any;
    hideDesktop?: boolean;
  }>;
}

const PrimaryNav: React.FC<IPrimaryNavProps> = ({ links, activeIndex }) => {
  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex text-gray-700">
        {links
          .filter((item) => !item.hideDesktop)
          .map((nav, index) => (
            <li key={nav.id}>
              <Link {...nav.linkProps}>
                <a
                  className={cx(
                    'px-3 py-2 hover:text-white uppercase font-bold text-sm',
                    `${
                      brands[nav.brand || 'default'].hoverSmallBackgroundColor
                    }`,
                    {
                      'text-white': index === activeIndex,
                      [brands[nav.brand || 'default'].smallBackgroundColor]:
                        index === activeIndex,
                    }
                  )}
                >
                  {nav.label}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default PrimaryNav;
