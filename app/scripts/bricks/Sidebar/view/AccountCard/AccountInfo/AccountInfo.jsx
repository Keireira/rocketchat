import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';
import { formatBalance } from 'helpers';

import { MaximizeIcon, CloseIcon } from 'icons/ux';
import { InfoWrapper, ProductNumber, ProductBalance, IconWrapper } from 'bricks/Sidebar/view/styles';

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
    const { accountNumber, match } = this.props;
    const showClose = Boolean(this.props.isSingle);
    const formattedBalance = formatBalance(this.props.balance);

    return (
      <InfoWrapper>
        <ProductNumber>{locales.account} № {accountNumber}</ProductNumber>
        <ProductBalance>{`${formattedBalance} ${this.props.currency}`}</ProductBalance>

        {(showClose === false) && (
          <IconWrapper to={`${match.path}${accountNumber}`} onClick={this.expandAccountData}>
            <MaximizeIcon width={18} height={18} />
          </IconWrapper>
        )}

        {(showClose) && (
          <IconWrapper to="/chat/accounts/">
            <CloseIcon width={15} height={14} />
          </IconWrapper>
        )}
      </InfoWrapper>
    );
  };
};

AccountInfo.propTypes = {
  accountNumber: PropTypes.number,
  currency: PropTypes.string,
  balance: PropTypes.number,
  created: PropTypes.number,
  annual: PropTypes.number,
  match: PropTypes.object,
};

AccountInfo.defaultProps = {
  accountNumber: -1,
  currency: '',
  balance: -1,
  created: -1,
  annual: -1,
  match: {},
};

export default AccountInfo;
