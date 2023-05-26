const { withModuleFederation } = require("@module-federation/nextjs-mf");
module.exports = {
  basePath: "/luigi",
  future: { webpack5: true },
  images: {
    domains: ["upload.wikimedia.org"],
  },
  webpack: (config, options) => {
    const { isServer } = options;
    const mfConf = {
      mergeRuntime: true, //experimental
      name: "marioApp",
      library: {
        type: config.output.libraryTarget,
        name: "marioApp",
      },
      filename: "static/runtime/remoteEntry.js",
      remotes: {
        luigiApp: "luigiApp",
      },
      exposes: {
        "./luigi": "./components/luigi",
      },
    };
    config.cache = false;
    withModuleFederation(config, options, mfConf);

    return config;
  },

  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
};
