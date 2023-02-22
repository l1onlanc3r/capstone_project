import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Control({
  page,
  length,
  step,
  setStep,
  isValid,
  dirty,
  isSubmitting,
}) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 footer flex items-center lg:flex-row sm:flex-col mx-auto justify-center py-5 w-full"
      style={{ backgroundColor: '#F4F3F6' }}
    >
      <div className="progress_bar mx-5 sm:w-64 flex items-center">
        <div
          className="relative w-full h-2 rounded-full flex-1"
          style={{
            backgroundColor: '#EDE8E3',
          }}
        >
          <div
            className="absolute top-0 left-0 h-2 bg-green-500 rounded-full"
            style={{
              width: `${(page / length) * 100}%`,
            }}
          />
        </div>
        <p className="text-xs mx-1 font-medium" style={{ color: '#757575' }}>
          {`${page}/${length}`}
        </p>
      </div>

      <div className="progress_bar mx-5 sm:w-64">
        {page === length ? (
          <button
            id="btnFinish"
            type="submit"
            disabled
            className="btn rounded w-full"
          >
            Finish
          </button>
        ) : (
          <button
            id="btnContinue"
            type="button"
            disabled={!(isValid && dirty) || isSubmitting}
            className="btn rounded w-full"
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
}

// {/* !(isValid && dirty) || isSubmitting */}

Control.propTypes = {
  page: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  dirty: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default memo(Control);
