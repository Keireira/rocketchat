const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = new express();
const router = express.Router();
app.use('/api', router);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
  res.json({ message: 'test' });
});

const startServer = ({ port }) => {
  app.listen(port);
};

module.exports = startServer;
