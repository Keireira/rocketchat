import axios from 'axios';

export const getClientAccounts = (clientId = -1) => {
  return axios.post('/api/client/accounts', {
    client_id: clientId,
  });
};

export default {
  getClientAccounts,
};
