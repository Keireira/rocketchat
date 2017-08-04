import React from 'react';
import PropTypes from 'prop-types';
import locales from 'locales';
import Accounts from './Accounts';
import { Tab, Tabs, Content, StyledSidebar } from './styles';

const Sidebar = (props) => {
  return (
    <StyledSidebar>
      <Tabs>
        <Tab isActive>{locales.accounts}</Tab>
        <Tab>{locales.deposits}</Tab>
      </Tabs>

      <Content>
        <Accounts accounts={props.accounts} />
      </Content>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  accounts: PropTypes.array,
};

Sidebar.defaultProps = {
  accounts: [
  ],
};

export default Sidebar;
