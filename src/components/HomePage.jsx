import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/FAN2016674.JPG';

const HomePage = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Find the best AI courses for your next leap...';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
      }
    }, 50); // Reduced interval time to 50ms for a faster typing effect
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <section className="hero-section bg-theme-color1 text-white py-20">
        <h1 className="text-5xl font-bold mb-4">{displayText}</h1>
        <p className="text-lg mb-8">Professional AI Builders Teaching You How to Build...</p>
        <Link to="/contact">
          <button className="bg-white text-theme-color1 px-6 py-3 rounded hover:bg-theme-color2 hover:text-theme-color1">Get Started</button>
        </Link>
      </section>

      <section className="mt-12 bg-white p-6 rounded shadow-md">
        <h2 className="text-4xl font-semibold text-theme-color3 mb-6">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/courses#one-day" className="block p-6 bg-white rounded shadow-md transform hover:scale-102 transition-transform duration-200">
            <h3 className="text-2xl font-bold text-theme-color1 mb-2">1-Day Crash Courses</h3>
            <p className="text-theme-color3">Intensive one-day sessions.</p>
          </Link>
          <Link to="/courses#one-week" className="block p-6 bg-white rounded shadow-md transform hover:scale-102 transition-transform duration-200">
            <h3 className="text-2xl font-bold text-theme-color1 mb-2">1-Week In-depth Courses</h3>
            <p className="text-theme-color3">Comprehensive one-week programs.</p>
          </Link>
          <Link to="/courses#six-week" className="block p-6 bg-white rounded shadow-md transform hover:scale-102 transition-transform duration-200">
            <h3 className="text-2xl font-bold text-theme-color1 mb-2">6-Week Courses</h3>
            <p className="text-theme-color3">Accelerated learning.</p>
          </Link>
          <Link to="/courses#twelve-week" className="block p-6 bg-white rounded shadow-md transform hover:scale-102 transition-transform duration-200">
            <h3 className="text-2xl font-bold text-theme-color1 mb-2">12-Week Advance Skills</h3>
            <p className="text-theme-color3">Advance your AI skills.</p>
          </Link>
          <Link to="/courses#twenty-four-week" className="block p-6 bg-white rounded shadow-md transform hover:scale-102 transition-transform duration-200">
            <h3 className="text-2xl font-bold text-theme-color1 mb-2">24-Week Bootcamps</h3>
            <p className="text-theme-color3">Immersive programs for in-depth learning.</p>
          </Link>
        </div>
      </section>

      <section className="mt-12 bg-white p-6 rounded shadow-md flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img src={image1} alt="Course Delivery" className="w-full h-auto rounded" />
        </div>
        <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0 text-left">
          <h2 className="text-3xl font-semibold text-theme-color1 mb-4">Course Delivery Methods</h2>
          <p className="text-lg text-theme-color3">
            At AI Tech Institute, we offer flexible course delivery methods to suit your learning preferences and schedule. Our courses can be taken:
          </p>
          <ul className="list-disc list-inside text-lg text-theme-color3 mt-4">
            <li><strong>Online:</strong> Participate from anywhere in the world with our comprehensive online courses.</li>
            <li><strong>In-person:</strong> Join us at our campus for face-to-face learning and hands-on experience.</li>
            <li><strong>Hybrid:</strong> Enjoy the best of both worlds with our hybrid model, combining online and in-person sessions.</li>
          </ul>
          <p className="text-lg text-theme-color3 mt-4">
            We provide a flexible and supportive learning environment that meets the needs of all our students.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
