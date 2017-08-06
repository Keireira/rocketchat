import React from 'react';
import PropTypes from 'prop-types';
import { StyledAccounts } from './styles';
import AccountCart from '../AccountCart';

class Accounts extends React.PureComponent {
  renderAllAccounts = () => {
    return this.props.accounts.map((account) => {
      return (
        <AccountCart key={account.number} match={this.props.match} {...account} />
      );
    });
  };

  render() {
    const allAccounts = this.renderAllAccounts();

    return (
      <StyledAccounts>
        {allAccounts}
      </StyledAccounts>
    );
  };
};

Accounts.propTypes = {
  accounts: PropTypes.array,
  match: PropTypes.object,
};

Accounts.defaultProps = {
  accounts: [],
  match: {},
};

export default Accounts;
