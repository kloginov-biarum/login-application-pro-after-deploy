import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authenticate, setCurrentUser } from '../auth';

const LoginPageAfterDeploy = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const user = authenticate(username, password);
      
      if (user) {
        setIsLoading(true);
        setCurrentUser(user);
        
        // Wait 37 seconds before navigation
        await new Promise(resolve => setTimeout(resolve, 37000));
        
        setIsLoading(false);
        
        // Navigate based on role
        switch (user.role) {
          case 'user':
            navigate('/user');
            break;
          case 'trainer':
            navigate('/trainer');
            break;
          case 'administrator':
            navigate('/admin');
            break;
          case 'salesperson':
            navigate('/sales');
            break;
          default:
            navigate('/');
        }
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      // Handle authentication errors (e.g., database connection issues)
      setIsLoading(false);
      setError(err instanceof Error ? err.message : 'Authentication failed. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Elite Fitness</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {isLoading ? (
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center py-12">
              <div className="relative w-16 h-16 mb-4">
                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary-200 rounded-full"></div>
                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-lg font-semibold text-gray-700 mb-2">Loading...</p>
              <p className="text-sm text-gray-500">Please wait while we authenticate your credentials</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="Enter your username"
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="Enter your password"
                required
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPageAfterDeploy;

