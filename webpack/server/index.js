const config = require('./config');
const frontDevServer = require('./wds');
const expressServer = require('./express');
const clearConsole = require('react-dev-utils/clearConsole');
const { showLocalIP, showExternalIP } = require('../tools/helpers');

(() => {
  clearConsole();
  console.log(showExternalIP(config.front.port));

  // Front-End server running
  frontDevServer.listen(config.front.port, config.front.host, () => {
  	console.log(showLocalIP(config.front.host, config.front.port) + '\n');
  });
  frontDevServer.listen(config.front.port, config.general.externalIP);

  expressServer();
})();
