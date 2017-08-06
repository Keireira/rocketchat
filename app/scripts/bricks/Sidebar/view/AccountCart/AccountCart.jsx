import React from 'react';
import PropTypes from 'prop-types';

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
        match={props.match}
      />

      <SubAccountInfo>
        <SubText>{props.annual}% {locales.annual}</SubText>
        <SubText>{locales.created}: {created}</SubText>

        { props.showLastOperation && (
          <LastOperation
            currency={props.currency}
            operation={props.last_operation}
          />
        )}
      </SubAccountInfo>
    </StyledAccountCart>
  );
};

AccountCart.propTypes = {
  annual: PropTypes.number,
  balance: PropTypes.number,
  created: PropTypes.number,
  currency: PropTypes.string,
  last_operation: PropTypes.object,
  number: PropTypes.number,
  match: PropTypes.object,
  showLastOperation: PropTypes.bool,
};

AccountCart.defaultProps = {
  annual: -1,
  balance: -1,
  created: -1,
  currency: '',
  last_operation: {},
  number: -1,
  match: {},
  showLastOperation: true,
};

export default AccountCart;
