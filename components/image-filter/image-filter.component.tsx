import React from 'react';

import styles from './image-filter.module.css';

const ImageFilter: React.FC = ({ children }) => {
  return <div className={styles.filter}>{children}</div>;
};

export default ImageFilter;
