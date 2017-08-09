import React from 'react';
import PropTypes from 'prop-types';
import { StyledDeposits } from './styles';

const Deposits = ({ deposits }) => {
  console.log(deposits);

  return (
    <StyledDeposits>
      Deposits
    </StyledDeposits>
  );
};

Deposits.propTypes = {
  deposits: PropTypes.array,
  // match: PropTypes.object,
};

Deposits.defaultProps = {
  deposits: [],
  match: {},
};

export default Deposits;
