// app/components/ErrorMessage.jsx
const ErrorMessage = ({ error, success }) => {
  return error ? (
    <p className="text-red-600 pt-2">{error}</p>
  ) : (
    <p className="text-green-600 pt-2">{success}</p>
  );
};

export default ErrorMessage;
