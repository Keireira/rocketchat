import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';
import { formatBalance, formatUNIXTimestamp } from 'helpers';

import { SubText } from '../styles';
import { Positive, Negative } from './styles';

const getLastAmount = (type, text) => (type) ? <Positive>{text}</Positive> : <Negative>{text}</Negative>;

// Render
const LastOperation = ({ operation, currency }) => {
  const amount = formatBalance(operation.amount);
  const carriedOut = formatUNIXTimestamp(operation.carried_out, true);
  const lastAmount = getLastAmount(operation.positive, `${amount} ${currency}`);

  return (
    <SubText>
      {locales.last_operation}: {carriedOut} ({lastAmount})
    </SubText>
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
