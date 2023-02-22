export const questionsInitialState = [];

export default (state = questionsInitialState, { type, payload }) => {
  switch (type) {
    case 'LOAD_QUESTIONS_SUCCESS':
      return payload;

    /*
    case 'UPDATE_QUIZ_PAGE': {
      // const { steps, stepNumber } = payload;
      const newSteps = [...payload.questions];
      console.log(newSteps);

      let count = 0;
      while (count < newSteps.length) {
        // current step
        if (count === payload.pageNumber) {
          newSteps[count] = {
            ...newSteps[count],
            highlighted: true,
            selected: true,
            completed: true,
          };
          count++;
        }

        // step completed
        else if (count < payload.pageNumber) {
          newSteps[count] = {
            ...newSteps[count],
            highlighted: false,
            selected: true,
            completed: true,
          };
          count++;
        }
        // step pending
        else {
          newSteps[count] = {
            ...newSteps[count],
            highlighted: false,
            selected: false,
            completed: false,
          };
          count++;
        }
      }

      return { ...payload, pageNumber: 0 };
    }
    */

    default:
      return state;
  }
};
