import React from 'react';
import VideoPlayer from './video-player.component';

const Template = (args) => <VideoPlayer {...args} />;

export default {
  title: 'Components/VideoPlayer',
  component: VideoPlayer,
  args: {
    coverImage: {
      responsiveImage: {
        srcSet:
          'https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&dpr=0.25&fit=crop&w=900 225w,https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&dpr=0.5&fit=crop&w=900 450w,https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&dpr=0.75&fit=crop&w=900 675w,https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&fit=crop&w=900 900w,https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&dpr=1.5&fit=crop&w=900 1350w,https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&dpr=2&fit=crop&w=900 1800w,https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&dpr=3&fit=crop&w=900 2700w,https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&dpr=4&fit=crop&w=900 3600w',
        webpSrcSet:
          'https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&dpr=0.25&fit=crop&fm=webp&w=900 225w,https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&dpr=0.5&fit=crop&fm=webp&w=900 450w,https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&dpr=0.75&fit=crop&fm=webp&w=900 675w,https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&fit=crop&fm=webp&w=900 900w,https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&dpr=1.5&fit=crop&fm=webp&w=900 1350w,https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&dpr=2&fit=crop&fm=webp&w=900 1800w,https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&dpr=3&fit=crop&fm=webp&w=900 2700w,https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&dpr=4&fit=crop&fm=webp&w=900 3600w',
        sizes: '(max-width: 900px) 100vw, 900px',
        src:
          'https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=16%3A9&auto=format&fit=crop&w=900',
        width: 900,
        height: 506,
        aspectRatio: 1.7777777777777777,
        alt: 'Lexian Porter',
        title: null,
        bgColor: '#67ab4f',
        base64:
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICAgRDQ0SFQ8PGg8WDhUNFhEaFxUZGB4aIh4mHysjHh4oHSEiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIigvLy87Ozs7LzsvOy8vLy8vLy87LzsvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA4AGAMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAEBgABBf/EABsQAAICAwEAAAAAAAAAAAAAAAECAAUEETFR/8QAFwEAAwEAAAAAAAAAAAAAAAAAAgMEAf/EABkRAQACAwAAAAAAAAAAAAAAAAEAAgQSIf/aAAwDAQACEQMRAD8AXnrh5CMeqUryGtownHOl5J8gG5A2Qitc0yshBEk27QhhyVH0ryaKk//Z',
      },
    },
    video: {
      url: 'https://www.youtube.com/watch?v=Xdng6YV-0vU',
      width: 480,
      title: 'Whizz-Kidz Challenge 75',
      thumbnailUrl: 'https://i.ytimg.com/vi/Xdng6YV-0vU/hqdefault.jpg',
      height: 270,
      provider: 'youtube',
      providerUid: 'Xdng6YV-0vU',
    },
  },
};

export const Story = Template.bind({});
Story.args = {};
