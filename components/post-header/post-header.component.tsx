import React from 'react';
import { IShareProps } from '../share/share.component';
import AuthorBox from '../author-box';
import Container from '../container';
import DateTime from '../date-time';
import Share from '../share';
import Statement from '../statement';

export interface IPostHeaderProps {
  title: string;
  summary?: string;
  publishedAt: string;
  share?: IShareProps;
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
  share,
}) => {
  return (
    <Container as="header" className="my-10 md:my-20">
      <div className="grid grid-cols-6 gap-4">
        {share && (
          <div className="col-span-1">
            <Share url={share.url} title={share.title} />
          </div>
        )}
        <div className="col-span-6 sm:col-span-5 md:col-span-4 grid gap-12">
          <Statement
            headerLevel={1}
            headerElement="heading"
            hasBigHeading
            text={summary}
            heading={title}
            eyebrow={<DateTime label="Published" time={publishedAt} />}
          />
          <AuthorBox name={author.name} imageUrl={author.picture.url} />
        </div>
      </div>
    </Container>
  );
};

export default PostHeader;
