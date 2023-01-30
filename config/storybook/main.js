const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
      '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
      '@storybook/addon-links',
      {
        name: '@storybook/addon-essentials',
        options: {
          backgrounds: false,
        }
      },
      '@storybook/addon-interactions',
      'storybook-addon-mock/register',
      'storybook-addon-themes'  
  ],
  framework: '@storybook/react',
  core: {
      builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
};
