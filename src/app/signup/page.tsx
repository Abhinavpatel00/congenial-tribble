import { login, signup } from '../login/actions';

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 flex items-center justify-center">
      <div className="bg-white/90 backdrop-blur-lg p-10 rounded-lg shadow-2xl max-w-lg w-full">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Sign Up</h2>
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
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
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
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              formAction={signup}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-8 text-sm text-gray-600 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-red-600 hover:text-red-800 font-semibold transition duration-300 ease-in-out">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

