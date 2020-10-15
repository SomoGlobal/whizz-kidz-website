import React from 'react';
import { event } from '../../lib/google-analytics';
import SocialIcon from '../social-icon';

export interface ISocialLinksProps {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
}

const iconSize = '18px';

const SocialLinks: React.FC<ISocialLinksProps> = ({
  facebook,
  twitter,
  instagram,
  youtube,
}) => {
  const A = ({ className, href, children, title }) => {
    return (
      <a
        className={`p-3 mx-1 bg-blue-800 text-white rounded-full ${className}`}
        title={title}
        aria-label={`${title} (opens in new window)`}
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          event({
            action: 'Click',
            category: 'Social Links',
            label: title,
          })
        }
      >
        {children}
      </a>
    );
  };

  return (
    <div className="flex" aria-label="Social Media Links">
      {facebook && (
        <A
          title="Facebook"
          className="hover:bg-facebook focus:bg-facebook"
          href={`https://www.facebook.com/${facebook}`}
        >
          <SocialIcon type="facebook" size={iconSize} />
        </A>
      )}
      {twitter && (
        <A
          title="Twitter"
          className="hover:bg-twitter focus:bg-twitter"
          href={`https://twitter.com/${twitter}`}
        >
          <SocialIcon type="twitter" size={iconSize} />
        </A>
      )}
      {instagram && (
        <A
          title="Instagram"
          className="hover:bg-instagram focus:bg-instagram"
          href={`https://www.instagram.com/${instagram}/`}
        >
          <SocialIcon type="instagram" size={iconSize} />
        </A>
      )}
      {youtube && (
        <A
          title="YouTube"
          className="hover:bg-youtube focus:bg-youtube"
          href={`https://www.youtube.com/user/${youtube}/videos`}
        >
          <SocialIcon type="youtube" size={iconSize} />
        </A>
      )}
    </div>
  );
};

export default SocialLinks;
