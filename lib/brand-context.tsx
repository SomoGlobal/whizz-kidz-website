import React from 'react';

interface IBrand {
  bg: string;
  text: string;
}

type BrandNames = 'kidz' | 'parents' | 'supporters';

export const brands = {
  default: {
    bg: 'bg-teal-700',
    text: 'text-teal-700',
  },
  kidz: {
    bg: 'bg-green-700',
    text: 'text-green-700',
  },
  parents: {
    bg: 'bg-blue-700',
    text: 'text-blue-700',
  },
  supporters: {
    bg: 'bg-purple-700',
    text: 'text-purple-700',
  },
};

const BrandContext = React.createContext<IBrand>(brands.default);

export default BrandContext;
