const { random } = require('lodash');
const operationTypes = [
  {
    name: 'top_up',
    positive: true,
  },
  {
    name: 'percent',
    positive: true,
  },
  {
    name: 'charge_off',
    positive: false,
  }
];

const makeStubs = () => {
  const generate = () => {
    const created = random(1500000000, 1505555555);

    // last operation
    const carried_out = random(created, created + random(20000, 333333));
    const last_cart_number = random(1111, 9999);
    const amount = random(10.00, 20000.99).toFixed(2);
    const type = operationTypes[random(0, 2)];

    return {
      amount: parseFloat(amount),
      carried_out: parseInt(carried_out),
      last_cart_number: parseInt(last_cart_number),
      positive: type.positive,
      type: type.name,
    };
  };

  const length = random(10, 50);
  const data = new Array(length).fill(null);

  return data.map(generate);
};

const account = (res, { client_id, product_id }) => {
  if (isNaN(client_id) || isNaN(product_id)) {
    return res.json({
      error: 'Invalid field value',
    });
  }

  return res.json({
    account: makeStubs(),
  });
};

module.exports = account;
