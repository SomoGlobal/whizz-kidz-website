import { useDialog } from '@react-aria/dialog';
import { FocusScope } from '@react-aria/focus';
import {
  OverlayProps,
  useModal,
  useOverlay,
  usePreventScroll,
} from '@react-aria/overlays';
import cx from 'classnames';
import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';

export interface IModalDialogProps extends OverlayProps {
  title: string;
  position: 'right-full' | 'center';
  closeButton: React.ReactNode;
}

const ModalDialog: React.FC<IModalDialogProps> = (props) => {
  const shouldReduceMotion = useReducedMotion();
  const { title, children, position, closeButton } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  const ref = React.useRef();
  const { overlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  const { modalProps } = useModal();

  // Get props for the dialog and its title
  const { dialogProps, titleProps } = useDialog(props as any, ref);

  return (
    <motion.div
      initial={{ background: 'rgba(0, 0, 0, 0)' }}
      animate={{ background: 'rgba(0, 0, 0, 0.5)' }}
      exit={{ background: 'rgba(0, 0, 0, 0)' }}
      className={cx('fixed flex top-0 left-0 bottom-0 right-0', {
        'items-center justify-center': position === 'center',
        'items-stretch justify-end': position === 'right-full',
      })}
      style={{
        zIndex: 100,
      }}
    >
      <FocusScope contain restoreFocus autoFocus>
        <motion.div
          transition={{ ease: 'circOut' }}
          initial={{ x: shouldReduceMotion ? 0 : '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: shouldReduceMotion ? 0 : '100%' }}
          {...(overlayProps as any)}
          {...(dialogProps as any)}
          {...(modalProps as any)}
          ref={ref}
          className="bg-white max-w-3xl w-full flex flex-col"
        >
          <div className="z-50 flex items-center justify-end px-4 text-gray-800 bg-white">
            <h1
              {...titleProps}
              className="inline px-4 py-3 text-3xl font-bold clone flex-1"
            >
              {title}
            </h1>
            {closeButton}
          </div>
          {children}
        </motion.div>
      </FocusScope>
    </motion.div>
  );
};

export default ModalDialog;
