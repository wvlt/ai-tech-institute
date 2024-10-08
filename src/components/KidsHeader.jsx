import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const KidsHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Toggle the mobile menu open/close
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close the mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
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
    <header className="bg-kids-header p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/kids-programs" className="flex items-center">
          <img src="/logo_kids_v1.0.png" alt="AI Tech Institute Logo" className="h-10 mr-3" />
          <div className="text-2xl font-bold text-kids-accent">TechTykes</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/kids-programs/coding" className="text-kids-accent">Coding</Link>
          <Link to="/kids-programs/robotics" className="text-kids-accent">Robotics</Link>
          <Link to="/kids-programs/upcoming" className="text-kids-accent">Upcoming</Link>
          <Link to="/kids-programs/about" className="text-kids-accent">About</Link>
          <Link to="/kids-programs/careers" className="text-kids-accent">Careers</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-kids-accent">
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
            to="/kids-programs/coding"
            className="block px-4 py-2 text-kids-header hover:bg-kids-header hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Coding
          </Link>
          <Link
            to="/kids-programs/robotics"
            className="block px-4 py-2 text-kids-header hover:bg-kids-header hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Robotics
          </Link>
          <Link
            to="/kids-programs/upcoming"
            className="block px-4 py-2 text-kids-header hover:bg-kids-header hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Upcoming
          </Link>
          <Link
            to="/kids-programs/about"
            className="block px-4 py-2 text-kids-header hover:bg-kids-header hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/kids-programs/careers"
            className="block px-4 py-2 text-kids-header hover:bg-kids-header hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Careers
          </Link>
        </div>
      )}
    </header>
  );
};

export default KidsHeader;
