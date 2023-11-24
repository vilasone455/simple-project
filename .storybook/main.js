module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-coverage",
    "@tomfreudenberg/next-auth-mock/storybook",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  docs: {
    autodocs: "tag",
  },

  webpackFinal: async (config) => {
    config.experiments = { topLevelAwait: true }
    config.module.rules.push({
      test: /\.(ts)x?$/,
      use: [
        {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            experimentalWatchApi: true,
            onlyCompileBundledFiles: true,
          },
        },
      ],
    });
    return config;
  },
  staticDirs: ['../public']
};
