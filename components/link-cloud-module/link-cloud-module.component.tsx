import React from 'react';
import LinkCloud from '../link-cloud';

export interface ILinkCloudModuleProps {
  items: any[];
}

const LinkCloudModule: React.FC<ILinkCloudModuleProps> = ({ items }) => {
  const newItems = items
    .map((item) => {
      if (item._modelApiKey === 'region') {
        return {
          label: item.name,
          linkProps: {
            href: `/regions/${item.slug}`,
          },
        };
      }

      return null;
    })
    .filter(Boolean);

  return <LinkCloud items={newItems} label="" />;
};

export default LinkCloudModule;
