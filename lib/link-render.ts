type Parent = { slug: string; parent: Parent };

export interface ILink {
  externalUrl?: string;
  internal: {
    _modelApiKey: string;
    slug: string;
    parent?: Parent;
  };
}

const queryToHref = (query: Partial<ILink['internal']>, path = []) => {
  if (!query.parent) {
    return [query.slug, ...path];
  }

  return queryToHref(query.parent, [query.slug, ...path]);
};

const linkRender = ({ internal, externalUrl }: ILink) => {
  const buttonProps: Partial<any> = {};

  if (externalUrl) {
    buttonProps.externalUrl = externalUrl;
  } else if (!internal) {
    console.warn('Warning: Button is missing an internal or external link');

    return { externalUrl: '/' };
  } else {
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
      case 'equipment':
        linkProps = {
          as: `/equipment/${internal.slug}`,
          href: `/equipment/[slug]`,
        };
        break;
      default:
        linkProps = { href: '/' };
    }

    buttonProps.linkProps = linkProps;
  }

  return buttonProps;
};

export default linkRender;
