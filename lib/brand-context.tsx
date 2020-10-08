import React from 'react';

export interface IBrand {
  backgroundColor: string;
  hoverSmallBackgroundColor: string;
  textColor: string;
  smallBackgroundColor: string;
  smallTextColor: string;
}

interface IBrands {
  [name: string]: IBrand;
}

export const brands: IBrands = {
  default: {
    backgroundColor: 'bg-indigo-900',
    hoverSmallBackgroundColor: 'hover:bg-indigo-700',
    smallBackgroundColor: 'bg-indigo-700',
    textColor: 'text-indigo-500',
    smallTextColor: 'text-indigo-900',
  },
  home: {
    backgroundColor: 'bg-green-600',
    hoverSmallBackgroundColor: 'hover:bg-green-700',
    smallBackgroundColor: 'bg-green-700',
    textColor: 'text-green-500',
    smallTextColor: 'text-green-800',
  },
  kidz: {
    backgroundColor: 'bg-indigo-500',
    hoverSmallBackgroundColor: 'hover:bg-indigo-600',
    smallBackgroundColor: 'bg-indigo-600',
    textColor: 'text-indigo-500',
    smallTextColor: 'text-indigo-600',
  },
  families: {
    backgroundColor: 'bg-pink-600',
    hoverSmallBackgroundColor: 'hover:bg-primary-pink',
    smallBackgroundColor: 'bg-primary-pink',
    textColor: 'text-primary-pink',
    smallTextColor: 'text-primary-pink',
  },
  supporters: {
    backgroundColor: 'bg-purple-800',
    hoverSmallBackgroundColor: 'hover:bg-secondary-blue',
    smallBackgroundColor: 'bg-secondary-blue',
    textColor: 'text-secondary-blue',
    smallTextColor: 'text-secondary-blue',
  },
  charity: {
    backgroundColor: 'bg-orange-600',
    hoverSmallBackgroundColor: 'hover:bg-orange-700',
    smallBackgroundColor: 'bg-orange-700',
    textColor: 'text-orange-500',
    smallTextColor: 'text-orange-800',
  },
  discover: {
    backgroundColor: 'bg-gray-600',
    hoverSmallBackgroundColor: 'hover:bg-gray-700',
    smallBackgroundColor: 'bg-gray-700',
    textColor: 'text-gray-600',
    smallTextColor: 'text-gray-700',
  },
};

const BrandContext = React.createContext<IBrand>(brands.default);

export default BrandContext;
