import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa'; // Down arrow icon

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle the dropdown open/close on click
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-theme-color1 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="AI Tech Institute Logo" className="h-10 mr-3" />
          <div className="text-2xl font-bold text-white">AI Tech Institute</div>
        </Link>
        <nav className="flex space-x-6 items-center">
          {/* Our Programs with dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="text-white hover:text-theme-color2 flex items-center"
            >
              Our Programs <FaChevronDown className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div
                className="absolute left-0 mt-1 bg-white shadow-md rounded w-48 z-20"
                style={{ transition: 'all 0.3s ease' }}
              >
                <Link
                  to="/kids-programs"
                  className="block px-4 py-2 text-theme-color1 hover:bg-theme-color1 hover:text-white"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Kids Programs
                </Link>
                <Link
                  to="/all-programs"
                  className="block px-4 py-2 text-theme-color1 hover:bg-theme-color1 hover:text-white"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  All Programs
                </Link>
              </div>
            )}
          </div>

          {/* Courses Link */}
          <Link to="/courses" className="text-white hover:text-theme-color2">Courses</Link>

          {/* About Link */}
          <Link to="/about" className="text-white hover:text-theme-color2">About</Link>

          {/* Contact Link */}
          <Link to="/contact" className="text-white hover:text-theme-color2">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
