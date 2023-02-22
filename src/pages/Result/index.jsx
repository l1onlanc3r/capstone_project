import { connect } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Result from './page';

// const navigate = useNavigate();

const mapStateToProps = ({ results }) => ({
  results,
});

const mapDispatchToProps = (dispatch) => ({
  clearCurrent: () => dispatch({ type: 'CLEAR_CURRENT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Result);
