import React from 'react';
import PropTypes from 'prop-types';

import AccountCard from '../AccountCard';
import { StyledAccounts } from './styles';

const Accounts = ({ accounts, match, ...props }) => {
  const accountCardsList = accounts.map((account) => {
    return (
      <AccountCard
        selectAccount={props.selectAccount}
        key={account.number}
        match={match}
        {...account}
      />
    );
  });

  return (
    <StyledAccounts>
      {accountCardsList}
    </StyledAccounts>
  );
};

Accounts.propTypes = {
  accounts: PropTypes.array,
  match: PropTypes.object,
};

Accounts.defaultProps = {
  accounts: [],
  match: {},
};

export default Accounts;
