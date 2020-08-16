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
      {/* eslint-disable-next-line react/no-danger */}
      <div
        className={cx(styles.markdown, 'my-40 max-w-2xl mx-auto')}
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </Container>
  );
};

export default Article;
