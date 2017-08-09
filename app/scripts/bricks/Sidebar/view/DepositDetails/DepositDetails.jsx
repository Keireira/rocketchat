import React from 'react';
import PropTypes from 'prop-types';

import DepositCard from '../DepositCard';
import { StyledDepositDetails } from './styles';

class DepositDetails extends React.PureComponent {
  componentWillUnmount() {
    if (typeof this.props.clearDeposit === 'function') {
      this.props.clearDeposit();
    }
  };

  render() {
    return (
      <StyledDepositDetails>
        <DepositCard detailed match={this.props.match} {...this.props.deposit} />
      </StyledDepositDetails>
    );
  };
};

DepositDetails.propTypes = {
  match: PropTypes.object,
  deposit: PropTypes.object,
};

DepositDetails.defaultProps = {
  match: {
    params: {},
  },
  deposit: {
    history: [],
  },
};

export default DepositDetails;
