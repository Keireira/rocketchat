const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const client = require('./client');

const app = new express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

router.route('/client/:type')
  .post((req, res, next) => client(req, res, next));

const startServer = ({ port }) => {
  app.listen(port);

  return app;
};

module.exports = startServer;
