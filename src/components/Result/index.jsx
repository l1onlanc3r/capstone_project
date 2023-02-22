import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// const location = useLocation();

function Result({ results, clearCurrent }) {
  return (
    <div
      style={{ border: '1px solid black', height: '100%' }}
      className="h-screen flex flex-col"
    >
      <div className="px-2 sm:px-6 lg:px-40 relative flex h-16 items-center justify-between">
        <div className="p-1" />
        <div>
          <p className="text-2xl font-semibold">Quiz Result</p>
        </div>
        <Link to="/home" replace type="button" onClick={() => clearCurrent()}>
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

      <div className="content flex-1 flex flex-col items-center px-2 sm:px-6 lg:px-40 relative flex h-16 items-center justify-center">
        <div className="choices grid grid-cols-1 gap-2 items-center justify-center my-10">
          <label
            key="score"
            className="flex place-content-between rounded py-4 px-8 text-left bg-gray-100"
            style={{
              color: 'black',
              cursor: 'pointer',
              width: '300px',
            }}
          >
            <span className="flex justify-start text-md  font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-green-400 "
                style={{
                  backgroundColor: '#EDE8E3',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  lineHeight: '30px',
                  marginRight: '1rem',
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              TOTAL SCORE
            </span>
            <span className="float-right">{results.current.points}</span>
          </label>
          <label
            key="correct"
            className="flex place-content-between rounded py-4 px-8 text-left bg-gray-100"
            style={{
              color: 'black',
              cursor: 'pointer',
              width: '300px',
            }}
          >
            <span className="flex justify-start text-md  font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-green-400 "
                style={{
                  backgroundColor: '#EDE8E3',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  lineHeight: '30px',
                  marginRight: '1rem',
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              CORRECT ANSWERS
            </span>
            <span className="text-md">{results.current.correct}</span>
          </label>
        </div>
      </div>

      <div
        className="fixed inset-x-0 bottom-0 footer flex items-center lg:flex-row sm:flex-col mx-auto justify-center py-5 w-full"
        style={{ backgroundColor: '#F4F3F6' }}
      >
        <div className="progress_bar mx-5 sm:w-64">
          <Link
            to="/home"
            type="button"
            replace
            className="btn rounded w-full"
            onClick={() => clearCurrent()}
          >
            Okay
          </Link>
        </div>
      </div>
    </div>
  );
}

Result.propTypes = {
  results: PropTypes.shape({
    current: PropTypes.shape({
      correct: PropTypes.number.isRequired,
      points: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  clearCurrent: PropTypes.func.isRequired,
};

export default Result;
