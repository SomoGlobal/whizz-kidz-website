const path = require('path');

module.exports = {
  stories: [
    '../../components/**/*.stories.tsx'
  ],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, './tsconfig.json'),
        },
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
  ],
  webpackFinal: async config => {
    config.module.rules = config.module.rules.filter(
      f => f.test.toString() !== '/\\.css$/'
    );

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.css$/,
      loaders: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: { auto: true },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.resolve(__dirname, './postcss.config.js')
            }
          }
        }],
      include: path.resolve(__dirname, '../../'),
    });

    return config;
  },
};
