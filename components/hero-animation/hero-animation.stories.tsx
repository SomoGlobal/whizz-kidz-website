import React from 'react';import HeroAnimation from './hero-animation.component';const Template = (args) => <HeroAnimation {...args} />;export default {  title: 'Components/HeroAnimation',  component: HeroAnimation,};export const Story = Template.bind({});Story.args = {};