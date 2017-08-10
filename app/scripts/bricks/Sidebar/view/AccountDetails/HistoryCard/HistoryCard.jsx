import React from 'react';
import PropTypes from 'prop-types';

import TxAmount from './TxAmount';
import TxCaption from './TxCaption';
import { HistoryItemWrapper, HistoryContent } from 'bricks/Sidebar/view/styles';

class HistoryCard extends React.PureComponent {
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
  currency: PropTypes.string,
  carriedOut: PropTypes.number,
  lastCartNumber: PropTypes.string,
};

HistoryCard.defaultProps = {
  type: '',
  amount: 0,
  currency: '',
  positive: true,
  carriedOut: 0,
  lastCartNumber: '0000',
};

export default HistoryCard;
