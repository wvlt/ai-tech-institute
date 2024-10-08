import React from 'react';
import { Link } from 'react-router-dom';

const KidsHeader = () => {
  return (
    <header className="bg-kids-header p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/kids-programs" className="flex items-center">
          <img src="/logo_kids_v1.0.png" alt="AI Tech Institute Logo" className="h-10 mr-3" />
          <div className="text-2xl font-bold text-kids-accent">TechTykes</div>
        </Link>
        <nav className="flex space-x-4">
          <Link to="/kids-programs/coding" className="text-kids-accent">Coding</Link>
          <Link to="/kids-programs/robotics" className="text-kids-accent">Robotics</Link>
          <Link to="/kids-programs/upcoming" className="text-kids-accent">Upcoming</Link>
          <Link to="/kids-programs/about" className="text-kids-accent">About</Link>
          <Link to="/kids-programs/careers" className="text-kids-accent">Careers</Link>
        </nav>
      </div>
    </header>
  );
};

export default KidsHeader;
