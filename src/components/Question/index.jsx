import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import OptionSingle from '../Option/single';
import OptionMultiple from '../Option/multiple';

function Question({ question }) {
  const props = {
    component: question.type === 'single' ? OptionSingle : OptionMultiple,
    name: question.id,
    id: question.id,
    questionId: question.id,
    choices: question.choices,
    value: question.type === 'single' ? '' : [],
  };

  // update the score in top-left
  document.getElementById('currentWeight').innerHTML = question?.weight;

  return (
    <div className="content flex-1 flex flex-col items-center px-2 sm:px-6 lg:px-40 relative flex h-16 items-center justify-center">
      <p
        className="text-sm font-semibold sm:text-3xl text-center"
        style={{ color: '#191D63' }}
      >
        {question?.question}
      </p>
      <div className="choices grid grid-cols-1 gap-2 items-center justify-center my-10">
        <Field {...props} />
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    choices: PropTypes.arrayOf().isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
};

export default Question;
