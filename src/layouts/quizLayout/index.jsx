import { connect } from 'react-redux';
import QuizLayout from './layout';

const mapStateToProps = ({ results, user: { user } }) => ({
  results,
  user,
});

export default connect(mapStateToProps)(QuizLayout);
