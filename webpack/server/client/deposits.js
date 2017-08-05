const stubs = [

];

const deposits = (res, { client_id }) => {
  if (isNaN(client_id) || client_id === -666) {
    return res.json({
      error: 'Invalid field value (client_id)',
    });
  }

  return res.json({
    deposits: stubs,
  });
};

module.exports = deposits;
