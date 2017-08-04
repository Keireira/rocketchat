import React from 'react';
import { last } from 'lodash';
import PropTypes from 'prop-types';
import locales from 'locales';
import { formatBalance } from 'helpers';
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

const getLastOperation = (history, currency) => {
  const lastHistoryItem = last(history);
  const amount = formatBalance(lastHistoryItem.amount);

  return (lastHistoryItem.positive)
    ? <PositiveVal>{`${amount} ${currency}`}</PositiveVal>
    : <NegativeVal>{`${amount} ${currency}`}</NegativeVal>;
};

const Accounts = ({ accounts }) => {
  return (
    <StyledAccounts>
      {
        accounts.map((account) => {
          const lastOperation = getLastOperation(account.history, account.currency);
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
                <SubText>{locales.created}: 23.01.2017 | 13:55</SubText>
                <SubText>{locales.last_operation}: 08.03.2017 | 19:21 ({lastOperation})</SubText>
              </SubAccountInfo>
            </AccountCart>
          );
        })
      }
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
