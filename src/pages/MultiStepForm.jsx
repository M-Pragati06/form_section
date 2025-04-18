import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormStep from '../components/FormStep';
import FormNavigation from '../components/FormNavigation';
import ProgressBar from '../components/ProgressBar';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [formData, setFormData] = useState({});

  const formSteps = [
    {
      title: 'Personal Details',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      fields: [
        {
          name: 'name',
          label: 'Full Name',
          type: 'text',
          placeholder: 'John Doe',
          validation: Yup.string().required('Name is required'),
          icon: (
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          )
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'john@example.com',
          validation: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          icon: (
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'tel',
          placeholder: '1234567890',
          validation: Yup.string()
            .matches(/^[0-9+\-() ]+$/, 'Invalid phone number')
            .required('Phone is required'),
          icon: (
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          )
        },
      ],
    },
    {
      title: 'Address Details',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      fields: [
        {
          name: 'street',
          label: 'Street Address',
          type: 'text',
          placeholder: '123 Main St',
          validation: Yup.string().required('Street address is required'),
          icon: (
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )
        },
        {
          name: 'city',
          label: 'City',
          type: 'text',
          placeholder: 'New York',
          validation: Yup.string().required('City is required'),
          icon: (
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )
        },
        {
          name: 'zipCode',
          label: 'Zip Code',
          type: 'text',
          placeholder: '10001',
          validation: Yup.string()
            .matches(/^\d{5}(-\d{4})?$/, 'Invalid zip code')
            .required('Zip code is required'),
          icon: (
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          )
        },
      ],
    },
    {
      title: 'Preferences',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      fields: [
        {
          name: 'newsletter',
          label: 'Subscribe to newsletter',
          type: 'checkbox',
          validation: Yup.boolean(),
          description: 'Receive monthly updates and promotions'
        },
        {
          name: 'notifications',
          label: 'Enable notifications',
          type: 'checkbox',
          validation: Yup.boolean(),
          description: 'Get important account notifications'
        },
        {
          name: 'preferredContact',
          label: 'Preferred Contact Method',
          type: 'select',
          options: ['Email', 'Phone', 'Text'],
          validation: Yup.string().required('Please select a contact method'),
          icon: (
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          )
        },
      ],
    },
  ];

  const initialValues = formSteps.reduce((values, step) => {
    step.fields.forEach((field) => {
      if (field.type === 'checkbox') {
        values[field.name] = false;
      } else if (field.type === 'select') {
        values[field.name] = '';
      } else {
        values[field.name] = '';
      }
    });
    return values;
  }, {});

  const validationSchema = (currentStep) => {
    return Yup.object().shape(
      formSteps[currentStep - 1].fields.reduce((schema, field) => {
        if (field.validation) {
          schema[field.name] = field.validation;
        }
        return schema;
      }, {})
    );
  };

  const handleNext = (values, { setSubmitting, setTouched }) => {
    setFormData({ ...formData, ...values });
    setSubmitting(false);
    setTouched({});
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const finalData = { ...formData, ...values };
    console.log('Form submitted:', finalData);
    setSubmitting(false);
    setCompleted(true);
  };

  if (completed) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-300 hover:shadow-2xl">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6 animate-bounce">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Submission Successful!</h2>
            <p className="text-gray-600 mb-6 sm:mb-8">Thank you for completing the form. We'll get back to you soon.</p>
            <button
              onClick={() => {
                setStep(1);
                setCompleted(false);
                setFormData({});
              }}
              className="w-full max-w-xs mx-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
            >
              Start New Form
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-200 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 transform transition-all duration-300 hover:shadow-2xl">
        <ProgressBar currentStep={step} totalSteps={formSteps.length} />
        
        <div className="mb-6 sm:mb-8 text-center">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-100 text-indigo-600 mr-2 sm:mr-3">
              {formSteps[step - 1].icon}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{formSteps[step - 1].title}</h2>
          </div>
          <p className="text-gray-500 font-medium">Step {step} of {formSteps.length}</p>
        </div>
        
        <Formik
          initialValues={step === 1 ? initialValues : formData}
          validationSchema={validationSchema(step)}
          onSubmit={step === formSteps.length ? handleSubmit : handleNext}
        >
          {({ values, isValid, isSubmitting }) => (
            <Form>
              <FormStep step={step} formSteps={formSteps} />
              
              {step === formSteps.length && (
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 sm:mb-6 pb-2 border-b border-gray-200 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Summary
                  </h3>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-gray-200 shadow-inner">
                    {Object.entries({ ...formData, ...values }).map(([key, value]) => (
                      <div key={key} className="mb-3 sm:mb-4 last:mb-0 flex items-start py-2 sm:py-3 border-b border-gray-100 last:border-0">
                        <span className="font-medium text-gray-700 capitalize w-2/5 flex items-center text-sm sm:text-base">
                          {formSteps.flatMap(step => step.fields).find(f => f.name === key)?.icon && (
                            <span className="mr-2">
                              {formSteps.flatMap(step => step.fields).find(f => f.name === key)?.icon}
                            </span>
                          )}
                          {key.replace(/([A-Z])/g, ' $1')}
                        </span>
                        <span className="text-gray-600 flex-1 text-sm sm:text-base">
                          {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value.toString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <FormNavigation
                currentStep={step}
                totalSteps={formSteps.length}
                onPrevious={handlePrevious}
                isValid={isValid}
                isSubmitting={isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default MultiStepForm;