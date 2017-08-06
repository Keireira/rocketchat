import React from 'react';
import PropTypes from 'prop-types';
import locales from 'locales';
import AccountDetails from './AccountDetails';
import DepositDetails from './DepositDetails';
import Accounts from './Accounts';
import Deposits from './Deposits';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Tab, Tabs, Content, StyledSidebar } from './styles';

class Sidebar extends React.PureComponent {
  componentDidMount() {
    if (typeof this.props.getClientAccounts === 'function') {
      this.props.getClientAccounts(888);
    }
  };

  componentWillUnmount() {
    if (typeof this.props.clearClientAccounts === 'function') {
      this.props.clearClientAccounts();
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

  renderDeposits = () => {
    return <Deposits deposits={this.props.deposits} />;
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

  renderDepositDetails = () => {
    return <DepositDetails />;
  };

  render() {
    return (
      <StyledSidebar>
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

            <Redirect from="*" to="/" />
          </Switch>
        </Content>
      </StyledSidebar>
    );
  };
};

Sidebar.propTypes = {
  accounts: PropTypes.array,
  deposits: PropTypes.array,
  account: PropTypes.object,
};

Sidebar.defaultProps = {
  accounts: [],
  deposits: [],
  account: {},
};

export default Sidebar;
