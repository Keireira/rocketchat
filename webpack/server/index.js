// Required libraries
const ip = require('ip');
const path = require('path');
const webpack = require('webpack');
const jsonServer = require('json-server');
const webpackDevServer = require('webpack-dev-server');
const clearConsole = require('react-dev-utils/clearConsole');
const { showLocalIP, showExternalIP } = require('../tools/helpers');

// Constants for servers
const CONSTS = require(path.join(__dirname, '../constants'));

// Configuration object
const config = {
  externalIP: ip.address(),
  front: {
    port: CONSTS.PORT,
    host: CONSTS.HOST,
    webpack: require(path.join(__dirname, '../../webpack.config.js')),
    devServer: require(path.join(__dirname, '../main/devServer')),
  },
  api: {
    port: CONSTS.PORT + 1,
    host: CONSTS.HOST,
    router: jsonServer.router(path.join(__dirname, '/stubs.json')),
    middlewares: jsonServer.defaults(),
  },
};

// Setting up webpack dev server
const frontDevServer = new webpackDevServer(
  webpack(config.front.webpack),
  config.front.devServer
);

// Setting up API server
const apiServer = jsonServer.create();
apiServer.use(config.api.middlewares);
apiServer.use(config.api.router);

// Clear console
clearConsole();

console.log(showExternalIP(config.front.port));

// Front-End server running
frontDevServer.listen(config.front.port, config.front.host, () => {
	console.log(showLocalIP(config.front.host, config.front.port) + '\n');
});
frontDevServer.listen(config.front.port, config.externalIP);

// API server running
apiServer.listen(config.api.port, config.api.host);
