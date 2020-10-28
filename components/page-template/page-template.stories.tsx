import React from 'react';
import responsiveImage from '../text-with-image/lib/default-story-args';
import PageTemplate from './page-template.component';

const Template = (args) => <PageTemplate {...args} />;

export default {
  title: 'Components/PageTemplate',
  component: PageTemplate,
};

export const Story = Template.bind({});
Story.args = {
  image: { responsiveImage },
  body: 'text text text',
};
