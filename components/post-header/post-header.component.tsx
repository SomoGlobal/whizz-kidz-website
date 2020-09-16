import React from 'react';
import AuthorBox from '../author-box';
import Container from '../container';
import DateTime from '../date-time';
import Statement from '../statement';

export interface IPostHeaderProps {
  title: string;
  summary?: string;
  publishedAt: string;
  author: {
    name: string;
    picture: {
      url: string;
    };
  };
}

const PostHeader: React.FC<IPostHeaderProps> = ({
  title,
  summary,
  publishedAt,
  author,
}) => {
  return (
    <Container>
      <article className="my-10 md:my-20 max-w-3xl mx-auto grid gap-12">
        <Statement
          headerLevel={1}
          headerElement="heading"
          hasBigHeading
          text={summary}
          heading={title}
          eyebrow={<DateTime label="Published" time={publishedAt} />}
        />
        <AuthorBox name={author.name} imageUrl={author.picture.url} />
      </article>
    </Container>
  );
};

export default PostHeader;
