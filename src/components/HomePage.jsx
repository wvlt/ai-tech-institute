import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/image_1.jpeg'; // Import the image

const HomePage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center bg-yellowCream p-6 rounded shadow-md">
        <h1 className="text-4xl font-bold text-green mb-4">Welcome to AI Tech Institute</h1>
        <p className="text-lg text-green mb-6">Learn AI from the experts at all levels, from beginner to advanced. Join our bootcamps, skill-up sessions, and short courses to master AI skills.</p>
        <Link to="/contact">
          <button className="bg-green text-white px-4 py-2 rounded hover:bg-yellowCream hover:text-green">Get Started</button>
        </Link>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-green mb-4">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/courses#bootcamps" className="block p-6 bg-white rounded shadow-md hover:bg-yellowCream">
            <h3 className="text-xl font-bold text-green mb-2">24-Week Bootcamps</h3>
            <p>Immersive programs for in-depth learning.</p>
          </Link>
          <Link to="/courses#skillups" className="block p-6 bg-white rounded shadow-md hover:bg-yellowCream">
            <h3 className="text-xl font-bold text-green mb-2">12-Week Skill-ups</h3>
            <p>Advance your AI skills.</p>
          </Link>
          <Link to="/courses#shortcourses" className="block p-6 bg-white rounded shadow-md hover:bg-yellowCream">
            <h3 className="text-xl font-bold text-green mb-2">12-Week Short Courses</h3>
            <p>Quick learning programs.</p>
          </Link>
        </div>
      </section>

      <section className="mt-12 flex flex-col md:flex-row bg-white p-6 rounded shadow-md">
        <div className="md:w-1/3">
          <img src={image1} alt="Course Delivery" className="w-full h-auto rounded" />
        </div>
        <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
          <h2 className="text-2xl font-semibold text-green mb-4">Course Delivery Methods</h2>
          <p className="text-lg text-green">
            At AI Tech Institute, we offer flexible course delivery methods to suit your learning preferences and schedule. Our courses can be taken:
          </p>
          <ul className="list-disc list-inside text-lg text-green mt-4">
            <li><strong>Online:</strong> Participate from anywhere in the world with our comprehensive online courses.</li>
            <li><strong>In-person:</strong> Join us at our campus for face-to-face learning and hands-on experience.</li>
            <li><strong>Hybrid:</strong> Enjoy the best of both worlds with our hybrid model, combining online and in-person sessions.</li>
          </ul>
          <p className="text-lg text-green mt-4">
            Our goal is to provide a flexible and supportive learning environment that meets the needs of all our students.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
