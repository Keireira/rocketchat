import React from 'react';

import locales from 'locales';
import { formatUNIXTimestamp, formatBalance } from 'helpers';

import { MingleShareicon } from 'icons/ux';
import { IconWrapper, TxCaption, TxAmount, Balance } from './styles';
import { HistoryContent, HistoryItemWrapper, SubText } from 'bricks/Sidebar/view/styles';

const HistoryItem = (props) => {
  const date = formatUNIXTimestamp(props.created, true);
  const tick = formatBalance(props.tick);
  const balance = formatBalance(props.balance);

  return (
    <HistoryItemWrapper>
      <HistoryContent>
        <TxCaption>
          <SubText>{`${date}`}</SubText>
          <SubText>{`${locales.depositActions[props.type]}`}</SubText>
          <span>{`${locales.balance} ${balance} ${props.currency}`}</span>
        </TxCaption>

        <TxAmount>
          {props.type === 'percent' && (
            <Balance>{`${tick} ${props.currency}`}</Balance>
          )}

          <IconWrapper to="/">
            <MingleShareicon width={16} height={16} />
          </IconWrapper>
        </TxAmount>
      </HistoryContent>
    </HistoryItemWrapper>
  );
};

export default HistoryItem;
