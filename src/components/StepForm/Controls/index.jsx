import { connect } from 'react-redux';
import Stepper from './component';

const mapStateToProps = ({ steps, currentStep }) => ({
  steps,
  currentStep,
});

const mapDispatchToProps = (dispatch) => ({
  // logout: () => dispatch({ type: 'LOGOUT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stepper);
