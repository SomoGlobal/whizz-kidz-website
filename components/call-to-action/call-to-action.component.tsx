import React from 'react';
import Button from '../button';

type Parent = { slug: string; parent: Parent };

export interface ICallToActionProps {
  label: string;
  internal: {
    _modelApiKey: string;
    slug: string;
    parent?: Parent;
  };
}

const queryToHref = (
  query: Partial<ICallToActionProps['internal']>,
  path = []
) => {
  if (!query.parent) {
    return [query.slug, ...path];
  }

  return queryToHref(query.parent, [query.slug, ...path]);
};

const CallToAction: React.FC<ICallToActionProps> = ({ label, internal }) => {
  let linkProps: any = { href: '/' };

  switch (internal._modelApiKey) {
    case 'page':
      linkProps = {
        href: `/${queryToHref(internal).join('/')}`.replace('/home', ''),
      };
      break;
    case 'category':
      linkProps = {
        as: `/discover/category/${internal.slug}`,
        href: `/discover/category/[slug]`,
      };
      break;
    case 'topic':
      linkProps = {
        as: `/discover/topic/${internal.slug}`,
        href: `/discover/topic/[slug]`,
      };
      break;
    case 'event':
      linkProps = {
        as: `/supporters/events/${internal.slug}`,
        href: `/supporters/events/[slug]`,
      };
      break;
    case 'post':
      linkProps = {
        as: `/discover/post/${internal.slug}`,
        href: `/discover/post/[slug]`,
      };
      break;
    default:
      linkProps = { href: '/' };
  }

  return (
    <Button size="lg" linkProps={linkProps}>
      {label}
    </Button>
  );
};

export default CallToAction;
