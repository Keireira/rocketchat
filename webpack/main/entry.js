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
  'prop-types',
  'react',
  'react-dom',
  'react-helmet',
  'react-redux',
  'react-localization',
  'react-router-dom',
  'react-router-redux',
  'redux',
  'redux-act',
  'redux-saga',
  'reselect',
  'recompose',
  'styled-components',
  'uuid'
);

module.exports = entry;
