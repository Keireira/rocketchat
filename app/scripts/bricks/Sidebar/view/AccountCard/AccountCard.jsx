import React from 'react';
import PropTypes from 'prop-types';

import locales from 'locales';
import { formatUNIXTimestamp } from 'helpers';

import AccountInfo from './AccountInfo';
import LastOperation from './LastOperation';
import { SubText, SubAccountInfo, StyledAccountCard } from './styles';

const AccountCard = (props) => {
  const created = formatUNIXTimestamp(props.created, true);

  return (
    <StyledAccountCard>
      <AccountInfo
        balance={props.balance}
        currency={props.currency}
        accountNumber={props.number}
        match={props.match}
        created={props.created}
        annual={props.annual}
        selectAccount={props.selectAccount}
        isSingle={props.isSingle}
      />

      <SubAccountInfo>
        <SubText>{props.annual}% {locales.annual}</SubText>
        <SubText>{locales.created}: {created}</SubText>

        { (Boolean(props.isSingle) === false) && (
          <LastOperation
            currency={props.currency}
            operation={props.last_operation}
          />
        )}
      </SubAccountInfo>
    </StyledAccountCard>
  );
};

AccountCard.propTypes = {
  annual: PropTypes.number,
  balance: PropTypes.number,
  created: PropTypes.number,
  currency: PropTypes.string,
  last_operation: PropTypes.object,
  number: PropTypes.number,
  match: PropTypes.object,
  isSingle: PropTypes.bool,
};

AccountCard.defaultProps = {
  annual: 0,
  balance: 0,
  created: 0,
  currency: '',
  last_operation: {},
  number: 0,
  match: {},
  isSingle: false,
};

export default AccountCard;
