import React, { useContext } from 'react';
import cx from 'classnames';
import BrandContext from '../../lib/brand-context';
import SocialIcon from '../social-icon';

export interface IShareProps {
  url: string;
  title: string;
}

const ICON_SIZE = '32px';

const Item: React.FC<any> = ({ className, href, type, label }) => (
  <li>
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className={`transition-colors duration-100 ease-in-out flex items-center my-2 mx-4 sm:mx-0 bg-gray-200 text-gray-600 hover:text-white rounded-full p-3 ${className}`}
    >
      <SocialIcon type={type} size={ICON_SIZE} />
      <span className="ml-2 sr-only">{label} (opens in new window)</span>
    </a>
  </li>
);

const Share: React.FC<IShareProps> = ({ url }) => {
  const { smallTextColor } = useContext(BrandContext);

  const items = [
    {
      type: 'facebook',
      label: 'Share',
      className: 'hover:bg-facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
    {
      type: 'twitter',
      label: 'Tweet',
      className: 'hover:bg-twitter',
      href: `https://twitter.com/intent/tweet?text=${url}`,
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      className: 'hover:bg-linkedin',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    },
  ];

  return (
    <aside
      className="inline-flex sm:flex-col items-center"
      data-datocms-noindex
    >
      <div
        className={cx(
          smallTextColor,
          'uppercase font-bold tracking-wider sm:mb-3 text-base'
        )}
      >
        Share
      </div>
      <ul aria-label="Share" className="font-medium flex sm:inline-block">
        {items.map((item) => (
          <Item key={item.href} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default Share;
