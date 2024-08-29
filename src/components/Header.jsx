import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <header className="bg-theme-color1 shadow-md fixed w-full z-10">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="AI Tech Institute Logo" className="h-10 mr-3" />
            <div className="text-2xl font-bold text-white">AI Tech Institute</div>
          </Link>
          <div className="flex items-center">
            <button 
              className="text-white md:hidden focus:outline-none mr-4" 
              onClick={toggleSearch}
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm0 0l7 7"
                />
              </svg>
            </button>
            <button 
              className="text-white md:hidden focus:outline-none" 
              onClick={toggleSidebar}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"></path>
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-theme-color2">Home</Link>
            <Link to="/courses" className="text-white hover:text-theme-color2">Courses</Link>
            <Link to="/about" className="text-white hover:text-theme-color2">About</Link>
            <Link to="/contact" className="text-white hover:text-theme-color2">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Sidebar for Menu */}
      <div 
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity md:hidden ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleSidebar}
      ></div>
      <div 
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md z-30 transform transition-transform md:hidden ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6">
          <button 
            className="text-black focus:outline-none" 
            onClick={toggleSidebar}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <nav className="mt-6">
            <Link to="/" className="block text-black py-2 hover:bg-gray-200" onClick={toggleSidebar}>Home</Link>
            <Link to="/courses" className="block text-black py-2 hover:bg-gray-200" onClick={toggleSidebar}>Courses</Link>
            <Link to="/about" className="block text-black py-2 hover:bg-gray-200" onClick={toggleSidebar}>About</Link>
            <Link to="/contact" className="block text-black py-2 hover:bg-gray-200" onClick={toggleSidebar}>Contact</Link>
          </nav>
        </div>
      </div>

      {/* Sidebar for Search */}
      <div 
        className={`fixed inset-0 z-20 bg-theme-color1 transition-transform ${isSearchOpen ? 'translate-y-0' : '-translate-y-full'} flex items-center justify-center`}
      >
        <div className="relative w-full max-w-md p-6">
          <button 
            className="absolute top-4 right-4 text-white focus:outline-none" 
            onClick={toggleSearch}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <input 
            type="text" 
            placeholder="Search for courses, subjects, resources, ..." 
            className="w-full px-4 py-2 text-sm text-gray-300 placeholder-gray-400 focus:outline-none bg-transparent border-b-2 border-gray-500"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
