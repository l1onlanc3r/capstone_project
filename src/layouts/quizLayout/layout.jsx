import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

function QuizLayout({ user }) {
  if (!user) {
    return <Navigate to="/home" replace />;
  }

  return (
    <div data-testid="quiz-wrapper">
      <Outlet />
    </div>
  );
}

QuizLayout.propTypes = {
  user: PropTypes.shape({}),
};

QuizLayout.defaultProps = {
  user: null,
};

export default QuizLayout;
