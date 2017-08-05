const account = require('./account');
const accounts = require('./accounts');
const deposits = require('./deposits');

const client = (req, res, next) => {
  const { client_id, product_id } = req.body;

  switch (req.params.type) {
    case 'account': return account(res, {
      client_id: parseInt(client_id),
      product_id: parseInt(product_id),
    });

    case 'accounts': return accounts(res, {
      client_id: parseInt(client_id),
    });

    case 'deposits': return deposits(res, {
      client_id: parseInt(client_id),
    });

    default: return res.status(404).send(`Wrong route params.`);
  }
};

module.exports = client;
