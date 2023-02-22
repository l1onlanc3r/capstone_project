import React, { useState, memo } from 'react';
import { Form } from 'formik';
import PropTypes from 'prop-types';
import Control from '../Control';

function FormStepper({
  children,
  length,
  isValid,
  dirty,
  isSubmitting,
  handleSubmit,
  user,
}) {
  const stepsArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentStep = stepsArray[step];
  const page = step + 1;

  return (
    <Form id="quizForm" className="m-auto" onSubmit={handleSubmit}>
      <input type="hidden" name="userId" value={user.user.id} />
      {currentStep}
      <Control
        page={page}
        length={length}
        step={step}
        setStep={setStep}
        isValid={isValid}
        dirty={dirty}
        isSubmitting={isSubmitting}
      />
    </Form>
  );
}

FormStepper.propTypes = {
  children: PropTypes.node.isRequired,
  length: PropTypes.number.isRequired,
  isValid: PropTypes.bool.isRequired,
  dirty: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default memo(FormStepper);
