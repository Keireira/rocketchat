const stubs = [
  {
    balance: 43563.75,
    currency: '₽',
    number: 57890456,
    annual: 8.5,
    created: 1501763532,
    history: [{
      type: 'top_up',
      amount: 3500.00,
      positive: true,
      last_cart_number: 5682,
      carried_out: 1504763532,
    }],
  }
];

const accounts = (res, { client_id }) => {
  if (isNaN(client_id) || client_id === -666) {
    return res.json({
      error: 'Invalid field value (client_id)',
    });
  }

  return res.json({
    accounts: stubs,
  });
};

module.exports = accounts;
