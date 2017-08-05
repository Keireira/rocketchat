import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';
import { formatBalance, formatUNIXTimestamp } from 'helpers';

import {
  SubText,
  CartIcon,
  NegativeVal,
  PositiveVal,
  AccountCart,
  AccountNumber,
  AccountBalance,
  SubAccountInfo,
  StyledAccounts,
  MainAccountInfo,
} from './styles';
import { MaximizeIcon } from 'icons/ux';

const getLastOperation = (lastOperation, currency) => {
  const amount = formatBalance(lastOperation.amount);
  const date = formatUNIXTimestamp(lastOperation.carried_out, true);

  const value = (lastOperation.positive)
    ? <PositiveVal>{`${amount} ${currency}`}</PositiveVal>
    : <NegativeVal>{`${amount} ${currency}`}</NegativeVal>;

  return { date, value };
};

const renderAccountsView = (accounts) => {
  return accounts.map((account) => {
    const lastOperation = getLastOperation(account.last_operation, account.currency);
    const created = formatUNIXTimestamp(account.created, true);
    const balance = formatBalance(account.balance);

    return (
      <AccountCart key={account.number}>
        <MainAccountInfo>
          <AccountNumber>{locales.account} № {account.number}</AccountNumber>
          <AccountBalance>{`${balance} ${account.currency}`}</AccountBalance>
          <CartIcon>
            <MaximizeIcon width={18} height={18} />
          </CartIcon>
        </MainAccountInfo>

        <SubAccountInfo>
          <SubText>{account.annual}% {locales.annual}</SubText>
          <SubText>{locales.created}: {created}</SubText>
          <SubText>{locales.last_operation}: {lastOperation.date} ({lastOperation.value})</SubText>
        </SubAccountInfo>
      </AccountCart>
    );
  });
};

const Accounts = ({ accounts }) => {
  const renderedAccountsView = renderAccountsView(accounts);

  return (
    <StyledAccounts>
      {renderedAccountsView}
    </StyledAccounts>
  );
};

Accounts.propTypes = {
  accounts: PropTypes.array,
};

Accounts.defaultProps = {
  accounts: [],
};

export default Accounts;
