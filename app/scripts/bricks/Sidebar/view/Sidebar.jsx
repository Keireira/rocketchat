import React from 'react';
import PropTypes from 'prop-types';
import locales from 'locales';
import Accounts from './Accounts';
import { Route } from 'react-router-dom';
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

  renderAccounts = () => {
    return (
      <Accounts accounts={this.props.accounts} />
    );
  };

  render() {
    return (
      <StyledSidebar>
        <Tabs>
          <Tab to="/chat/accounts">{locales.accounts}</Tab>
          <Tab to="/chat/deposits">{locales.deposits}</Tab>
        </Tabs>

        <Content>
          <Route path="/chat/accounts" render={this.renderAccounts} />
        </Content>
      </StyledSidebar>
    );
  };
};

Sidebar.propTypes = {
  accounts: PropTypes.array,
};

Sidebar.defaultProps = {
  accounts: [],
};

export default Sidebar;
