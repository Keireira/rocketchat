const { random } = require('lodash');
const currencySymbols = ['₽', '$', '€'];

const createDeposit = () => {
  const balance = random(100.00, 30000.99);
  const percent = random(1.00, 10.99);

  return {
    balance: parseFloat(balance.toFixed(2)),
    percent: parseFloat(percent.toFixed(2)),
    interestMonth: parseFloat((balance * percent / 100).toFixed(2)),
    period: 24,
    passed: 6,
    number: random(1111111, 9999999),
    currency: currencySymbols[random(0, 2)],
  };
};

const makeDepositsStub = () => {
  const length = random(3, 10);
  const data = new Array(length).fill(null);

  return data.map(createDeposit);
};

const deposits = (res, { client_id }) => {
  if (isNaN(client_id) || client_id === -666) {
    return res.json({
      error: 'Invalid field value (client_id)',
    });
  }

  return res.json({
    deposits: makeDepositsStub(),
  });
};

module.exports = deposits;
