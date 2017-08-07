import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';
import { formatUNIXTimestamp } from 'helpers';

import { StyledTxCaption, TxTitle, HiddenNums } from './styles';

const TxCaption = ({ carriedOut, type, lastCartNumber }) => {
  const time = formatUNIXTimestamp(carriedOut, true);

  return (
    <StyledTxCaption>
      <span>{time}</span>

      <TxTitle>
        <span>{locales.actions[type]}</span>
        <HiddenNums>****</HiddenNums>
        <span>{lastCartNumber}</span>
      </TxTitle>
    </StyledTxCaption>
  );
};

TxCaption.propTypes = {
  type: PropTypes.string,
  carriedOut: PropTypes.number,
  lastCartNumber: PropTypes.string,
};

TxCaption.defaultProps = {
  type: '',
  carriedOut: 0,
  lastCartNumber: '0000',
};

export default TxCaption;
