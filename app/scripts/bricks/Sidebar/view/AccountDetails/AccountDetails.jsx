import React from 'react';
import PropTypes from 'prop-types';

import AccountCart from '../AccountCart';
import { StyledAccountDetails } from './styles';

class AccountDetails extends React.PureComponent {
  // state = {
  //   productId: 0,
  // };

  componentWillMount() {
    // const { params } = this.props.match;
    //
    // this.setState({
    //   productId: parseInt(params.productId, 10),
    // });
  };

  componentDidMount() {
    console.log(this.props.accountData);
    // console.log(this.state);
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
  clearAccount: PropTypes.func.isRequired,
  accountData: PropTypes.object,
};

AccountDetails.defaultProps = {
  accountData: {},
};

export default AccountDetails;
