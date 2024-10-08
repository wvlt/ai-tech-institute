import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-theme-color1 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="AI Tech Institute Logo" className="h-10 mr-3" />
          <div className="text-2xl font-bold text-white">AI Tech Institute</div>
        </Link>
        <nav className="flex space-x-6">
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="text-white hover:text-theme-color2">Our Programs</button>
            {isDropdownOpen && (
              <div className="absolute bg-white shadow-md rounded mt-2 w-48">
                <Link
                  to="/kids-programs"
                  className="block px-4 py-2 text-theme-color1 hover:bg-theme-color2 hover:text-white"
                >
                  Kids Programs
                </Link>
                <Link
                  to="/all-programs"
                  className="block px-4 py-2 text-theme-color1 hover:bg-theme-color2 hover:text-white"
                >
                  All Programs
                </Link>
              </div>
            )}
          </div>
          <Link to="/about" className="text-white hover:text-theme-color2">About</Link>
          <Link to="/contact" className="text-white hover:text-theme-color2">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
