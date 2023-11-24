/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  async headers() {
    return [
      {
        source: "/api/auth/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "http://127.0.0.1:6006" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,POST" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  experimental: {
    newNextLinkBehavior: true,
    appDir: true,
  },
  output: "standalone",
  webpack: (config, options) => {
    config.resolve.fallback = { fs: false};
    config.experiments = { ...config.experiments, topLevelAwait: true };
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
};
