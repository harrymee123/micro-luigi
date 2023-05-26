const NextFederationPlugin = require("@module-federation/nextjs-mf");
module.exports = {
  basePath: "/luigi",
  future: { webpack5: true },
  images: {
    domains: ["upload.wikimedia.org"],
  },
  webpack: (config) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "luigiApp",
        library: {
          type: config.output.libraryTarget,
          name: "luigiApp",
        },
        filename: "static/runtime/remoteEntry.js",
        remotes: {
          marioApp: "marioApp",
        },
        exposes: {
          "./luigi": "./components/luigi",
        },
      })
    );
    config.cache = false;

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
