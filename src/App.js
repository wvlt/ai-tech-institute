import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="pt-16 flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
