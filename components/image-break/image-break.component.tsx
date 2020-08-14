import React from 'react';
import cx from 'classnames';
import Container from '../container';
import ImageFilter from '../image-filter';

import styles from './image-break.module.css';

const ImageBreak: React.FC = ({ children }) => {
  return (
    <Container>
      <div className={cx(`w-full`, styles.break)}>
        <ImageFilter>{children}</ImageFilter>
      </div>
    </Container>
  );
};

export default ImageBreak;
