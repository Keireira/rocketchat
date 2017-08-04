const path = require('path');
const {
  showLocalIP,
  showExternalIP,
  colorizeString,
} = require('../tools/helpers');
const webpack = require('webpack');
const aliases = require('../aliases');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const clearConsole = require('react-dev-utils/clearConsole');
const WebpackLoggingPlugin = require('webpack-logging-plugin');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');

const dev = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(aliases.app, 'index.html'),
    inject: 'body',
  }),
  new WebpackLoggingPlugin({
    formatError: (err) => err,
    formatStats: (stats) => {
      clearConsole();
      const raw = stats.toJson({}, true);

      if (raw.errors.length) {
        console.log(colorizeString({
          lText: 'ERROR!\n',
          color: 'red',
        }));
      }

      if (raw.warnings.length) {
        console.log(colorizeString({
          lText: 'WARNINGS!\n',
          color: 'yellow',
        }));
      }

      return formatWebpackMessages(raw);
    },
    successCallback: () => {
      clearConsole();
      console.log(showExternalIP());
      console.log(showLocalIP());

      console.log(colorizeString({
        lText: '\nCompiled successful!',
        color: 'green',
      }));
    },
  }),
];

module.exports = dev;
