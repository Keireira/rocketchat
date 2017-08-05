import { compose } from 'redux';
import { connect } from 'react-redux';

import selectors from 'selectors';
import { getClientAccounts, clearClientAccounts } from './gearbox/actions';

import View from 'bricks/Sidebar/view';

const makeMapStateToProps = () => {
  const getCurrentLocale = selectors.makeGetCurrentLocale();
  const getClientAccounts = selectors.makeGetClientAccounts();

  const mapStateToProps = (state) => ({
    locale: getCurrentLocale(state),
    accounts: getClientAccounts(state),
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
});

export default compose(
  connect(makeMapStateToProps, mapDispatchToProps),
)(View);
