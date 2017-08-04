const path = require('path');
const main = require(path.join(__dirname, '/webpack/main'));
const loaders = require(path.join(__dirname, '/webpack/loaders'));
const plugins = require(path.join(__dirname, '/webpack/plugins'));

const configuration = (() => {
  const config = {
    entry: main.entry,
    output: main.output,
    devServer: main.devServer,
    resolve: main.resolve,
    module: {
      rules: []
    },
    plugins: [],
  };

  loaders.forEach((loader) => {
    loader.forEach((item) => {
      config.module.rules.push(item);
    });
  });

  plugins.forEach((plugin) => {
    plugin.forEach((item) => {
      config.plugins.push(item);
    });
  });

  return config;
})();

module.exports = configuration;
