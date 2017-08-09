import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

import locales from 'locales';

import Accounts from './Accounts';
import Deposits from './Deposits';
import AccountDetails from './AccountDetails';
import DepositDetails from './DepositDetails';
import { Tab, Tabs, Content, StyledSidebar, ContentWrapper } from './styles';

class Sidebar extends React.PureComponent {
  componentDidMount() {
    if (typeof this.props.getAccountsList === 'function') {
      this.props.getAccountsList(888);
    }
  };

  componentWillUnmount() {
    if (typeof this.props.clearAccountsList === 'function') {
      this.props.clearAccountsList();
    }
  };

  renderAccounts = ({ match }) => {
    return (
      <Accounts
        selectAccount={this.props.selectAccount}
        accounts={this.props.accounts}
        match={match}
      />
    );
  };

  renderAccountDetails = ({ match }) => {
    return (
      <AccountDetails
        getAccountData={this.props.getAccountData}
        clearAccount={this.props.clearAccount}
        accountData={this.props.account}
        match={match}
      />
    );
  };

  renderDeposits = ({ match }) => {
    return (
      <Deposits
        deposits={this.props.deposits}
        match={match}
      />
    );
  };

  renderDepositDetails = ({ match }) => {
    return (
      <DepositDetails
        deposit={this.props.deposit}
        match={match}
      />
    );
  };

  render() {
    return (
      <StyledSidebar>
        <ContentWrapper>
          <Tabs>
            <Tab to="/chat/accounts/">{locales.accounts}</Tab>
            <Tab to="/chat/deposits/">{locales.deposits}</Tab>
          </Tabs>

          <Content>
            <Switch>
              <Route path="/chat/accounts/:productId" render={this.renderAccountDetails} />
              <Route path="/chat/accounts/" render={this.renderAccounts} />

              <Route path="/chat/deposits/:productId" render={this.renderDepositDetails} />
              <Route path="/chat/deposits/" render={this.renderDeposits} />

              <Redirect from="*" to="/chat/" />
            </Switch>
          </Content>
        </ContentWrapper>
      </StyledSidebar>
    );
  };
};

Sidebar.propTypes = {
  accounts: PropTypes.array,
  deposits: PropTypes.array,
  account: PropTypes.object,
  deposit: PropTypes.object,
  selectAccount: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  accounts: [],
  deposits: [],
  account: {},
  deposit: {},
};

export default Sidebar;
