import _default from './default';
import accounts from './accounts';

export const defaultHd = _default;
export const accountsHd = accounts;

export default {
  ..._default,
  ...accounts,
};
