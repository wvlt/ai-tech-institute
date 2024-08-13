import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-theme-color1 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="AI Tech Institute Logo" className="h-10 mr-3" />
          <div className="text-2xl font-bold text-theme-color2">AI Tech Institute</div>
        </div>
        <nav className="flex space-x-6">
          <Link to="/" className="text-theme-color2 hover:text-theme-color3">Home</Link>
          <Link to="/courses" className="text-theme-color2 hover:text-theme-color3">Courses</Link>
          <Link to="/about" className="text-theme-color2 hover:text-theme-color3">About</Link>
          <Link to="/contact" className="text-theme-color2 hover:text-theme-color3">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
