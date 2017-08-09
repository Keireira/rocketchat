import React from 'react';
import PropTypes from 'prop-types';

import DepositCard from '../DepositCard';
import { StyledDeposits } from './styles';

const Deposits = ({ deposits, match, ...props }) => {
  const depositCardList = deposits.map((deposit) => {
    return (
      <DepositCard
        selectDeposit={props.selectDeposit}
        key={deposit.number}
        match={match}
        {...deposit}
      />
    );
  });

  return (
    <StyledDeposits>
      {depositCardList}
    </StyledDeposits>
  );
};

Deposits.propTypes = {
  deposits: PropTypes.array,
  match: PropTypes.object,
};

Deposits.defaultProps = {
  deposits: [],
  match: {},
};

export default Deposits;
