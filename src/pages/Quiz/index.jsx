import { connect } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Quiz from './page';

// const navigate = useNavigate();

const mapStateToProps = ({ results, user, questions, loading, errors }) => ({
  user,
  questions,
  results,
  loading: loading.some((x) => x.action === 'LOAD_QUESTIONS'),
  hasError: errors.some((x) => x.action === 'LOAD_QUESTIONS'),
  initialValues: questions.reduce(
    (p, c) => ({ ...p, [c.id]: c.type === 'single' ? '' : [] }),
    {},
  ),
});

const mapDispatchToProps = (dispatch) => ({
  loadQuestions: () => {
    dispatch({
      type: 'LOAD_QUESTIONS_REQUEST',
      payload: {
        url: `660/questions`,
        method: 'get',
      },
      meta: { loadingId: -1 },
    });
  },
  checkAnswers: async (data) => {
    console.log('SUBMITTINGssssss:', data);

    dispatch({
      type: 'CHECK_ANSWERS_REQUEST',
      payload: {
        baseURL: 'http://localhost:5000',
        url: `/api/submit`,
        method: 'post',
        data,
      },
      meta: { loadingId: -1 },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
