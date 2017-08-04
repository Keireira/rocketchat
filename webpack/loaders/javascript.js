const aliases = require('../aliases');
const eslintFormatter = require('react-dev-utils/eslintFormatter');

const javascript = [
  {
    test: /\.(js|jsx)$/i,
    enforce: 'pre',
    exclude: /(node_modules|bower_components)/,
    include: [aliases.scripts, aliases.styles, aliases.locales],
    use: {
      loader: 'eslint-loader',
      options: {
        fix: false,
        cache: false,
        failOnWarning: false,
        failOnError: false,
        formatter: eslintFormatter,
      },
    },
  },
  {
    test: /\.(js|jsx)$/i,
    exclude: /(node_modules|bower_components)/,
    include: [aliases.scripts, aliases.styles, aliases.locales],
    use: ['babel-loader'],
  },
];

module.exports = javascript;
