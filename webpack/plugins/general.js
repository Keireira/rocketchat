const webpack = require('webpack');
const CONSTS = require('../constants');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const general = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV.toLowerCase()),
    },
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: (module) => {
      return module.context && module.context.indexOf('node_modules') !== -1;
    },
    async: true,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
  }),
  new FaviconsWebpackPlugin({
    logo: CONSTS.favicon,
    inject: true,
    prefix: 'favicons-[hash:6]/',
    statsFilename: 'iconstats-[hash:6].json',
    background: CONSTS.background_color,
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: true,
      favicons: true,
      firefox: true,
      yandex: true,
      windows: true
    },
  }),
];

module.exports = general;
