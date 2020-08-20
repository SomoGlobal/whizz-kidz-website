import React from 'react';

import FullPageSitemap from './full-page-sitemap.component';

const Template = (args) => <FullPageSitemap {...args} />;

export default {
  title: 'Experimental/FullPageSitemap',
  component: FullPageSitemap,
  argTypes: {
    children: { control: 'text' },
  },
};

export const Story = Template.bind({});

Story.args = {
  children: 'text',
};
