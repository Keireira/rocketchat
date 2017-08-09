import axios from 'axios';
import io from 'socket.io-client';

const SocketURL = `${window.location.protocol}//${window.location.hostname}:${9001}`;
export const socket = (url = SocketURL) => io.connect(url);

export const getAccountsList = (clientId = -1) => {
  return axios.post('/api/client/accounts', {
    client_id: clientId,
  });
};

export const getAccount = ({ clientId = -1, productId = -1, getAccount = false }) => {
  return axios.post('/api/client/account', {
    client_id: clientId,
    product_id: productId,
    get_account: getAccount,
  });
};

export const getDepositsList = (clientId = -1) => {
  return axios.post('/api/client/deposits', {
    client_id: clientId,
  });
};

export const getDeposit = ({ clientId = -1, productId = -1, getDeposit = false }) => {
  return axios.post('/api/client/deposit', {
    client_id: clientId,
    product_id: productId,
    get_deposit: getDeposit,
  });
};

export default {
  getAccountsList,
  getAccount,
  getDepositsList,
  getDeposit,
  socket,
};
