import { compose } from 'redux';
import { connect } from 'react-redux';

import selectors from 'selectors';
import {
  getClientAccounts,
  clearClientAccounts,
  selectAccount,
  clearAccount,
} from './gearbox/actions';

import View from 'bricks/Sidebar/view';

const makeMapStateToProps = () => {
  const getCurrentLocale = selectors.makeGetCurrentLocale();
  const getClientAccounts = selectors.makeGetClientAccounts();
  const getAccountData = selectors.makeGetAccountData();

  const mapStateToProps = (state) => ({
    locale: getCurrentLocale(state),
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
});

export default compose(
  connect(makeMapStateToProps, mapDispatchToProps),
)(View);
