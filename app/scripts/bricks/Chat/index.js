import { compose } from 'redux';
import { connect } from 'react-redux';

import selectors from 'selectors';

import View from 'bricks/Chat/view';

const makeMapStateToProps = () => {
  const getOperator = selectors.makeGetOperator();
  const getLastClient = selectors.makeGetLastClient();
  const getSelectedOperation = selectors.makeGetSelectedOperation();

  const mapStateToProps = (state) => ({
    operator: getOperator(state),
    lastClient: getLastClient(state),
    selectedOperation: getSelectedOperation(state),
  });

  return mapStateToProps;
};

export default compose(
  connect(makeMapStateToProps, null),
)(View);
