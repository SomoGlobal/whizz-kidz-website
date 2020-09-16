/* eslint-disable react/no-danger */
import React from 'react';
import cx from 'classnames';
import Container from '../container';

import styles from './article.module.css';

export interface IArticleProps {
  body: string;
  centered?: boolean;
}

const Article: React.FC<IArticleProps> = ({ body, centered }) => {
  return (
    <Container as="article">
      <div
        dangerouslySetInnerHTML={{ __html: body }}
        className={cx(styles.article, 'my-20 max-w-3xl', {
          'mx-auto': centered,
        })}
      />
    </Container>
  );
};

export default Article;
