import React from 'react';
import '../styles/index.css';
import BrandContext, { brands } from '../lib/brand-context';

const App = ({ Component, pageProps }) => (
  <BrandContext.Provider value={brands.default}>
    <Component {...pageProps} />
  </BrandContext.Provider>
);

export default App;
