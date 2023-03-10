import React, { useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import History from '../../components/History';

function Home({
  user,
  results,
  loading,
  loadResults,
  hasError,
  logout,
  quizStart,
}) {
  useEffect(() => {
    loadResults(user);
  }, [loadResults]);

  console.log('results: ', results);

  return (
    <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 gap-4 text-center">
        <p className="text-4xl font-medium">Welcome {user.user.name}!</p>
        <div className="grid grid-cols-2 gap-1">
          <Link to="/quiz" className="btn" onClick={() => quizStart()}>
            Start Quiz
          </Link>
          <button type="button" className="btn bg-red-500" onClick={logout}>
            Logout
          </button>
        </div>

        <hr />
        <hr />
        <h1
          className="text-center text-lg font-medium"
          style={{ textTransform: 'uppercase' }}
        >
          Your History
        </h1>
        <div
          className="grid lg:grid-cols-3 sm:grid-cols-2 gap-2 text-center"
          style={{ borderTop: '1px solid black', paddingTop: '1rem' }}
        >
          {results.history.length != 0 ? (
            results.history.map((x, index) => (
              <History key={index} details={x} counter={index + 1} />
            ))
          ) : (
            <p className="text-xs font-light italic text-gray-400 ">
              No history available!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
