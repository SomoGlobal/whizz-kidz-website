import React from 'react';
import Layout from '../layout';
import Mission from '../mission';

export interface IPageLoadingProps {
  brand?: string;
}

const PageLoading: React.FC<IPageLoadingProps> = ({ brand = 'default' }) => {
  return (
    <Layout brand={brand}>
      <Mission
        eyebrow="Page is loading"
        heading="Please wait"
        text="We are fetching content for this page..."
      />
    </Layout>
  );
};

export default PageLoading;
