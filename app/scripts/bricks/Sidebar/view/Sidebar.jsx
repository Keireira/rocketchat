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
    {
      balance: 43563.75,
      currency: '₽',
      number: 57890456,
      annual: 8.5,
      created: 1501763532,
      history: [{
        type: 'top_up',
        amount: 3500.00,
        positive: true,
        last_cart_number: 5682,
        carried_out: 1504763532,
      }],
    },
    {
      balance: 6582.02,
      currency: '$',
      number: 47830456,
      annual: 2.5,
      created: 1501363532,
      history: [{
        type: 'top_up',
        amount: 500.00,
        positive: true,
        last_cart_number: 5682,
        carried_out: 1502363532,
      }],
    },
    {
      balance: 463.21,
      currency: '€',
      number: 47830426,
      annual: 1.0,
      created: 1500763532,
      history: [{
        type: 'top_up',
        amount: 660.00,
        positive: false,
        last_cart_number: 5682,
        carried_out: 1500963532,
      }],
    },
  ],
};

export default Sidebar;
