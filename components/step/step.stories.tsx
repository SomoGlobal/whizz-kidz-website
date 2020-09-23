import React from 'react';

import Step from './step.component';

const Template = (args) => <Step {...args} />;

export default {
  title: 'Components/Step',
  component: Step,
  args: {
    number: 1,
    header: 'This is the header',
    body: 'this is the body',
    link: undefined,
  },
};

export const Step1 = Template.bind({});
Step1.args = { number: 1 };

export const Step2 = Template.bind({});
Step2.args = { number: 2 };

export const Step3 = Template.bind({});
Step3.args = { number: 3 };

export const Step4 = Template.bind({});
Step4.args = { number: 4 };

export const Step5 = Template.bind({});
Step5.args = { number: 5 };

export const Step6 = Template.bind({});
Step6.args = { number: 6 };

export const Step7 = Template.bind({});
Step7.args = { number: 7 };
