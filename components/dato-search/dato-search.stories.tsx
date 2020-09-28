import React from 'react';

import DatoSearch from './dato-search.component';

const Template = (args) => <DatoSearch {...args} />;

export default {
  title: 'Components/DatoSearch',
  component: DatoSearch,
  args: {
    apiToken: '2a7b52b9118bf254d3a1d30398e71a',
  },
};

export const Story = Template.bind({});
Story.args = {};
