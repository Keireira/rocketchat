const { random } = require('lodash');
const currencySymbols = ['₽', '$', '€'];
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
    const annual = random(0.5, 15).toFixed(2);
    const balance = random(100.00, 300000.99).toFixed(2);
    const created = random(1500000000, 1505555555);
    const number = random(57890000, 57899999);
    const currency = currencySymbols[random(0, 2)];

    // last operation
    const carried_out = random(created, created + random(20000, 333333));
    const last_cart_number = random(1111, 9999);
    const amount = random(10, 20000).toFixed(2);
    const type = operationTypes[random(0, 2)];

    return {
      balance: parseFloat(balance),
      created: parseInt(created),
      annual: parseFloat(annual),
      number: parseInt(number),
      currency,
      last_operation: {
        amount: parseFloat(amount),
        carried_out: parseInt(carried_out),
        last_cart_number: parseInt(last_cart_number),
        positive: type.positive,
        type: type.name,
      },
    };
  };

  const length = random(1, 10);
  const data = new Array(length).fill(null);

  return data.map(generate);
};

const accounts = (res, { client_id }) => {
  if (isNaN(client_id) || client_id === -666) {
    return res.json({
      error: 'Invalid field value (client_id)',
    });
  }

  return res.json({
    accounts: makeStubs(),
  });
};

module.exports = accounts;
