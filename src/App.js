import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import KidsLayout from './components/KidsLayout';
import KidsHome from './components/KidsHome';
import KidsCoding from './components/KidsCoding';
import KidsRobotics from './components/KidsRobotics';
import KidsUpcoming from './components/KidsUpcoming';
import KidsAbout from './components/KidsAbout';
import KidsCareers from './components/KidsCareers';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Kids Pages */}
        <Route path="/kids-programs/*" element={<KidsLayout />}>
          <Route index element={<KidsHome />} />
          <Route path="coding" element={<KidsCoding />} />
          <Route path="robotics" element={<KidsRobotics />} />
          <Route path="upcoming" element={<KidsUpcoming />} />
          <Route path="about" element={<KidsAbout />} />
          <Route path="careers" element={<KidsCareers />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
