import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaBars } from 'react-icons/fa'; // Down arrow and hamburger icons

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Toggle the dropdown open/close on click
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Toggle the mobile menu open/close
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close the dropdown and mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dropdown if clicked outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      // Close mobile menu if clicked outside and not on the hamburger icon
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
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
        <nav className="hidden md:flex space-x-6 items-center">
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

          {/* Other links */}
          <Link to="/courses" className="text-white hover:text-theme-color2">Courses</Link>
          <Link to="/about" className="text-white hover:text-theme-color2">About</Link>
          <Link to="/contact" className="text-white hover:text-theme-color2">Contact</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden bg-white shadow-md p-4 absolute w-full left-0 top-full z-20"
          ref={mobileMenuRef}
        >
          <Link
            to="/kids-programs"
            className="block px-4 py-2 text-theme-color1 hover:bg-theme-color1 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kids Programs
          </Link>
          <Link
            to="/all-programs"
            className="block px-4 py-2 text-theme-color1 hover:bg-theme-color1 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            All Programs
          </Link>
          <Link
            to="/courses"
            className="block px-4 py-2 text-theme-color1 hover:bg-theme-color1 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Courses
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-theme-color1 hover:bg-theme-color1 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-theme-color1 hover:bg-theme-color1 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
