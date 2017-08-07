const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = new express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);
app.use('/api', routes);

const startServer = ({ port }) => {
  const server = app.listen(port);

  return {
    app,
    server,
  };
};

module.exports = startServer;
