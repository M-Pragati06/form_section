import { useField } from 'formik';

const InputField = ({ label, type, options, ...props }) => {
  const [field, meta] = useField(props);

  if (type === 'select') {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <select
          {...field}
          {...props}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
            meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
          }`}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {meta.touched && meta.error ? (
          <div className="text-red-500 text-sm mt-1">{meta.error}</div>
        ) : null}
      </div>
    );
  }

  if (type === 'checkbox') {
    return (
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            {...field}
            {...props}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-700">{label}</span>
        </label>
        {meta.touched && meta.error ? (
          <div className="text-red-500 text-sm mt-1">{meta.error}</div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        {...field}
        {...props}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
          meta.touched && meta.error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputField;