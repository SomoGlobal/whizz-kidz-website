import React from 'react';
import Container from '../container';

export interface IAlertProps {
  preview?: boolean;
}

const Alert: React.FC<IAlertProps> = ({ preview }) => {
  if (!preview) {
    return null;
  }

  return (
    <div className="border-b border-accent-7 text-white bg-black">
      <Container className="py-2 text-center text-sm uppercase font-bold opacity-75">
        This is page is a preview
      </Container>
    </div>
  );
};

export default Alert;
