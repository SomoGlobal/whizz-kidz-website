import cx from 'classnames';
import React from 'react';
import { brands } from '../lib/brand-context';

const Mark: React.FC<{ brand: string }> = ({ brand }) => (
  <span
    className={cx(
      'px-2 py-1 clone text-white text-6xl font-bold tracking-tight',
      brands[brand].backgroundColor
    )}
  >
    {brand}
  </span>
);

const Template = (args) => <Mark {...args} />;

export default {
  title: 'Design/Colors',
  component: Template,
  argTypes: {
    brand: {
      control: {
        type: 'inline-radio',
        options: [
          'home',
          'kidz',
          'families',
          'supporters',
          'charity',
          'discover',
        ],
      },
    },
  },
};

export const Home = Template.bind({});
Home.args = { brand: 'home' };

export const Kidz = Template.bind({});
Kidz.args = { brand: 'kidz' };

export const Families = Template.bind({});
Families.args = { brand: 'families' };

export const Supporters = Template.bind({});
Supporters.args = { brand: 'supporters' };

export const Charity = Template.bind({});
Charity.args = { brand: 'charity' };

export const Discover = Template.bind({});
Discover.args = { brand: 'discover' };
