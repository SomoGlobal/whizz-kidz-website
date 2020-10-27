import React from 'react';
import linkRender, { ILink } from '../../lib/link-render';
import Button from '../button';
import { IButtonProps } from '../button/button.component';

export interface ICallToActionProps extends ILink {
  label: string;
  isOutlined?: boolean;
  isGhost?: boolean;
  size?: IButtonProps['size'];
}

const CallToAction: React.FC<ICallToActionProps> = ({
  label,
  externalUrl,
  internal,
  isOutlined,
  isGhost,
  size = 'lg',
}) => {
  const buttonProps = linkRender({ internal, externalUrl });

  return (
    <Button
      size={size}
      {...buttonProps}
      isOutlined={isOutlined}
      isGhost={isGhost}
    >
      {label}
    </Button>
  );
};

export default CallToAction;
