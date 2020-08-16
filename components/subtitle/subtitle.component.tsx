import React from 'react';

const Subtitle: React.FC = ({ children }) => {
  return (
    <div className="text-4xl font-bold leading-snug text-gray-700">
      {children}
    </div>
  );
};

export default Subtitle;
