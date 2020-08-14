import React from 'react';
import Button from '../button';
import BorderedGrid from './bordered-grid.component';

export default {
  title: 'Modules/BorderedGrid',
  component: BorderedGrid,
};

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, architecto, deleniti doloribus ea hic impedit in iste minima natus, nihil numquam pariatur perspiciatis possimus quibusdam quidem repellat soluta vitae voluptates?';

export const Story = () => (
  <BorderedGrid
    heading={
      <>
        The <span className="bg-blue-900 text-white py-1 px-2">benefits</span>{' '}
        of providing mobility equipment
      </>
    }
    items={[
      { title: 'Independance', children: lorem, border: 'border-blue-500' },
      {
        title: 'More freedom for carers',
        children: lorem,
        border: 'border-purple-500',
      },
      {
        title: 'Less support required',
        children: lorem,
        border: 'border-pink-500',
      },
      {
        title: 'Reduction in costs',
        children: lorem,
        border: 'border-yellow-500',
      },
      {
        title: 'Savings for services',
        children: lorem,
        border: 'border-red-500',
      },
    ]}
  />
);

Story.story = {
  name: 'bordered grid',
};

export const CallToAction = () => (
  <BorderedGrid
    heading={
      <>
        The <span className="bg-blue-900 text-white py-1 px-2">Whizz-Kidz</span>{' '}
        effect
      </>
    }
    items={[
      {
        title: 'Transforming Tower Hamlets',
        children: <Button className="w-full">This is a CTA</Button>,
        border: 'border-yellow-500',
      },
      {
        title: 'Impact for Adults',
        children: <Button className="w-full">This is a CTA</Button>,
        border: 'border-indigo-500',
      },
      {
        title: 'Impact local NHS areas',
        children: <Button className="w-full">This is a CTA</Button>,
        border: 'border-blue-500',
      },
    ]}
  />
);
