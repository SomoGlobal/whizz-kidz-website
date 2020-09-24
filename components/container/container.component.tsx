import React from 'react';

export interface IContainerProps {
  className?: string;
  as?: string;
  [props: string]: any;
}

const Container: React.FC<IContainerProps> = ({
  as = 'div',
  children,
  className = 'bg-transparent',
  ...props
}) => {
  return React.createElement(
    as,
    {
      className: `lg:container lg:mx-auto px-5 relative ${className}`,
      ...props,
    },
    children
  );
};

export default Container;
