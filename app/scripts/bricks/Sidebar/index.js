import { compose } from 'redux';
import { connect } from 'react-redux';

import selectors from 'selectors';
import {
  clearClientAccounts,
  getClientAccounts,
  getAccountData,
  selectAccount,
  clearAccount,
} from './gearbox/actions';

import View from 'bricks/Sidebar/view';

const makeMapStateToProps = () => {
  const getClientAccounts = selectors.makeGetClientAccounts();
  const getAccountData = selectors.makeGetAccountData();

  const mapStateToProps = (state) => ({
    accounts: getClientAccounts(state),
    account: getAccountData(state),
  });

  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => ({
  getClientAccounts(clientId) {
    dispatch(getClientAccounts['INIT'](clientId));
  },
  clearClientAccounts() {
    dispatch(clearClientAccounts['START']());
  },
  selectAccount(accountData) {
    dispatch(selectAccount['START'](accountData));
  },
  clearAccount() {
    dispatch(clearAccount['START']());
  },
  getAccountData({ clientId, productId, getAccount }) {
    dispatch(getAccountData['INIT'](clientId, productId, getAccount));
  },
});

export default compose(
  connect(makeMapStateToProps, mapDispatchToProps),
)(View);
