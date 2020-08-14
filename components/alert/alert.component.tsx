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
    <div className="border-b bg-accent-7 border-accent-7 text-white">
      <Container>
        <div className="py-2 text-center text-sm">
          This is page is a preview.
        </div>
      </Container>
    </div>
  );
};

export default Alert;
