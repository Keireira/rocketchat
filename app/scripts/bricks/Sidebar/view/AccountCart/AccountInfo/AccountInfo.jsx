import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';
import { formatBalance } from 'helpers';

import { MaximizeIcon, CloseIcon } from 'icons/ux';
import { StyledAccountInfo, AccountNumber, AccountBalance, CartIcon } from './styles';

class AccountInfo extends React.PureComponent {
  expandAccountData = () => {
    if (typeof this.props.selectAccount === 'function') {
      const accountData = {
        number: this.props.accountNumber,
        currency: this.props.currency,
        created: this.props.created,
        balance: this.props.balance,
        annual: this.props.annual,
        history: [],
      };

      this.props.selectAccount(accountData);
    }
  };

  render() {
    const { balance, accountNumber, currency, match } = this.props;
    const formattedBalance = formatBalance(balance);

    return (
      <StyledAccountInfo>
        <AccountNumber>{locales.account} № {accountNumber}</AccountNumber>
        <AccountBalance>{`${formattedBalance} ${currency}`}</AccountBalance>

        {Boolean(this.props.isSingle) === false && (
          <CartIcon to={`${match.path}${accountNumber}`} onClick={this.expandAccountData}>
            <MaximizeIcon width={18} height={18} />
          </CartIcon>
        )}

        {this.props.isSingle && (
          <CartIcon to="/chat/accounts/">
            <CloseIcon width={15} height={14} />
          </CartIcon>
        )}

      </StyledAccountInfo>
    );
  };
};

AccountInfo.propTypes = {
  balance: PropTypes.number,
  currency: PropTypes.string,
  accountNumber: PropTypes.number,
  match: PropTypes.object,
  annual: PropTypes.number,
  created: PropTypes.number,
};

AccountInfo.defaultProps = {
  balance: -1,
  currency: '',
  accountNumber: -1,
  match: {},
  annual: -1,
  created: -1,
};

export default AccountInfo;
