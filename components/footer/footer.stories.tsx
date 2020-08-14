import React from 'react';

import Footer from './footer.component';

const Template = (args) => <Footer {...args} />;

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Story = Template.bind({});

Story.args = {
  children: 'text',
};
