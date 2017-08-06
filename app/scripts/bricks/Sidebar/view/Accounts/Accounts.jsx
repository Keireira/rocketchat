import React from 'react';
import PropTypes from 'prop-types';
import { StyledAccounts } from './styles';
import AccountCard from '../AccountCard';

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
  selectAccount: PropTypes.func.isRequired,
};

Accounts.defaultProps = {
  accounts: [],
  match: {},
};

export default Accounts;
