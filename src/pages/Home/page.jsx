import React, { useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import History from '../../components/History';

function Home({ user, results, loading, loadResults, hasError, logout }) {
  useEffect(() => {
    loadResults(user);
  }, [loadResults]);

  console.log('results: ', results);

  return (
    <div className="mx-auto max-w-7xl px-2 py-10 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 gap-4 text-center">
        <p className="text-4xl font-medium">Welcome {user.user.name}!</p>
        <div className="grid grid-cols-2 gap-1">
          <Link to="/quiz" className="btn">
            Start Quiz
          </Link>
          <button type="button" className="btn bg-red-500" onClick={logout}>
            Logout
          </button>
        </div>

        <hr></hr>
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

/*

 <div className="w-full place-content-center">
      <h1>Hello {user.user.name}!</h1>

      <Link type="button" className="btn" to="/quiz">
        Start
      </Link>

      <button type="button" className="btn" onClick={logout}>
        Logout
      </button>

      <div data-testid="results-list">
        <table border="solid" cellPadding="10">
          <thead>
            <tr>
              <th>Date/Time</th>
              <th>Correct</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan="3">Loading...</td>
              </tr>
            )}
            {hasError && (
              <tr>
                <td colSpan="3">Something went wrong...</td>
              </tr>
            )}
            {!hasError &&
              !loading &&
              (results.history.length === 0 ? (
                <tr>
                  <td colSpan="3">No Data Available</td>
                </tr>
              ) : (
                results.history.map((result) => (
                  <tr key={result.id}>
                    <td>{result.datetime}</td>
                    <td>{result.correct}</td>
                    <td>{result.score}</td>
                  </tr>
                ))
              ))}
          </tbody>
        </table>
      </div>
    </div>

*/
