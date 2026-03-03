// // Navbar.jsx
// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { path: '/', label: 'Home' },
//     { path: '/classify', label: 'Classify' },
//     { path: '/about', label: 'About' }
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
//       <nav className="max-w-7xl mx-auto px-6" aria-label="Main navigation">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link 
//             to="/" 
//             className="flex items-center space-x-2.5 group"
//             aria-label="EcoClassify Home"
//           >
//             <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
//               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//               </svg>
//             </div>
//             <span className="text-lg font-semibold text-gray-900">EcoClassify</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
//                   isActive(link.path)
//                     ? 'text-emerald-700'
//                     : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
//                 }`}
//               >
//                 {link.label}
//                 {isActive(link.path) && (
//                   <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-600 rounded-full"></span>
//                 )}
//               </Link>
//             ))}
//             <Link
//               to="/classify"
//               className="ml-4 px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors"
//             >
//               Get Started
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors"
//             aria-label="Toggle navigation menu"
//             aria-expanded={isMobileMenuOpen}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isMobileMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div 
//           className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//             isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
//           }`}
//         >
//           <div className="py-4 space-y-1 border-t border-gray-200">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className={`block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
//                   isActive(link.path)
//                     ? 'bg-emerald-50 text-emerald-700'
//                     : 'text-gray-700 hover:bg-gray-50'
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <Link
//               to="/classify"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="block px-4 py-2.5 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors"
//             >
//               Get Started
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/classify', label: 'Classify' },
    { path: '/about', label: 'About' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-gray-900 font-semibold text-lg hover:text-emerald-600 transition-colors"
          >
            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>EcoClassify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}