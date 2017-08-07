const config = require('./config');
const frontendServer = require('./wds');
const socketServer = require('./socket');
const expressServer = require('./express');
const clearConsole = require('react-dev-utils/clearConsole');

(({ front, api, general }) => {
  clearConsole();

  frontendServer({
    port: front.port,
    host: front.host,
    externalIP: general.externalIP,
    configs: {
      webpack: front.webpackConfig,
      wds: front.devServerConfig,
    },
  });

  const expressApp = expressServer({
    port: api.port,
  });

  socketServer({
    app: expressApp,
  });
})(config);
