import React from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

function AuthLayout({ user, action }) {
  // const { userState } = useAuthContext();
  console.log('action: ', action);
  if (user) {
    // redirect
    return <Navigate to="/home" replace />;
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <Outlet />
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  user: PropTypes.shape({}),
};

AuthLayout.defaultProps = {
  user: null,
};

export default AuthLayout;
