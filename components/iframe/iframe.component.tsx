import React from 'react';

export interface IIframeProps {
  title: string;
  url: string;
}

const Iframe: React.FC<IIframeProps> = ({ title, url }) => {
  return (
    <iframe
      title={title}
      src={url}
      frameBorder="0"
      className="w-full h-full min-h-screen"
    />
  );
};

export default Iframe;
