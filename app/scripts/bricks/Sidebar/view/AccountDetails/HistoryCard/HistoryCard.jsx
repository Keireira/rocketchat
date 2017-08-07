import React from 'react';
import PropTypes from 'prop-types';

import TxAmount from './TxAmount';
import TxCaption from './TxCaption';
import { StyledHistoryCard, CardContent } from './styles';

class HistoryCard extends React.PureComponent {
  render() {
    return (
      <StyledHistoryCard>
        <CardContent>
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
        </CardContent>
      </StyledHistoryCard>
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
