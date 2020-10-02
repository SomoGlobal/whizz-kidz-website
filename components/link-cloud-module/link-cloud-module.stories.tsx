import React from 'react';

import LinkCloudModule from './link-cloud-module.component';

const Template = (args) => <LinkCloudModule {...args} />;

export default {
  title: 'Components/LinkCloudModule',
  component: LinkCloudModule,
  args: {
    items: [
      {
        name: 'North England',
        slug: 'north-england',
        _modelApiKey: 'region',
      },
      {
        name: 'London',
        slug: 'london',
        _modelApiKey: 'region',
      },
      {
        name: 'South England',
        slug: 'south-england',
        _modelApiKey: 'region',
      },
      {
        name: 'Scotland',
        slug: 'scotland',
        _modelApiKey: 'region',
      },
      {
        name: 'Wales',
        slug: 'wales',
        _modelApiKey: 'region',
      },
    ],
  },
};

export const Story = Template.bind({});
Story.args = {};
