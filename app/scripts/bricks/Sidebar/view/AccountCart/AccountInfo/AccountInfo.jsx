import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';
import { formatBalance } from 'helpers';

import { MaximizeIcon } from 'icons/ux';
import { StyledAccountInfo, AccountNumber, AccountBalance, CartIcon } from './styles';

const AccountInfo = ({ balance, currency, accountNumber, match }) => {
  const formattedBalance = formatBalance(balance);

  return (
    <StyledAccountInfo>
      <AccountNumber>{locales.account} № {accountNumber}</AccountNumber>
      <AccountBalance>{`${formattedBalance} ${currency}`}</AccountBalance>

      <CartIcon to={`${match.path}${accountNumber}`}>
        <MaximizeIcon width={18} height={18} />
      </CartIcon>
    </StyledAccountInfo>
  );
};

AccountInfo.propTypes = {
  balance: PropTypes.number,
  currency: PropTypes.string,
  accountNumber: PropTypes.number,
  match: PropTypes.object,
};

AccountInfo.defaultProps = {
  balance: -1,
  currency: '',
  accountNumber: -1,
  match: {},
};

export default AccountInfo;
