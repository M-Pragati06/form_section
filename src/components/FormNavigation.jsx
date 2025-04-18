const FormNavigation = ({
    currentStep,
    totalSteps,
    onPrevious,
    isValid,
    isSubmitting,
  }) => {
    // form navigation component
    // This component handles the navigation between steps in a multi-step form.
    return (
      <div className="flex justify-between mt-6">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={onPrevious}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Previous
          </button>
        ) : (
          <div></div>
        )}
  
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            currentStep < totalSteps
              ? 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500'
              : 'bg-green-500 hover:bg-green-600 focus:ring-green-500'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {currentStep < totalSteps
            ? 'Next'
            : isSubmitting
            ? 'Submitting...'
            : 'Submit'}
        </button>
      </div>
    );
  };
  
  export default FormNavigation;