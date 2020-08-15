import React from 'react';

import Article from './article.component';

const Template = (args) => <Article {...args} />;

export default {
  title: 'Modules/Article',
  component: Article,
  argTypes: {
    body: { control: 'text' },
  },
};

export const Story = Template.bind({});

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque doloremque eius, maxime quaerat quod temporibus. Dignissimos dolore eos exercitationem harum ipsa laudantium libero nobis quam repellat, repudiandae similique vel.';

Story.args = {
  body: `
  <p><h2>This is an H2</h2></p>
  <p>${lorem}</p>
  <p><img src="https://images.unsplash.com/photo-1597390520598-bba509e5c457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt="image" /></p>
  <p>${lorem}</p>
  <p><h3>This is an H3</h3></p>
  <p>${lorem}</p>
  <p><h4>This is an H4</h4></p>
  <p>${lorem}</p>
  <p><h5>This is an H5</h5></p>
  <p>${lorem}</p>
  <p><h6>This is an H6</h6></p>
  <p>${lorem}</p>
`,
};
