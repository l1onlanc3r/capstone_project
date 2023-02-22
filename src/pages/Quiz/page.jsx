import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Navigate, Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import FormStepper from '../../components/StepForm/FormStepper';
import Question from '../../components/Question';

function Quiz({
  user,
  questions,
  loadQuestions,
  loading,
  hasError,
  initialValues,
  checkAnswers,
  results,
}) {
  const newIntVal = { ...initialValues, userId: user.user.id };

  const loadData = useCallback(async () => {
    await loadQuestions();
  }, [loadQuestions]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (results.current) {
    console.log('results: ', results);
    return <Navigate to="/quiz/result" state={results.current} />;
  }

  console.log(questions);

  // const linksGroup = { linkname: '', linkurl: '' };

  return (
    <div
      style={{ border: '1px solid black', height: '100%' }}
      className="h-screen flex flex-col"
    >
      <div className="px-2 sm:px-6 lg:px-40 relative flex h-16 items-center justify-between">
        <div className="p-1" style={{ backgroundColor: 'red' }}>
          <p className="text-xs font-semibold">200</p>
        </div>
        <div>
          <p className="text-2xl font-semibold">Fantasy Quiz</p>
        </div>
        <Link to="/home" replace>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </div>
      {loading && <h1>Loading...</h1>}
      {hasError && <h1>Something went wrong</h1>}
      <Formik initialValues={newIntVal} onSubmit={checkAnswers}>
        {({ values, isValid, dirty, errors, isSubmitting, handleSubmit }) => (
          <FormStepper
            length={questions.length}
            isValid={isValid}
            dirty={dirty}
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit}
            checkAnswers={checkAnswers}
            user={user}
          >
            {!loading &&
              !hasError &&
              questions &&
              questions.map((x, index) => (
                <Question
                  key={questions[index].id}
                  question={questions[index]}
                />
              ))}
          </FormStepper>
        )}
      </Formik>
    </div>
  );
}

export default Quiz;
