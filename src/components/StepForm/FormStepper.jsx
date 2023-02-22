import React, { useState, memo } from 'react';
import { Form } from 'formik';
import { Button, Stack, Step, StepLabel, Stepper } from '@mui/material';
import Control from './Control';

function FormStepper({
  children,
  length,
  isValid,
  dirty,
  isSubmitting,
  handleSubmit,
  checkAnswers,
  user,
}) {
  const stepsArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentStep = stepsArray[step];
  const page = step + 1;

  console.log('isValid: ', isValid);
  console.log('dirty: ', dirty);
  console.log('isSubmitting: ', isSubmitting);
  console.log('handleSubmit', handleSubmit);

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

export default memo(FormStepper);
