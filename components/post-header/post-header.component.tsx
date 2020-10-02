import React from 'react';
import { IShareProps } from '../share/share.component';
import AuthorBox from '../author-box';
import Container from '../container';
import DateTime from '../date-time';
import Share from '../share';
import Statement from '../statement';
import TopicTag from '../topic-tag';

export interface IPostHeaderProps {
  title: string;
  summary?: string;
  publishedAt: string;
  share?: IShareProps;
  topic?: {
    name: string;
    slug: string;
  };
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
  topic,
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
            hasEyebrowStyle={false}
            eyebrow={
              <div className="w-full flex justify-between">
                <span className="uppercase font-bold tracking-wider">
                  <DateTime time={publishedAt} />
                </span>
                {topic && <TopicTag name={topic.name} slug={topic.slug} />}
              </div>
            }
          />
          <AuthorBox name={author.name} imageUrl={author.picture.url} />
        </div>
      </div>
    </Container>
  );
};

export default PostHeader;
