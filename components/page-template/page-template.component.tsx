import React from 'react';
import { Image } from 'react-datocms';
import cx from 'classnames';
import styles from '../article/article.module.css';
import Container from '../container';
import { IStatementProps } from '../statement/statement.component';

export interface IPageTemplateProps extends Partial<IStatementProps> {
  body: any;
  image: any;
}

const PageTemplate: React.FC<IPageTemplateProps> = ({ body, image }) => {
  return (
    <Container as="article" className="grid grid-cols-12 gap-8 mb-16">
      <figure className="col-span-5 my-6">
        <Image data={image} />
      </figure>
      <div
        dangerouslySetInnerHTML={{ __html: body }}
        className={cx(styles.article, 'col-span-7')}
      />
    </Container>
  );
};

export default PageTemplate;
