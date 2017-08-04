const path = require('path');

const output = {
  path: path.join(__dirname, '../../build'),
  filename: '[name].[hash:10].js',
  publicPath: '/',
  chunkFilename: '[name].route.[hash:10].js',
};

module.exports = output;
