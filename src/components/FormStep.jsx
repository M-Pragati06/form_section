import InputField from './InputField';

const FormStep = ({ step, formSteps }) => {
  // This component renders the fields for the current step of the form.
  // It takes the current step number and the form steps data as props.
  return (
    <div className="space-y-4">
      {formSteps[step - 1].fields.map((field) => (
        <InputField
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          options={field.options}
        />
      ))}
    </div>
  );
};

export default FormStep;