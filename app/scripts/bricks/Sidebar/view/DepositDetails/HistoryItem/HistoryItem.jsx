import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';
import { formatUNIXTimestamp, formatBalance } from 'helpers';

import { MingleShareicon } from 'icons/ux';
import { IconWrapper, TxCaption, TxAmount, Balance } from './styles';
import { HistoryContent, HistoryItemWrapper, SubText } from 'bricks/Sidebar/view/styles';

const HistoryItem = (props) => {
  const sendMessage = () => {
    if (typeof props.sendOperationToChat === 'function') {
      props.sendOperationToChat({
        timestamp: new Date().getTime() / 1000 | 0,
        date: props.created,
        actionType: props.type,
        cardNumber: null,
        transaction: (props.type === 'percent') ? props.tick : null,
        currency: props.currency,
      });
    }
  };

  const date = formatUNIXTimestamp(props.created, true);
  const tick = formatBalance(props.tick);
  const balance = formatBalance(props.balance);

  return (
    <HistoryItemWrapper>
      <HistoryContent>
        <TxCaption>
          <SubText>{`${date}`}</SubText>
          <SubText>{`${locales.actions[props.type]}`}</SubText>
          <span>{`${locales.balance} ${balance} ${props.currency}`}</span>
        </TxCaption>

        <TxAmount>
          {props.type === 'percent' && (
            <Balance>{`${tick} ${props.currency}`}</Balance>
          )}

          <IconWrapper to="/" onClick={sendMessage}>
            <MingleShareicon width={16} height={16} />
          </IconWrapper>
        </TxAmount>
      </HistoryContent>
    </HistoryItemWrapper>
  );
};

HistoryItem.propTypes = {
  balance: PropTypes.number,
  created: PropTypes.number,
  currency: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
  ]),
  type: PropTypes.string,
  tick: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
};

HistoryItem.defaultProps = {
  balance: 0,
  created: 0,
  currency: null,
  type: '',
  tick: null,
};

export default HistoryItem;
