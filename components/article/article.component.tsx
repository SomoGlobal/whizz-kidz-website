/* eslint-disable react/no-danger */
import React from 'react';
import cx from 'classnames';
import Container from '../container';

import styles from './article.module.css';

export interface IArticleProps {
  body: string;
}

const Article: React.FC<IArticleProps> = ({ body }) => {
  return (
    <Container element="article">
      <div
        dangerouslySetInnerHTML={{ __html: body }}
        className={cx(styles.article, 'my-40 max-w-2xl mx-auto')}
      />
    </Container>
  );
};

export default Article;
