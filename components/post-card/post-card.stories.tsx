import React from 'react';

import PostCard from './post-card.component';

const Template = (args) => <PostCard {...args} />;

export default {
  title: 'Components/PostCard',
  component: PostCard,
  args: {
    title: "Why I'm watching Netflix's Raising Dion",
    linkProps: { href: '/' },
    hasVideo: true,
    topic: {
      slug: 'slug',
      name: 'Topic Name',
    },
    image: {
      responsiveImage: {
        srcSet:
          'https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&dpr=0.25&fit=crop&fm=jpg&w=400 100w,https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&dpr=0.5&fit=crop&fm=jpg&w=400 200w,https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&dpr=0.75&fit=crop&fm=jpg&w=400 300w,https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&fit=crop&fm=jpg&w=400 400w,https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&dpr=1.5&fit=crop&fm=jpg&w=400 600w,https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&dpr=2&fit=crop&fm=jpg&w=400 800w,https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&dpr=3&fit=crop&fm=jpg&w=400 1200w',
        webpSrcSet:
          'https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&dpr=0.25&fit=crop&fm=webp&w=400 100w,https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&dpr=0.5&fit=crop&fm=webp&w=400 200w,https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&dpr=0.75&fit=crop&fm=webp&w=400 300w,https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&fit=crop&fm=webp&w=400 400w,https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&dpr=1.5&fit=crop&fm=webp&w=400 600w,https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&dpr=2&fit=crop&fm=webp&w=400 800w,https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&dpr=3&fit=crop&fm=webp&w=400 1200w',
        sizes: '(max-width: 400px) 100vw, 400px',
        src:
          'https://www.datocms-assets.com/32241/1600249530-raising-dion-esperanza-dion.jpg?ar=16%3A9&fit=crop&fm=jpg&w=400',
        width: 400,
        height: 225,
        aspectRatio: 1.7777777777777777,
        alt: 'Raising Dion, Dion and Esperanza',
        title: null,
        bgColor: '#0676ba',
        base64:
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgLFhILDhYUDgoNERUNFhEYFxUaGBYVFhUdHysjGh0oHRUiJDUlKC0vMjIyHSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7OzsvOy8vLy8vNS87LzUvLy81Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA0AGAMBIgACEQEDEQH/xAAaAAAABwAAAAAAAAAAAAAAAAAAAQIDBAUG/8QAGxAAAgMBAQEAAAAAAAAAAAAAAQIAAyEREgT/xAAWAQEBAQAAAAAAAAAAAAAAAAADAgH/xAAbEQABBAMAAAAAAAAAAAAAAAAAAQIDERITIv/aAAwDAQACEQMRAD8Aw9/zeVwRimpi2iW5UONiBSqnIjoEzB28hVU8WCS6gOQTHQpZTZLQ/9k=',
      },
    },
    publishedAt: new Date('1995-12-17T03:24:00').toISOString(),
  },
};

export const Story = Template.bind({});
Story.args = {};
