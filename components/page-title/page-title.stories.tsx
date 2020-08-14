import React from 'react';

import PageTitle from './page-title.component';

const Template = (args) => <PageTitle {...args} />;

export default {
  title: 'Components/PageTitle',
  component: PageTitle,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'text' },
  },
};

export const Story = Template.bind({});

Story.args = {
  text: 'Lorem Ipsum',
  color: 'bg-blue-600',
};
