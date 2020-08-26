import React from 'react';

const Triangle: React.FC = () => {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M0 0L10 5L0 10V0Z" fill="currentColor" />
    </svg>
  );
};

export default Triangle;
