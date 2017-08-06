import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';
import { formatUNIXTimestamp, formatBalance } from 'helpers';

import AccountCart from '../AccountCart';
import { MingleShareicon } from 'icons/ux';
import {
  StyledAccountDetails,
  Time,
  Icon,
  Inner,
  Operation,
  HistoryTitle,
  HistoryCart,
  HiddenNums,
  HistoryWrapper,
  NegativeVal,
  PositiveVal,
} from './styles';

class AccountDetails extends React.PureComponent {
  componentWillMount() {
    const { accountData, match } = this.props;

    const numberFromURL = parseInt(match.params.productId, 10);
    const noData = (numberFromURL !== accountData.number);

    if (typeof this.props.getAccountData === 'function') {
      this.props.getAccountData({
        productId: numberFromURL,
        getAccount: noData,
        clientId: 888,
      });
    }
  };

  componentWillUnmount() {
    if (typeof this.props.clearAccount === 'function') {
      this.props.clearAccount();
    }
  };

  render() {
    const history = this.props.accountData.history.sort((a, b) => {
      return (a.carried_out >= b.carried_out) ? -1 : 1;
    });

    return (
      <StyledAccountDetails>
        <AccountCart
          isSingle={true}
          match={this.props.match}
          {...this.props.accountData}
        />

        <HistoryTitle>{locales.operations_history}</HistoryTitle>
        <HistoryWrapper>
          {
            history.map((item) => {
              const time = formatUNIXTimestamp(item.carried_out, true);
              const formattedAmouunt = formatBalance(item.amount);
              const { currency } = this.props.accountData;
              const amount = (item.positive)
                ? <PositiveVal>{`${formattedAmouunt} ${currency}`}</PositiveVal>
                : <NegativeVal>{`${formattedAmouunt} ${currency}`}</NegativeVal>;

              return (
                <HistoryCart key={item.carried_out / item.last_cart_number}>
                  <Inner>
                    <Time>{time}</Time>
                    <Operation>
                      <span>{locales.actions[item.type]}</span>
                      <HiddenNums>****</HiddenNums>
                      <span>{item.last_cart_number}</span>
                      {amount}
                    </Operation>

                    <Icon>
                      <MingleShareicon width={16} height={16} />
                    </Icon>
                  </Inner>
                </HistoryCart>
              );
            })
          }
        </HistoryWrapper>
      </StyledAccountDetails>
    );
  };
};

AccountDetails.propTypes = {
  accountData: PropTypes.object,
  match: PropTypes.object,
};

AccountDetails.defaultProps = {
  accountData: {
    history: [],
  },
  match: {
    params: {},
  },
};

export default AccountDetails;
