import React, { useState } from 'react';
import { Field } from 'formik';
import OptionSingle from '../Option/single';
import OptionMultiple from '../Option/multiple';

function Question({ question, setAnswer, answers }) {
  const [selected, setSelected] = useState(null);

  const props = {
    component: question.type === 'single' ? OptionSingle : OptionMultiple,
    name: question.id,
    id: question.id,
    questionId: question.id,
    choices: question.choices,
    'data-value': question.type === 'single' ? '' : [],
  };

  console.log('question: ', question);
  console.log('props: ', props);

  return (
    <div className="content flex-1 flex flex-col items-center px-2 sm:px-6 lg:px-40 relative flex h-16 items-center justify-center">
      <p
        className="text-sm font-semibold sm:text-3xl text-center"
        style={{ color: '#191D63' }}
      >
        {question?.question}
      </p>
      <div className="choices grid grid-cols-1 gap-2 items-center justify-center my-10">
        <Field key={question?.id} {...props} />
      </div>
    </div>
  );
}

/*
{question?.choices.map((x, index) => (
          <Options
            key={x.id}
            choice={x}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
*/

export default Question;
