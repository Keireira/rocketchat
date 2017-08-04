import { compose } from 'redux';
import { connect } from 'react-redux';

import selectors from 'selectors';

import View from 'bricks/Sidebar/view';

const makeMapStateToProps = () => {
  const getCurrentLocale = selectors.makeGetCurrentLocale();

  const mapStateToProps = (state) => ({
    locale: getCurrentLocale(state),
  });

  return mapStateToProps;
};

// const mapDispatchToProps = (dispatch) => ({
//
// });

export default compose(
  connect(makeMapStateToProps, null),
)(View);
