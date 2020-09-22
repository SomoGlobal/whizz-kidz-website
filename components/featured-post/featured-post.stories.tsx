import React from 'react';

import FeaturedPost from './featured-post.component';

const Template = (args) => <FeaturedPost {...args} />;

export default {
  title: 'Components/FeaturedPost',
  component: FeaturedPost,
  args: {
    topic: {
      name: 'General Topic',
      slug: 'general-topic',
    },
    publishedAt: new Date('1995-12-17T03:24:00').toISOString(),
    title:
      'Example title here looks like this sometimes can be anything just try it',
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
  },
};

export const Story = Template.bind({});
Story.args = {};
