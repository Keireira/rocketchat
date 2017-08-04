const entry = require('./entry');
const output = require('./output');
const devServer = require('./devServer');
const resolve = require('./resolve');

const main = { entry, output, devServer, resolve };

module.exports = main;
