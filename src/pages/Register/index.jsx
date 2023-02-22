import { connect } from 'react-redux';
// import { registerAction } from '../../actions/authActions';
import Register from './page';

const mapDispatchToProps = (dispatch) => ({
  // register: (values, actions) => registerAction(values, actions)(dispatch),

  // usng redux-saga
  register: (data, actions) =>
    dispatch({
      type: 'REGISTER_REQUEST',
      payload: {
        url: 'register',
        method: 'post',
        data,
        actions,
      },
      meta: {
        loadingId: -1,
      },
    }),
});

export default connect(null, mapDispatchToProps)(Register);
