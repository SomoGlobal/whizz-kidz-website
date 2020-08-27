import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import '../styles/index.css';
import BrandContext, { brands } from '../lib/brand-context';

const App = ({ Component, pageProps }) => (
  <ParallaxProvider>
    <BrandContext.Provider value={brands.default}>
      <Component {...pageProps} />
    </BrandContext.Provider>
  </ParallaxProvider>
);

export default App;
