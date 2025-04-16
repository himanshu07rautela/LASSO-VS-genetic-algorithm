import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-primary-600">
            CVD Detection Research
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-600 rounded-lg transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-gray-600 rounded-lg transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-gray-600 rounded-lg transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary-600">
              Home
            </Link>
            <Link to="/results" className="text-gray-600 hover:text-primary-600">
              Results
            </Link>
            <Link to="/methodology" className="text-gray-600 hover:text-primary-600">
              Methodology
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary-600">
              About
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            md:hidden 
            absolute 
            top-16 
            left-0 
            right-0 
            bg-white 
            shadow-lg 
            transition-all 
            duration-300 
            ease-in-out
            transform
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
            z-50
          `}
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-primary-600 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/results" 
              className="text-gray-600 hover:text-primary-600 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Results
            </Link>
            <Link 
              to="/methodology" 
              className="text-gray-600 hover:text-primary-600 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Methodology
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-primary-600 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 