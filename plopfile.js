module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'app component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{kebabCase name}}/index.ts',
        templateFile: '.scripts/plop-templates/component/index.hbs',
      },
      {
        type: 'add',
        path: 'components/{{kebabCase name}}/{{kebabCase name}}.component.tsx',
        templateFile: '.scripts/plop-templates/component/component.hbs',
      },
      {
        type: 'add',
        path: 'components/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: '.scripts/plop-templates/component/story.hbs',
      },
    ],
  });
};
