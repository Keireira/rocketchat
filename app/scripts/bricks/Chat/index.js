import { compose } from 'redux';
import { connect } from 'react-redux';

import selectors from 'selectors';

import View from 'bricks/Chat/view';

const makeMapStateToProps = () => {
  const getLastClient = selectors.makeGetLastClient();
  const getOperator = selectors.makeGetOperator();

  const mapStateToProps = (state) => ({
    lastClient: getLastClient(state),
    operator: getOperator(state),
  });

  return mapStateToProps;
};

// const mapDispatchToProps = (dispatch) => ({
//
// });

export default compose(
  connect(makeMapStateToProps, null),
)(View);
