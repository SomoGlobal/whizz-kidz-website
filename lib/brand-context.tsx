import React from 'react';

interface IBrand {
  backgroundColor: string;
  hoverSmallBackgroundColor: string;
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
    smallTextColor: 'text-indigo-900',
  },
  home: {
    backgroundColor: 'bg-pink-700',
    hoverSmallBackgroundColor: 'hover:bg-pink-700',
    smallBackgroundColor: 'bg-pink-700',
    smallTextColor: 'text-pink-700',
  },
  kidz: {
    backgroundColor: 'bg-indigo-500',
    hoverSmallBackgroundColor: 'hover:bg-indigo-600',
    smallBackgroundColor: 'bg-indigo-600',
    smallTextColor: 'text-indigo-600',
  },
  families: {
    backgroundColor: 'bg-purple-800',
    hoverSmallBackgroundColor: 'hover:bg-purple-800',
    smallBackgroundColor: 'bg-purple-800',
    smallTextColor: 'text-purple-600',
  },
  supporters: {
    backgroundColor: 'bg-green-600',
    hoverSmallBackgroundColor: 'hover:bg-green-700',
    smallBackgroundColor: 'bg-green-700',
    smallTextColor: 'text-green-800',
  },
  charity: {
    backgroundColor: 'bg-orange-600',
    hoverSmallBackgroundColor: 'hover:bg-orange-700',
    smallBackgroundColor: 'bg-orange-700',
    smallTextColor: 'text-orange-800',
  },
  discover: {
    backgroundColor: 'bg-gray-600',
    hoverSmallBackgroundColor: 'hover:bg-gray-600',
    smallBackgroundColor: 'bg-gray-600',
    smallTextColor: 'text-gray-600',
  },
};

const BrandContext = React.createContext<IBrand>(brands.default);

export default BrandContext;
