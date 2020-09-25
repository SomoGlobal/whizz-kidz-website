import React from 'react';

import GridGallery from './grid-gallery.component';

const Template = (args) => <GridGallery {...args} />;

const images = [
  {
    url:
      'https://www.datocms-assets.com/32241/1600952106-sample-video-cover-image.png?ar=4%3A3&auto=format&fit=crop&h=300',
    alt: 'Challenge 75',
  },
  {
    url:
      'https://www.datocms-assets.com/32241/1600425341-screenshot-2020-09-18-at-11-34-59.png?ar=4%3A3&auto=format&fit=crop&h=300',
    alt: 'Kira at a whizz-kidz club',
  },
  {
    url:
      'https://www.datocms-assets.com/32241/1600249430-lexileadingthewayimage.jpg?ar=4%3A3&auto=format&fit=crop&h=300',
    alt: 'Lexian Porter',
  },
  {
    url:
      'https://www.datocms-assets.com/32241/1600263381-conor20182.jpeg?ar=4%3A3&auto=format&fit=crop&h=300',
    alt: 'Connor',
  },
  {
    url:
      'https://www.datocms-assets.com/32241/1598472019-youngpeoplesservices-1000x500.jpg?ar=4%3A3&auto=format&fit=crop&h=300',
    alt: 'Young People',
  },
  {
    url:
      'https://www.datocms-assets.com/32241/1598525542-aboutus-1000x500.jpg?ar=4%3A3&auto=format&fit=crop&h=300',
    alt: 'Whizz kidz having fun at an event',
  },
  {
    url:
      'https://www.datocms-assets.com/32241/1598525125-whizz-kidzimagecropped-1200x600.jpg?ar=4%3A3&auto=format&fit=crop&h=300',
    alt: 'Young people at an event',
  },
];

export default {
  title: 'Modules/GridGallery',
  component: GridGallery,
  args: {
    images,
  },
};

export const Story = Template.bind({});
Story.args = {};

export const Count2 = Template.bind({});
Count2.args = { images: images.slice(0, 2) };

export const Count3 = Template.bind({});
Count3.args = { images: images.slice(0, 3) };

export const Count4 = Template.bind({});
Count4.args = { images: images.slice(0, 4) };

export const Count5 = Template.bind({});
Count5.args = { images: images.slice(0, 5) };

export const Count6 = Template.bind({});
Count6.args = { images: images.slice(0, 6) };
