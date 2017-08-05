const path = require('path');
const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');

const { port } = config.api;

const app = new express();
const router = express.Router();
app.use('/api', router);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.json({ message: 'test' });
});

const startServer = () => {
  app.listen(port);
  console.log('Magic happens on port ' + port);
};

module.exports = startServer;
