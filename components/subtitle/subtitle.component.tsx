import React from 'react';

const Subtitle: React.FC = ({ children }) => {
  return (
    <div className="text-4xl text-gray-700 font-bold leading-snug">
      {children}
    </div>
  );
};

export default Subtitle;
