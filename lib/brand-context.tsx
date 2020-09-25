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
    // backgroundColor: 'bg-pink-700',
    backgroundColor: 'bg-primary-pink',
    // hoverSmallBackgroundColor: 'hover:bg-pink-700',
    hoverSmallBackgroundColor: 'hover:bg-primary-pink',
    // smallBackgroundColor: 'bg-pink-700',
    smallBackgroundColor: 'bg-primary-pink',
    // textColor: 'text-pink-500',
    textColor: 'text-primary-pink',
    // smallTextColor: 'text-pink-700',
    smallTextColor: 'text-primary-pink',
  },
  kidz: {
    // backgroundColor: 'bg-indigo-500',
    backgroundColor: 'bg-secondary-yellow',
    // hoverSmallBackgroundColor: 'hover:bg-indigo-600',
    hoverSmallBackgroundColor: 'hover:bg-secondary-yellow',
    // smallBackgroundColor: 'bg-indigo-600',
    smallBackgroundColor: 'bg-secondary-yellow',
    // textColor: 'text-indigo-500',
    textColor: 'text-secondary-yellow',
    // smallTextColor: 'text-indigo-600',
    smallTextColor: 'text-secondary-yellow',
  },
  families: {
    // backgroundColor: 'bg-green-600',
    backgroundColor: 'bg-primary-blue',
    // hoverSmallBackgroundColor: 'hover:bg-green-700',
    hoverSmallBackgroundColor: 'hover:bg-primary-blue',
    // smallBackgroundColor: 'bg-green-700',
    smallBackgroundColor: 'bg-primary-blue',
    // textColor: 'text-green-500',
    textColor: 'text-primary-blue',
    // smallTextColor: 'text-green-800',
    smallTextColor: 'text-primary-blue',
  },
  supporters: {
    // backgroundColor: 'bg-purple-800',
    backgroundColor: 'bg-secondary-blue',
    // hoverSmallBackgroundColor: 'hover:bg-purple-800',
    hoverSmallBackgroundColor: 'hover:bg-secondary-blue',
    // smallBackgroundColor: 'bg-purple-800',
    smallBackgroundColor: 'bg-secondary-blue',
    // textColor: 'text-purple-500',
    textColor: 'text-secondary-blue',
    // smallTextColor: 'text-purple-600',
    smallTextColor: 'text-secondary-blue',
  },
  charity: {
    // backgroundColor: 'bg-orange-600',
    backgroundColor: 'bg-primary-gray',
    // hoverSmallBackgroundColor: 'hover:bg-orange-700',
    hoverSmallBackgroundColor: 'hover:bg-primary-gray',
    // smallBackgroundColor: 'bg-orange-600',
    smallBackgroundColor: 'bg-primary-gray',
    // textColor: 'text-orange-500',
    textColor: 'text-primary-gray',
    // smallTextColor: 'text-orange-800',
    smallTextColor: 'text-primary-gray',
  },
  discover: {
    // backgroundColor: 'bg-gray-600',
    backgroundColor: 'bg-secondary-green',
    // hoverSmallBackgroundColor: 'hover:bg-gray-700',
    hoverSmallBackgroundColor: 'hover:bg-secondary-green',
    // smallBackgroundColor: 'bg-gray-700',
    smallBackgroundColor: 'bg-secondary-green',
    // textColor: 'text-gray-600',
    textColor: 'text-secondary-green',
    // smallTextColor: 'text-gray-700',
    smallTextColor: 'text-secondary-green',
  },
};

const BrandContext = React.createContext<IBrand>(brands.default);

export default BrandContext;
