const ip = require('ip');
const CONSTS = require('../../constants');
const colorizeString = require('./colorizeString');

const showExternalIP = (port = CONSTS.PORT) => {
  const externalIP = `http://${ip.address()}:${port}`;

  return colorizeString({
    lText: 'External IP:',
    rText: externalIP,
  });
};

module.exports = showExternalIP;
