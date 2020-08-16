import React from 'react';

interface IBrand {
  backgroundColor: string;
  hoverSmallBackgroundColor: string;
  textColor: string;
  smallTextColor: string;
}

interface IBrands {
  [name: string]: IBrand;
}

export const brands: IBrands = {
  default: {
    backgroundColor: 'bg-teal-700',
    hoverSmallBackgroundColor: 'hover:bg-teal-700',
    textColor: 'text-teal-700',
    smallTextColor: 'text-teal-700',
  },
  kidz: {
    backgroundColor: 'bg-indigo-500',
    hoverSmallBackgroundColor: 'hover:bg-indigo-500',
    textColor: 'text-indigo-500',
    smallTextColor: 'text-indigo-600',
  },
  parents: {
    backgroundColor: 'bg-purple-800',
    hoverSmallBackgroundColor: 'hover:bg-purple-800',
    textColor: 'text-purple-800',
    smallTextColor: 'text-purple-600',
  },
  supporters: {
    backgroundColor: 'bg-green-500',
    hoverSmallBackgroundColor: 'hover:bg-green-600',
    textColor: 'text-green-500',
    smallTextColor: 'text-green-600',
  },
};

const BrandContext = React.createContext<IBrand>(brands.default);

export default BrandContext;
