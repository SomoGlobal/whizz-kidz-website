import React from 'react';
import CallToAction from '../call-to-action';
import { ICallToActionProps } from '../call-to-action/call-to-action.component';
import Container from '../container';

export interface ICTAProps
  extends Pick<ICallToActionProps, 'isOutlined' | 'isGhost' | 'size'> {
  link: ICallToActionProps;
}

const CTA: React.FC<ICTAProps> = ({
  link,
  isOutlined = false,
  isGhost = false,
  size = 'lg',
}) => (
  <Container className="flex items-center justify-center my-10 md:my-20">
    <CallToAction
      {...link}
      isOutlined={isOutlined}
      isGhost={isGhost}
      size={size}
    />
  </Container>
);

export default CTA;
