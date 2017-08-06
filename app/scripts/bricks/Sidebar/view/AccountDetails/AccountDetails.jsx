import React from 'react';
import PropTypes from 'prop-types';

import AccountCart from '../AccountCart';
import { StyledAccountDetails } from './styles';

class AccountDetails extends React.PureComponent {
  componentWillMount() {
    const { accountData, match } = this.props;

    const numberFromProps = accountData.number;
    const numberFromURL = parseInt(match.params.productId, 10);
    const noData = (numberFromURL !== numberFromProps);

    if (typeof this.props.getAccountData === 'function') {
      this.props.getAccountData({
        productId: numberFromURL,
        getAccount: noData,
        clientId: 888,
      });
    }
  };

  componentDidMount() {

  };

  componentWillUnmount() {
    if (typeof this.props.clearAccount === 'function') {
      this.props.clearAccount();
    }
  };

  render() {
    return (
      <StyledAccountDetails>
        <AccountCart
          isSingle={true}
          match={this.props.match}
          {...this.props.accountData}
        />
      </StyledAccountDetails>
    );
  };
};

AccountDetails.propTypes = {
  accountData: PropTypes.object,
  match: PropTypes.object,
};

AccountDetails.defaultProps = {
  accountData: {
    history: [],
  },
  match: {
    params: {},
  },
};

export default AccountDetails;
