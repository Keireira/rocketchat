const dev = require('./dev');
const build = require('./build');
const general = require('./general');
const NODE_ENV = process.env.NODE_ENV.toLowerCase();

const plugins = [general];

if (NODE_ENV === 'development') {
  plugins.push(dev);
} else {
  plugins.push(build);
}

module.exports = plugins;
