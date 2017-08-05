const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const startWDS = ({ port, host, externalIP, configs }) => {
  const frontDevServer = new webpackDevServer(
    webpack(configs.webpack),
    configs.wds
  );

  frontDevServer.listen(port, host);
  frontDevServer.listen(port, externalIP);
};

module.exports = startWDS;
