const aliases = require('../aliases');

const fonts = [
  {
    test: /\.(ttf|eot|svg|otf|woff(2)?)(\?[a-z0-9=&.]+)?$/i,
    include: aliases.fonts,
    loader: 'file-loader',
    query: {
      digest: 'hex',
      name: 'assets/fonts/[name]-[sha512:hash:base64:6].[ext]',
    },
  }
];

module.exports = fonts;
