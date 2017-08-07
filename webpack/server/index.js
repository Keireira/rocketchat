const WDS = require('./wds');
const config = require('./config');
const socketServer = require('./sockets');
const expressServer = require('./express');
const clearConsole = require('react-dev-utils/clearConsole');

(({ api, front, general }) => {
  clearConsole();

  WDS({
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
