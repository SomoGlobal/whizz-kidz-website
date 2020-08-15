import React from 'react';

export interface IContainerProps {
  bg?: string;
  element?: string;
}

const Container: React.FC<IContainerProps> = ({
  element = 'div',
  children,
  bg = 'bg-transparent',
}) => {
  return React.createElement(
    element,
    {
      className: `lg:container lg:mx-auto px-5 relative ${bg}`,
    },
    children
  );
};

export default Container;
