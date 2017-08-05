const aliases = require('../aliases');
const consts = require('../constants');
const isDev = process.env.NODE_ENV === 'development';

// https://webpack.js.org/configuration/stats/
const stats = {
  assets: !isDev,
  cached: false,
  children: false,
  chunks: false,
  chunkModules: false,
  chunkOrigins: false,
  chunksSort: 'field',
  colors: true,
  errors: true,
  errorDetails: false,
  hash: false,
  modules: false,
  modulesSort: 'field',
  publicPath: false,
  reasons: false,
  source: false,
  noInfo: true,
  timings: false,
  version: !isDev,
  warnings: true,
};

// https://webpack.js.org/configuration/dev-server/#devserver-proxy
const proxy = {
  // For integration with https://github.com/typicode/json-server
  '/api': {
    target: `http://${consts.HOST}:${consts.PORT + 1}`,
  },
};

// https://webpack.js.org/configuration/dev-server/#devserver-headers-
const headers = {
  'Access-Control-Allow-Origin': '*'
};

const config = {
  contentBase: aliases.app,
  hot: true,
  inline: true,
  overlay: false,
  quiet: true,
  noInfo: true,
  stats: stats,
  compress: true,
  historyApiFallback: true,
  host: consts.HOST,
  port: consts.PORT,
  watchOptions: {
    aggregateTimeout: 200,
  },
  headers: headers,
  proxy: proxy,
};

module.exports = config;
