import React from 'react';

import ImageWithText from './image-with-text.component';

const Template = (args) => <ImageWithText {...args} />;

export default {
  title: 'Modules/ImageWithText',
  component: ImageWithText,
};

export const Story = Template.bind({});

const responsiveImage = {
  srcSet:
    'https://www.datocms-assets.com/32241/1583844698-gift-habeshaw-pgxxjrtfnjq-unsplash-edited.png?auto=format&dpr=0.25&fit=crop&h=300&w=300 75w,https://www.datocms-assets.com/32241/1583844698-gift-habeshaw-pgxxjrtfnjq-unsplash-edited.png?auto=format&dpr=0.5&fit=crop&h=300&w=300 150w,https://www.datocms-assets.com/32241/1583844698-gift-habeshaw-pgxxjrtfnjq-unsplash-edited.png?auto=format&dpr=0.75&fit=crop&h=300&w=300 225w,https://www.datocms-assets.com/32241/1583844698-gift-habeshaw-pgxxjrtfnjq-unsplash-edited.png?auto=format&fit=crop&h=300&w=300 300w,https://www.datocms-assets.com/32241/1583844698-gift-habeshaw-pgxxjrtfnjq-unsplash-edited.png?auto=format&dpr=1.5&fit=crop&h=300&w=300 450w,https://www.datocms-assets.com/32241/1583844698-gift-habeshaw-pgxxjrtfnjq-unsplash-edited.png?auto=format&dpr=2&fit=crop&h=300&w=300 600w,https://www.datocms-assets.com/32241/1583844698-gift-habeshaw-pgxxjrtfnjq-unsplash-edited.png?auto=format&dpr=3&fit=crop&h=300&w=300 900w,https://www.datocms-assets.com/32241/1583844698-gift-habeshaw-pgxxjrtfnjq-unsplash-edited.png?auto=format&dpr=4&fit=crop&h=300&w=300 1200w',
  sizes: '(max-width: 300px) 100vw, 300px',
  src:
    'https://www.datocms-assets.com/32241/1583844698-gift-habeshaw-pgxxjrtfnjq-unsplash-edited.png?auto=format&fit=crop&h=300&w=300',
  width: 300,
  height: 300,
  aspectRatio: 1,
  alt: null,
  title: null,
  bgColor: '#0491b2',
  base64:
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICBELERULDg8VDg0NDxUOFhEPFxgrGRYfFiEaHysjJh0oKRcWJDUxKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OHBAQHDslIig7Ozs7NTs7Ly81Lzw7Ozs7Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy81Ly8vLy8vLy8vL//AABEIABgAGAMBIgACEQEDEQH/xAAaAAACAgMAAAAAAAAAAAAAAAAABQEHAwQG/8QAHxAAAgEEAgMAAAAAAAAAAAAAAAEDAgQFEVFxEiFB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAbEQEAAgMBAQAAAAAAAAAAAAABAAIREiETA//aAAwDAQACEQMRAD8Ap1LdQ/sIW4kJKqfCVHT41JwroNztH4kUZdOOjtgbGfibjTXxgKNoCA8ii79NMe4m43Et8EAM1G8mtdr8xJmv0pVokAH1JB6WXM//2Q==',
};

Story.args = {
  eyebrow: 'eyebrow',
  heading: 'Heading',
  text: 'text',
  image: { responsiveImage },
};
