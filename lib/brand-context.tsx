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
    backgroundColor: 'bg-indigo-900',
    hoverSmallBackgroundColor: 'hover:bg-indigo-700',
    textColor: 'text-indigo-900',
    smallTextColor: 'text-indigo-900',
  },
  home: {
    backgroundColor: 'bg-pink-600',
    hoverSmallBackgroundColor: 'hover:bg-pink-600',
    textColor: 'text-pink-600',
    smallTextColor: 'text-pink-600',
  },
  kidz: {
    backgroundColor: 'bg-indigo-500',
    hoverSmallBackgroundColor: 'hover:bg-indigo-500',
    textColor: 'text-indigo-500',
    smallTextColor: 'text-indigo-600',
  },
  families: {
    backgroundColor: 'bg-purple-800',
    hoverSmallBackgroundColor: 'hover:bg-purple-800',
    textColor: 'text-purple-800',
    smallTextColor: 'text-purple-600',
  },
  supporters: {
    backgroundColor: 'bg-green-600',
    hoverSmallBackgroundColor: 'hover:bg-green-600',
    textColor: 'text-green-600',
    smallTextColor: 'text-green-600',
  },
  charity: {
    backgroundColor: 'bg-yellow-700',
    hoverSmallBackgroundColor: 'hover:bg-yellow-700',
    textColor: 'text-yellow-700',
    smallTextColor: 'text-yellow-800',
  },
  discover: {
    backgroundColor: 'bg-gray-600',
    hoverSmallBackgroundColor: 'hover:bg-gray-600',
    textColor: 'text-gray-600',
    smallTextColor: 'text-gray-600',
  },
};

const BrandContext = React.createContext<IBrand>(brands.default);

export default BrandContext;
