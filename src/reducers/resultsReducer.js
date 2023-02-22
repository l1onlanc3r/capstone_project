export const resultsInitialState = {
  history: [],
  current: null,
};

export default (state = resultsInitialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_RESULTS_SUCCESS':
      return { ...state, history: payload };

    case 'CHECK_ANSWERS_SUCCESS':
      return { ...state, current: payload };

    case 'CLEAR_CURRENT':
      return { ...state, current: null };

    default:
      return state;
  }
};
