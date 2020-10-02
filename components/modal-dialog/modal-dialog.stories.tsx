import React from 'react';

import ModalDialog from './modal-dialog.component';

const Template = (args) => <ModalDialog {...args} />;

export default {
  title: 'Components/ModalDialog',
  component: ModalDialog,
  argTypes: { onClose: { action: 'closed' } },
};

export const Story = Template.bind({});
Story.args = {
  title: 'Navigation',
  isOpen: true,
  isDismissable: true,
};
