import InputField from './InputField';

const FormStep = ({ step, formSteps }) => {
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