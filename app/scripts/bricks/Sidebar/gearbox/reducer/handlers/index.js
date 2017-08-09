import _default from './default';
import accounts from './accounts';
import deposits from './deposits';

export const defaultHd = _default;
export const accountsHd = accounts;
export const depositsHd = deposits;

export default {
  ..._default,
  ...accounts,
  ...deposits,
};
