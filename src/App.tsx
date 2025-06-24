import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Music from './pages/Music';
import Events from './pages/Events';
import About from './pages/About';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <nav className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Nenes del Perreo
              </h1>
              
              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-md p-1"
                aria-label="Toggle mobile menu"
              >
                <span className={`block w-6 h-0.5 bg-white transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`} />
                <span className={`block w-6 h-0.5 bg-white transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`block w-6 h-0.5 bg-white transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`} />
              </button>

              {/* Desktop navigation */}
              <ul className="hidden md:flex space-x-8">
                <li>
                  <Link 
                    to="/" 
                    className="hover:text-yellow-300 transition duration-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/music" 
                    className="hover:text-yellow-300 transition duration-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Music
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/events" 
                    className="hover:text-yellow-300 transition duration-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="hover:text-yellow-300 transition duration-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile navigation */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-64 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              <ul className="space-y-1 pt-2">
                <li>
                  <Link 
                    to="/" 
                    onClick={closeMobileMenu} 
                    className="block py-3 px-4 hover:bg-white hover:bg-opacity-10 transition duration-200 rounded-md"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/music" 
                    onClick={closeMobileMenu} 
                    className="block py-3 px-4 hover:bg-white hover:bg-opacity-10 transition duration-200 rounded-md"
                  >
                    Music
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/events" 
                    onClick={closeMobileMenu} 
                    className="block py-3 px-4 hover:bg-white hover:bg-opacity-10 transition duration-200 rounded-md"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    onClick={closeMobileMenu} 
                    className="block py-3 px-4 hover:bg-white hover:bg-opacity-10 transition duration-200 rounded-md"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
