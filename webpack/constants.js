const path = require('path');
const aliases = require('./aliases');

module.exports = {
  HOST: '0.0.0.0',
  PORT: 9000,
  favicon: path.join(aliases.files, '/favicon.png'),
  background_color: '#de7a1c',
};
