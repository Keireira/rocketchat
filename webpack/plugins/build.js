const path = require('path');
const webpack = require('webpack');
const aliases = require('../aliases');
const CONSTS = require('../constants');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const build = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    comments: false,
    sourceMap: false,
  }),
  new HtmlWebpackPlugin({
    minify: {
      removeComments: true,
      sortAttributes: true,
      useShortDoctype: true,
      collapseWhitespace: true,
      conservativeCollapse: true,
    },
    filename: 'index.html',
    template: path.join(aliases.app, 'index.html'),
    inject: 'body',
  }),
  new CompressionPlugin({
    asset: '/gzip/[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$/i,
    threshold: 0,
    minRatio: 1,
  }),
  new ManifestPlugin({
    fileName: 'manifest.json',
  }),
];

module.exports = build;
