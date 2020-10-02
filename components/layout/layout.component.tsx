import { OverlayProvider } from '@react-aria/overlays';
import { useRouter } from 'next/router';
import React from 'react';
import BrandContext, { brands } from '../../lib/brand-context';
import Alert from '../alert';
import Breadcrumbs from '../breadcrumbs';
import Footer from '../footer';
import Header from '../header';
import PageTitle from '../page-title';
import SecondaryNav from '../secondary-nav';
import { ISecondaryNavProps } from '../secondary-nav/secondary-nav.component';

export interface ILayoutProps {
  brand?: string;
  preview?: boolean;
  pageTitle?: string;
  secondaryNavItems?: ISecondaryNavProps['items'];
}

const links = [
  {
    id: 'link0',
    label: 'Home',
    type: 'link',
    linkProps: { href: '/' },
    children: [],
    brand: 'home',
  },
  {
    id: 'link1',
    label: 'Kidz',
    type: 'link',
    children: [],
    linkProps: { href: '/kidz' },
    brand: 'kidz',
  },
  {
    id: 'link2',
    label: 'Families',
    type: 'link',
    children: [],
    linkProps: { href: '/families' },
    brand: 'families',
  },
  {
    id: 'link3',
    label: 'Supporters',
    type: 'link',
    children: [],
    linkProps: { href: '/supporters' },
    brand: 'supporters',
  },
  {
    id: 'link5',
    label: 'The Charity',
    type: 'link',
    children: [],
    linkProps: { href: '/charity' },
    brand: 'charity',
  },
  {
    id: 'link4',
    label: 'Discover',
    type: 'link',
    children: [],
    linkProps: { href: '/discover' },
    brand: 'discover',
  },
  // {
  //   id: 'link6',
  //   label: 'Website Policies',
  //   type: 'category',
  //   hideDesktop: true,
  //   children: [
  //     { label: 'Accessibility', href: '/accessibility' },
  //     { label: 'Cookies', href: '/cookies' },
  //     { label: 'Privacy', href: '/privacy' },
  //     { label: 'Terms and Conditions', href: '/terms' },
  //   ],
  //   linkProps: { href: '/policies' },
  //   brand: 'home',
  // },
];

const Layout: React.FC<any> = ({
  brand = 'default',
  preview,
  children,
  breadcrumbs = [],
  pageTitle,
  secondaryNavItems = [],
}) => {
  const router = useRouter();
  const primaryActiveIndex = links.findIndex((item) =>
    item.linkProps.href.startsWith(`/${router.asPath.split('/')[1]}`)
  );
  const secondaryActiveIndex = secondaryNavItems.findIndex((item) => {
    const path = router.asPath;

    if (item.linkProps.as) {
      return item.linkProps.as.startsWith(path);
    }

    if (item.linkProps.href) {
      return item.linkProps.href.startsWith(path);
    }

    return false;
  });

  return (
    <OverlayProvider>
      <BrandContext.Provider value={brands[brand]}>
        <div className="min-h-screen flex flex-col">
          <Alert preview={preview} />
          <Header links={links} primaryActiveIndex={primaryActiveIndex} />
          {pageTitle && <PageTitle text={pageTitle} />}
          {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
          {secondaryNavItems.length > 0 && (
            <SecondaryNav
              activeIndex={secondaryActiveIndex}
              items={secondaryNavItems}
            />
          )}
          <main id="main" className="flex-1 overflow-hidden">
            {children}
          </main>
          <Footer />
        </div>
      </BrandContext.Provider>
    </OverlayProvider>
  );
};

export default Layout;
