import React from 'react';
import { Routes, Route } from 'react-router-dom';
import KidsHeader from './KidsHeader';
import KidsFooter from './KidsFooter';
import KidsHome from './KidsHome';
import KidsCareers from './KidsCareers';
import KidsAbout from './KidsAbout';
import KidsCoding from './KidsCoding';
import KidsRobotics from './KidsRobotics';
import KidsUpcoming from './KidsUpcoming';

const KidsLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <KidsHeader />
      <div className="pt-20"> {/* Adjust padding here */}
        <Routes>
          <Route path="/" element={<KidsHome />} />
          <Route path="/about" element={<KidsAbout />} />
          <Route path="/coding" element={<KidsCoding />} />
          <Route path="/robotics" element={<KidsRobotics />} />
          <Route path="/upcoming" element={<KidsUpcoming />} />
          <Route path="/careers" element={<KidsCareers />} />
        </Routes>
      </div>
      <KidsFooter />
    </div>
  );
};

export default KidsLayout;
