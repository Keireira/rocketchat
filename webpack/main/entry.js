const aliases = require('../aliases');
const consts = require('../constants');
const NODE_ENV = process.env.NODE_ENV.toLowerCase();

const entry = {
  vendor: [],
  main: [
    'babel-polyfill',
  ],
};

if (NODE_ENV === 'development') {
  entry.main.push(
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${consts.HOST}:${consts.PORT}`,
    'react-dev-utils/webpackHotDevClient',
    'webpack/hot/dev-server'
  );
}

entry.main.push(
  aliases.entryPoint
);

entry.vendor.push(
  'react',
  'redux',
  'reselect',
  'redux-act',
  'react-dom',
  'prop-types',
  'redux-saga',
  'react-redux',
  'react-helmet',
  'react-router-dom',
  'socket.io-client',
  'styled-components',
  'react-localization',
  'react-router-redux'
);

module.exports = entry;
