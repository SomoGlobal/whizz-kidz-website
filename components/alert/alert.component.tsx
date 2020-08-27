import React, { useContext } from 'react';
import cx from 'classnames';
import BrandContext from '../../lib/brand-context';
import Container from '../container';

export interface IAlertProps {
  preview?: boolean;
}

const Alert: React.FC<IAlertProps> = ({ preview }) => {
  const { backgroundColor } = useContext(BrandContext);

  if (!preview) {
    return null;
  }

  return (
    <div className={cx('border-b border-accent-7 text-white', backgroundColor)}>
      <Container>
        <div className="py-2 text-center text-sm">
          This is page is a preview.
        </div>
      </Container>
    </div>
  );
};

export default Alert;
