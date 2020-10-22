import React from 'react';

import LargeImageHero from './large-image-hero.component';

const Template = (args) => <LargeImageHero {...args} />;

export default {
  title: 'Components/LargeImageHero',
  component: LargeImageHero,
  args: {
    title: 'Whizz‑Kidz',
    subtitle:
      'Since 1990 we’ve transformed the lives of young wheelchair users.',
    image: {
      alt: 'hero',
      url:
        'https://www.datocms-assets.com/32241/1598525542-aboutus-1000x500.jpg?ar=2%3A1&fit=crop&fm=jpg&w=1280',
    },
  },
};

export const Story = Template.bind({});
