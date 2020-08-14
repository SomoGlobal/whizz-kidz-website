import React from 'react';

import pageMap from './module-component-map';

interface IDatoModuleProps {
  module: {
    _modelApiKey: string;
    [key: string]: any;
  };
}

const DatoModule: React.FC<IDatoModuleProps> = ({ module }) => {
  const Component = pageMap[module._modelApiKey];

  return <Component {...module} />;
};

export default DatoModule;
