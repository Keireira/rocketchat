const { random } = require('lodash');

const names = ['Алексей', 'Ирина', 'Владимир', 'Антон', 'Ксения', 'Мария', 'Ольга', 'Иван'];

const createClient = () => {
  const isClient = true;
  const userId = random(111, 999);
  const avatarUrl = 'https://unsplash.it/120/120';
  const displayName = names[random(0, names.length - 1)];

  return { userId, isClient, avatarUrl, displayName };
};

module.exports = {
  getInitClients: ({
    clients: new Array(random(2, 4)).fill(null).map(createClient),
  }),

  addNewClient: ({
    client: createClient(),
  }),
};
