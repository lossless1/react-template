import { connect } from 'react-redux';
import { actions, NAME } from 'modules/test/reducers/test';
import Test from 'modules/test/components/Test/Test';

export default connect(
  ({ [NAME]: { insideTest }, router: { location } }) => {
    return {
      fetching: insideTest.fetching,
      location,
    };
  },
  dispatch => ({
    test: () => dispatch(actions.test.request()),
  })
)(Test);
