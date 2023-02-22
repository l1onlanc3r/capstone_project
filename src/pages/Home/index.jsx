import { connect } from 'react-redux';
import Home from './page';

const mapStateToProps = ({ user, results, loading, errors }) => ({
  user,
  results,
  loading: loading.some((x) => x.action === 'LOAD_RESULTS'),
  hasError: errors.some((x) => x.action === 'LOAD_RESULTS'),
});

const mapDispatchToProps = (dispatch) => ({
  loadResults: (user) => {
    console.log(user);
    dispatch({
      type: 'LOAD_RESULTS_REQUEST',
      payload: {
        url: `660/results?user_id=${user.user.id}`,
        method: 'get',
      },
      meta: { loadingId: -1 },
    });
  },
  logout: () => dispatch({ type: 'LOGOUT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
