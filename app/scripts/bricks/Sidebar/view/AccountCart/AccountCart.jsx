import React from 'react';
import locales from 'locales';
import { formatUNIXTimestamp } from 'helpers';

import AccountInfo from './AccountInfo';
import LastOperation from './LastOperation';
import { SubText, SubAccountInfo, StyledAccountCart } from './styles';

const AccountCart = (props) => {
  const created = formatUNIXTimestamp(props.created, true);

  return (
    <StyledAccountCart>
      <AccountInfo
        balance={props.balance}
        currency={props.currency}
        accountNumber={props.number}
      />

      <SubAccountInfo>
        <SubText>{props.annual}% {locales.annual}</SubText>
        <SubText>{locales.created}: {created}</SubText>

        <LastOperation
          currency={props.currency}
          operation={props.last_operation}
        />
      </SubAccountInfo>
    </StyledAccountCart>
  );
};

export default AccountCart;
