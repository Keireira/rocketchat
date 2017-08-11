import { compose } from 'redux';
import { connect } from 'react-redux';

import selectors from 'selectors';
import { sidebarAct } from 'actions';
import { sendOperationToChat, clearSelectedOperation } from 'actions/chat';

import View from 'bricks/Sidebar/view';

const makeMapStateToProps = () => {
  const getAccountData = selectors.makeGetAccountData();
  const getAccountsList = selectors.makegetAccountsList();

  const getSelectedDeposit = selectors.makeGetSelectedDeposit();
  const getDepositsList = selectors.makeGetDepositsList();

  const mapStateToProps = (state) => ({
    account: getAccountData(state),
    accounts: getAccountsList(state),

    deposit: getSelectedDeposit(state),
    deposits: getDepositsList(state),
  });

  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => {
  const {
    clearAccountsList,
    getAccountsList,
    getAccountData,
    selectAccount,
    clearAccount,

    getDepositsList,
    clearDepositsList,
    getDepositData,
    selectDeposit,
    clearDeposit,
  } = sidebarAct;

  return {
    getAccountsList(clientId) {
      dispatch(getAccountsList['INIT'](clientId));
    },
    clearAccountsList() {
      dispatch(clearAccountsList['START']());
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

    getDepositsList(clientId) {
      dispatch(getDepositsList['INIT'](clientId));
    },
    clearDepositsList() {
      dispatch(clearDepositsList['START']());
    },

    selectDeposit(depositData) {
      dispatch(selectDeposit['START'](depositData));
    },
    getDepositData({ clientId, productId, getDeposit }) {
      dispatch(getDepositData['INIT'](clientId, productId, getDeposit));
    },
    clearDeposit() {
      dispatch(clearDeposit['START']());
    },

    sendOperationToChat(operation) {
      dispatch(sendOperationToChat['START'](operation));
    },
    clearSelectedOperation() {
      dispatch(clearSelectedOperation['START']());
    },
  };
};

export default compose(
  connect(makeMapStateToProps, mapDispatchToProps),
)(View);
