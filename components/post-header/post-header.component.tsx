import React from 'react';
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
      <article className="my-20 max-w-3xl mx-auto">
        <Statement
          headerLevel={1}
          headerElement="heading"
          hasBigHeading
          text={summary}
          heading={title}
          eyebrow={<DateTime label="Published" time={publishedAt} />}
        />
        <div className="flex items-center mt-10 bg-gray-200 p-4 rounded-lg">
          <img
            alt={author.name}
            src={author.picture.url}
            className="rounded-full border-2 border-solid border-indigo-200"
            width="64"
            height="64"
          />
          <div className="text-gray-700 leading-tight ml-4">
            <div className="text-sm font-medium uppercase">Author</div>
            <div className="text-2xl font-medium">{author.name}</div>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default PostHeader;
