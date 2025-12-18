import { useNavigate } from 'react-router-dom';
import { logout } from '../auth';

const Error500 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-red-500 mb-4">500</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Internal Server Error</h2>
          <p className="text-gray-600 mb-2">
            Database connection failed. Unable to fetch sales data.
          </p>
          <p className="text-sm text-gray-500">
            The server encountered an internal error and was unable to complete your request.
          </p>
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-red-800">
            <strong>Error Details:</strong> Database connection timeout. Please try again later or contact system administrator.
          </p>
        </div>

        <button
          onClick={handleGoBack}
          className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          Return to Login
        </button>
      </div>
    </div>
  );
};

export default Error500;

