import React from 'react';
import BrandContext, { brands } from '../../lib/brand-context';
import Alert from '../alert';
import Header from '../header';
import PageTitle from '../page-title';
import SecondaryNav from '../secondary-nav';
import Footer from '../footer';
import { ISecondaryNavProps } from '../secondary-nav/secondary-nav.component';

interface ILayoutProps {
  brand?: string;
  preview?: boolean;
  pageTitle?: string;
  secondaryNavItems?: ISecondaryNavProps['items'];
  activeSecondaryNavIndex?: number;
}

const Layout: React.FC<any> = ({
  brand = 'default',
  preview,
  children,
  pageTitle,
  secondaryNavItems = [],
  activeSecondaryNavIndex,
}) => (
  <BrandContext.Provider value={brands[brand]}>
    <div className="min-h-screen flex flex-col">
      <Alert preview={preview} />
      <Header />
      {pageTitle && <PageTitle text={pageTitle} />}
      {secondaryNavItems.length > 0 && (
        <SecondaryNav
          activeIndex={activeSecondaryNavIndex}
          items={secondaryNavItems}
        />
      )}
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  </BrandContext.Provider>
);

export default Layout;
