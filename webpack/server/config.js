const ip = require('ip');
const path = require('path');

const setup = require('../constants');
const devServerConfig = require('../main/devServer');
const webpackConfig = require('../../webpack.config');

const general = {
  externalIP: ip.address(),
};

const front = {
  host: setup.HOST,
  port: setup.PORT,
  webpackConfig,
  devServerConfig,
};

const api = {
  host: setup.HOST,
  port: setup.PORT + 1,
};

module.exports = { general, front, api };
