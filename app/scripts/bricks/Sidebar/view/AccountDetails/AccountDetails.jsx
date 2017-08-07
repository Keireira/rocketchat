import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';

import HistoryCard from './HistoryCard';
import AccountCard from '../AccountCard';
import { StyledAccountDetails, HistoryTitle, HistoryWrapper } from './styles';

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

  sortHistoryData = () => {
    const { history } = this.props.accountData;

    return (history) ? history.sort((a, b) => {
      return (a.carriedOut >= b.carriedOut) ? -1 : 1;
    }) : [];
  };

  createHistoryCardsList = () => {
    const history = this.sortHistoryData();

    return history.map((item) => {
      return (
        <HistoryCard
          key={item.carriedOut}
          currency={this.props.accountData.currency}
          {...item}
        />
      );
    });
  };

  render() {
    const historyCardsList = this.createHistoryCardsList();

    return (
      <StyledAccountDetails>
        <AccountCard isSingle match={this.props.match} {...this.props.accountData} />

        <HistoryTitle>
          {locales.operations_history}
        </HistoryTitle>

        <HistoryWrapper>
          {historyCardsList}
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
