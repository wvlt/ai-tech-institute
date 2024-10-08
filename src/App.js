import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import AllProgramsPage from './components/AllProgramsPage';
import Blog from './components/Blog';
import ContactPage from './components/ContactPage';
import CoursesPage from './components/CoursesPage';
import EnrollPage from './components/EnrollPage';
import Header from './components/Header';
import Footer from './components/Footer';
import KidsLayout from './components/KidsLayout';
import KidsHome from './components/KidsHome';
import KidsAbout from './components/KidsAbout';
import KidsCareers from './components/KidsCareers';
import KidsCoding from './components/KidsCoding';
import KidsRobotics from './components/KidsRobotics';
import KidsUpcoming from './components/KidsUpcoming';

const MainLayout = ({ children }) => (
  <>
    <Header />
    <div className="pt-16"> {/* Apply padding globally */}</div>
    <main>{children}</main>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          }
        />
        <Route
          path="/all-programs"
          element={
            <MainLayout>
              <AllProgramsPage />
            </MainLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <MainLayout>
              <Blog />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <ContactPage />
            </MainLayout>
          }
        />
        <Route
          path="/courses"
          element={
            <MainLayout>
              <CoursesPage />
            </MainLayout>
          }
        />
        <Route
          path="/enroll"
          element={
            <MainLayout>
              <EnrollPage />
            </MainLayout>
          }
        />

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
