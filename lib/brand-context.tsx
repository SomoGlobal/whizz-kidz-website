import React from 'react';

interface IBrand {
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
    backgroundColor: 'bg-pink-700',
    hoverSmallBackgroundColor: 'hover:bg-pink-700',
    smallBackgroundColor: 'bg-pink-700',
    textColor: 'text-pink-500',
    smallTextColor: 'text-pink-700',
  },
  kidz: {
    backgroundColor: 'bg-indigo-500',
    hoverSmallBackgroundColor: 'hover:bg-indigo-600',
    smallBackgroundColor: 'bg-indigo-600',
    textColor: 'text-indigo-500',
    smallTextColor: 'text-indigo-600',
  },
  families: {
    backgroundColor: 'bg-green-600',
    hoverSmallBackgroundColor: 'hover:bg-green-700',
    smallBackgroundColor: 'bg-green-700',
    textColor: 'text-green-500',
    smallTextColor: 'text-green-800',
  },
  supporters: {
    backgroundColor: 'bg-purple-800',
    hoverSmallBackgroundColor: 'hover:bg-purple-800',
    smallBackgroundColor: 'bg-purple-800',
    textColor: 'text-purple-500',
    smallTextColor: 'text-purple-600',
  },
  charity: {
    backgroundColor: 'bg-orange-600',
    hoverSmallBackgroundColor: 'hover:bg-orange-700',
    smallBackgroundColor: 'bg-orange-600',
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
