import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Update the path

const Header = () => {
  return (
    <header className="bg-green shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="AI Tech Institute Logo" className="h-10 mr-3" />
          <div className="text-2xl font-bold text-white">AI Tech Institute</div>
        </Link>
        <nav className="flex space-x-6">
          <Link to="/" className="text-white hover:text-yellowCream">Home</Link>
          <Link to="/courses" className="text-white hover:text-yellowCream">Courses</Link>
          <Link to="/blog" className="text-white hover:text-yellowCream">Blog</Link>
          <Link to="/about" className="text-white hover:text-yellowCream">About</Link>
          <Link to="/contact" className="text-white hover:text-yellowCream">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
