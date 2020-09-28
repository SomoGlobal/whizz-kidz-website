import React from 'react';

import PostHeader from './post-header.component';

const Template = (args) => <PostHeader {...args} />;

export default {
  title: 'Components/PostHeader',
  component: PostHeader,
  args: {
    topic: { name: 'Kidz', slug: 'slug' },
    share: {
      url: `http://www.whizz-kidz.org.uk/discover/post/text`,
      title: "Why I'm watching Netflix's Raising Dion",
    },
    author: {
      name: 'Joe Blogs',
      picture: {
        url: 'https://randomuser.me/api/portraits/women/89.jpg',
      },
    },
    publishedAt: new Date('1995-12-17T03:24:00').toISOString(),
    title: "Why I'm watching Netflix's Raising Dion",
    summary:
      "Kidz board member Lexi recently started watching Netflix's new superhero show 'Raising Dion'. In this blog, she tells us why she likes the series which incorporates representation in a variety of ways, from featuring a majority black cast to casting Sammi Haney, a young wheelchair user. Lexi sent some questions to Sammi and she got back to us with a answer video ",
  },
};

export const Story = Template.bind({});
