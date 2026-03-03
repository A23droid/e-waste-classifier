// NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-semibold text-gray-900 mb-3">Suggestions:</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Check the URL for typos
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Return to the homepage
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Try our waste classification tool
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            to="/classify"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Try Classification
          </Link>
        </div>
      </div>
    </div>
  );
}