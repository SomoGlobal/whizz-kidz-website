import React from 'react';
import Alert from './alert';
import Meta from './meta';
import Header from './header';
import PageTitle from './page-title';
import SecondaryNav from './secondary-nav';
import Footer from './footer';

const Layout: React.FC<any> = ({
  preview,
  children,
  color,
  pageTitle,
  secondaryNavItems = [],
  activeNavIndex,
}) => (
  <>
    <Meta />
    <div className="min-h-screen flex flex-col">
      <Alert preview={preview} />
      <Header />
      {pageTitle && <PageTitle text={pageTitle} color={color} />}
      {secondaryNavItems && (
        <SecondaryNav
          activeIndex={activeNavIndex}
          items={secondaryNavItems}
          color={color}
        />
      )}
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;
