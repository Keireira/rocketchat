import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';
import { formatBalance } from 'helpers';

import { MaximizeIcon, CloseIcon } from 'icons/ux';
import { InfoWrapper, ProductNumber, ProductBalance, IconWrapper } from 'bricks/Sidebar/view/styles';

class DepositInfo extends React.PureComponent {
  expandDepositData = () => {
    if (typeof this.props.selectDeposit === 'function') {
      const depositData = {
        number: this.props.number,
        passed: this.props.passed,
        period: this.props.period,
        percent: this.props.percent,
        created: this.props.created,
        currency: this.props.currency,
        currentBalance: this.props.balance.current,
        history: [],
      };

      this.props.selectDeposit(depositData);
    }
  };

  render() {
    const { number, currency, match, balance } = this.props;
    const showClose = Boolean(this.props.detailed);
    const formattedBalance = formatBalance(balance.current);

    return (
      <InfoWrapper>
        <ProductNumber>{`${locales.deposit} № ${number}`}</ProductNumber>
        <ProductBalance>{`${formattedBalance} ${currency}`}</ProductBalance>

        {(showClose === false) && (
          <IconWrapper to={`${match.path}${number}`} onClick={this.expandDepositData}>
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

DepositInfo.propTypes = {
  match: PropTypes.object,
  number: PropTypes.number,
  passed: PropTypes.number,
  detailed: PropTypes.bool,
  period: PropTypes.number,
  created: PropTypes.number,
  percent: PropTypes.number,
  balance: PropTypes.object,
  currency: PropTypes.string,
};

DepositInfo.defaultProps = {
  match: {},
  number: 0,
  passed: 0,
  detailed: false,
  period: 0,
  created: 0,
  percent: 0,
  balance: {
    current: 0,
  },
  currency: '',
};

export default DepositInfo;
