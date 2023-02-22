export const resultsInitialState = {
  history: [],
  current: null,
  takingQuiz: false,
};

export default (state = resultsInitialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_RESULTS_SUCCESS':
      return { ...state, history: payload };

    case 'CHECK_ANSWERS_SUCCESS':
      return { ...state, current: payload };

    case 'CLEAR_CURRENT':
      return { ...state, current: null };

    case 'QUIZ_START':
      return { ...state, takingQuiz: true };

    case 'QUIZ_DONE':
      return { ...state, takingQuiz: false };

    default:
      return state;
  }
};
