import React from 'react';
import PropTypes from 'prop-types';

import TxAmount from './TxAmount';
import TxCaption from './TxCaption';
import { HistoryItemWrapper, HistoryContent } from 'bricks/Sidebar/view/styles';

class HistoryCard extends React.PureComponent {
  sendOperation = () => {
    if (typeof this.props.sendOperationToChat === 'function') {
      this.props.sendOperationToChat({
        timestamp: new Date().getTime() / 1000 | 0,
        date: this.props.carriedOut,
        actionType: this.props.type,
        cardNumber: this.props.lastCartNumber,
        transaction: (this.props.positive) ? this.props.amount : this.props.amount * -1,
        currency: this.props.currency,
      });
    }
  };

  render() {
    return (
      <HistoryItemWrapper>
        <HistoryContent>
          <TxCaption
            type={this.props.type}
            carriedOut={this.props.carriedOut}
            lastCartNumber={this.props.lastCartNumber}
          />

          <TxAmount
            amount={this.props.amount}
            positive={this.props.positive}
            currency={this.props.currency}
            sendOperation={this.sendOperation}
          />
        </HistoryContent>
      </HistoryItemWrapper>
    );
  };
};

HistoryCard.propTypes = {
  type: PropTypes.string,
  positive: PropTypes.bool,
  amount: PropTypes.number,
  currency: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
  carriedOut: PropTypes.number,
  lastCartNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
};

HistoryCard.defaultProps = {
  type: '',
  amount: 0,
  currency: null,
  positive: true,
  carriedOut: 0,
  lastCartNumber: null,
};

export default HistoryCard;
