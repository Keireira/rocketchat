import React from 'react';
import PropTypes from 'prop-types';
import locales from 'locales';
import Accounts from './Accounts';
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

  render() {
    return (
      <StyledSidebar>
        <Tabs>
          <Tab isActive>{locales.accounts}</Tab>
          <Tab>{locales.deposits}</Tab>
        </Tabs>

        <Content>
          <Accounts accounts={this.props.accounts} />
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
