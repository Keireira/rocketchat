const CONSTS = require('../../constants');
const colorizeString = require('./colorizeString');

const showLocalIP = (ip = CONSTS.HOST, port = CONSTS.PORT) => {
  const localIP = `http://${ip}:${port}`;

  return colorizeString({
    lText: 'Local server:',
    rText: localIP,
  });
};

module.exports = showLocalIP;
