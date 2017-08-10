import React from 'react';
import PropTypes from 'prop-types';

import { formatBalance } from 'helpers';

import { MingleShareicon } from 'icons/ux';
import { StyledTxAmount, Positive, Negative, IconWrapper } from './styles';

const TxAmount = ({ amount, positive, currency }) => {
  const formattedAmouunt = formatBalance(amount);
  const txAmount = (positive)
    ? <Positive>{`${formattedAmouunt} ${currency}`}</Positive>
    : <Negative>{`${formattedAmouunt} ${currency}`}</Negative>;

  return (
    <StyledTxAmount>
      {txAmount}

      <IconWrapper to="/">
        <MingleShareicon width={16} height={16} />
      </IconWrapper>
    </StyledTxAmount>
  );
};

TxAmount.propTypes = {
  positive: PropTypes.bool,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

TxAmount.defaultProps = {
  amount: 0,
  currency: '',
  positive: true,
};

export default TxAmount;
