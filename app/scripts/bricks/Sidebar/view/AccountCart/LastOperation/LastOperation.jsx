import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';
import { formatBalance, formatUNIXTimestamp } from 'helpers';

import { PositiveVal, NegativeVal } from './styles';
import { SubText } from '../styles';

const LastOperation = ({ operation, currency }) => {
  const carriedOut = formatUNIXTimestamp(operation.carried_out, true);

  const amount = formatBalance(operation.amount);
  const total = (operation.positive)
    ? <PositiveVal>{`${amount} ${currency}`}</PositiveVal>
    : <NegativeVal>{`${amount} ${currency}`}</NegativeVal>;

  return (
    <SubText>{locales.last_operation}: {carriedOut} ({total})</SubText>
  );
};

LastOperation.propTypes = {
  currency: PropTypes.string,
  operation: PropTypes.object,
};

LastOperation.defaultProps = {
  currency: '',
  operation: {},
};

export default LastOperation;
