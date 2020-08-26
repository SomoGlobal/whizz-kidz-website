import React from 'react';

const Diamond: React.FC = () => {
  return (
    <svg
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <path d="M0 5L5 0L10 5L5 10L0 5Z" fill="currentColor" />
    </svg>
  );
};

export default Diamond;
