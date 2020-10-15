import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Router from 'next/router';

import BrandContext, { brands } from '../lib/brand-context';
import { pageview } from '../lib/google-analytics';

import '../styles/index.css';

Router.events.on('routeChangeComplete', (url) => pageview(url));

const App = ({ Component, pageProps }) => (
  <ParallaxProvider>
    <BrandContext.Provider value={brands.default}>
      <Component {...pageProps} />
    </BrandContext.Provider>
  </ParallaxProvider>
);

export default App;
