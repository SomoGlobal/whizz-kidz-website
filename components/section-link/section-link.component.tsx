import cx from 'classnames';
import React from 'react';
import CallToAction from '../call-to-action';
import Container from '../container';

type SectionLinkTheme = 'green' | 'blue';

export interface ISectionLinkProps {
  heading: string;
  theme: SectionLinkTheme;
  callToAction: any;
}

const SectionLink: React.FC<ISectionLinkProps> = ({
  heading,
  theme,
  callToAction,
}) => {
  return (
    <div
      className={cx({
        'bg-primary-green': theme === 'green',
        'bg-primary-blue': theme === 'blue',
      })}
    >
      <Container className="py-20 md:py-32 flex justify-between items-center flex-col md:flex-row">
        <div className="text-6xl lg:text-7xl font-bold text-white max-w-2xl">
          <span className="px-4 py-3 clone bg-secondary-blue">{heading}</span>
        </div>
        {callToAction && (
          <div className="mt-10 md:mt-0 md:ml-16">
            <CallToAction {...callToAction} size="lg" isOutlined />
          </div>
        )}
      </Container>
    </div>
  );
};

export default SectionLink;
