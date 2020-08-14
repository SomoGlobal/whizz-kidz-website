import React from 'react';
import Alert from './alert';
import Meta from './meta';
import Header from './header';
import PageTitle from './page-title';
import SecondaryNav from './secondary-nav';

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
    <div className="min-h-screen">
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
      <main>{children}</main>
    </div>
  </>
);

export default Layout;
