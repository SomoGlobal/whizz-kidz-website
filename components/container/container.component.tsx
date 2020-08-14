import React from 'react';

export interface IContainerProps {
  bg?: string;
}

const Container: React.FC<IContainerProps> = ({
  children,
  bg = 'bg-transparent',
}) => {
  return (
    <div className={`container mx-auto px-5 relative ${bg}`}>{children}</div>
  );
};

export default Container;
