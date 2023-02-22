import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CustomForm from '../../components/CustomForm';
import { registerFields, registerInitialValues } from './registerFields';

function Register({ register }) {
  //  const { register } = useAuthContext();

  return (
    <>
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Register an account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          or{' '}
          <Link
            to="/auth"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Log-in here
          </Link>
        </p>
      </div>

      <CustomForm
        initialValues={registerInitialValues}
        onSubmit={register}
        fields={registerFields}
        btnText="Sign Up"
      />
    </>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
