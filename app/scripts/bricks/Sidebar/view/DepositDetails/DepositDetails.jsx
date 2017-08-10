import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';
import HistoryItem from './HistoryItem';
import DepositCard from '../DepositCard';
import { ProductDetails, HistoryTitle, HistoryWrapper } from 'bricks/Sidebar/view/styles';

class DepositDetails extends React.PureComponent {
  componentWillMount() {
    const { deposit, match } = this.props;

    const numberFromURL = parseInt(match.params.productId, 10);
    const noData = (numberFromURL !== deposit.number);

    if (typeof this.props.getDepositData === 'function') {
      this.props.getDepositData({
        productId: numberFromURL,
        getDeposit: noData,
        clientId: 888,
      });
    }
  };

  componentWillUnmount() {
    if (typeof this.props.clearDeposit === 'function') {
      this.props.clearDeposit();
    }
  };

  sortHistoryData = () => {
    const { history } = this.props.deposit;

    return (history) ? history.sort((a, b) => {
      return (a.created >= b.created) ? -1 : 1;
    }) : [];
  };

  createHistoryCardsList = () => {
    const history = this.sortHistoryData();

    return history.map((item) => {
      return (
        <HistoryItem
          key={item.created}
          currency={this.props.deposit.currency}
          {...item}
        />
      );
    });
  };

  render() {
    const historyCardsList = this.createHistoryCardsList();

    return (
      <ProductDetails>
        <DepositCard detailed match={this.props.match} {...this.props.deposit} />

        <HistoryTitle>{locales.operations_history}</HistoryTitle>

        <HistoryWrapper>
          {historyCardsList}
        </HistoryWrapper>
      </ProductDetails>
    );
  };
};

DepositDetails.propTypes = {
  match: PropTypes.object,
  deposit: PropTypes.object,
};

DepositDetails.defaultProps = {
  match: {
    params: {},
  },
  deposit: {
    history: [],
  },
};

export default DepositDetails;
