const config = require('./config');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

// Setting up webpack dev server
const frontDevServer = new webpackDevServer(
  webpack(config.front.webpackConfig),
  config.front.devServerConfig
);

module.exports = frontDevServer;
