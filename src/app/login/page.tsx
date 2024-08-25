import { login, signup } from './actions';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-lg p-10 rounded-lg shadow-2xl max-w-lg w-full">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Log In</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              formAction={login}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Log in
            </button>
          </div>
        </form>
        <p className="mt-8 text-sm text-gray-600 text-center">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:text-blue-800 font-semibold transition duration-300 ease-in-out">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
