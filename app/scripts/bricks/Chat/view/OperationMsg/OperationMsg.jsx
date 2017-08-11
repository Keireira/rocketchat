import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';
import { formatUNIXTimestamp, formatBalance } from 'helpers';

import Wrapper, { Avatar, Message, TxTitle, TxOperation, HiddenNums, Positive, Negative } from './styles';

const OperationMsg = ({ avatarUrl, timestamp, cardNumber, ...props }) => {
  const operationTime = formatUNIXTimestamp(timestamp, true);
  const formattedAmount = formatBalance(Math.abs(props.transaction));
  const txAmount = (props.transaction >= 0)
    ? <Positive>{`${formattedAmount} ${props.currency}`}</Positive>
    : <Negative>{`${formattedAmount} ${props.currency}`}</Negative>;

  return (
    <Wrapper>
      <Avatar url={avatarUrl} />

      <Message>
        <TxTitle>{`${locales.operation}`}</TxTitle>
        <span>{`${operationTime}`}</span>
        <TxOperation>
          <span>{`${locales.actions[props.actionType]} `}</span>

          { Boolean(cardNumber) && (
            <HiddenNums>
              <sup>****</sup>
              <span>{` ${cardNumber}`}</span>
            </HiddenNums>
          )}

          {Boolean(props.transaction) && txAmount}

        </TxOperation>
      </Message>
    </Wrapper>
  );
};

OperationMsg.propTypes = {
  avatarUrl: PropTypes.string,
  timestamp: PropTypes.number,
  actionType: PropTypes.string,
  cardNumber: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
  transaction: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
  currency: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
};

OperationMsg.defaultProps = {
  avatarUrl: '',
  timestamp: 0,
  actionType: '',
  cardNumber: null,
  transaction: null,
  currency: '',
};

export default OperationMsg;
