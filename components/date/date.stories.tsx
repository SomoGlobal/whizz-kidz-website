import React from 'react';

import Date from './date.component';

export default {
  title: 'Components/Date',
  component: Date
};

export const Story = () => <Date dateString="2020-08-05T07:56:24.214Z" />;

Story.storyName = 'date';
