import React from 'react';
import PropTypes from 'prop-types';
import { loginFields, loginInitialValues } from './loginFields';
import CustomForm from '../../components/CustomForm';
import { Link } from 'react-router-dom';

function Login({ login }) {
  return (
    <>
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Log-in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          or{' '}
          <Link
            to="register"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Register here
          </Link>
        </p>
      </div>

      <CustomForm
        initialValues={loginInitialValues}
        onSubmit={login}
        fields={loginFields}
        btnText="Sign in"
      />
    </>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
