import { Formik, Form, Field } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomForm({
  fields,
  btnText,
  // state,
  children,
  ...props
}) {
  console.log('props: ', props);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/', {
      replace: true,
      // state: {
      //  user: {
      //    name: 'Sherwin',
      //    age: 30,
      //   gender: 'male',
      // },
      // },
    });
  };

  return (
    <Formik {...props}>
      {({ isValid, dirty, isSubmitting, errors }) => {
        console.log('formik errors: ', errors);
        console.log('formik isSubmitting: ', isSubmitting);
        return (
          <Form className="mt-8 space-y-6">
            {errors.serverError && (
              <p className="text-red-500 text-center font-medium text-base">
                {errors.serverError}
              </p>
            )}
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              {fields.map((item) => (
                <Field key={item.name} {...item} />
              ))}
            </div>
            {children}
            <div className="flex ">
              <button
                type="button"
                onClick={goToHome}
                className="group relative flex-1 justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 mr-1 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!(dirty && isValid) || isSubmitting}
                className="group relative flex-1 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4  ml-1 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
              >
                {btnText}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
