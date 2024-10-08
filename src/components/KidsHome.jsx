import React from 'react';
import { Link } from 'react-router-dom';

const KidsHome = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-5xl font-bold mb-8 text-kids-header">Welcome to TechTykes!</h1>
      <p className="text-lg mb-8 text-gray-700">
        Dive into our fun and interactive coding and robotics courses designed especially for young tech enthusiasts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Coding Course Highlight */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <img
            src="/coding-course-image.png"
            alt="Coding Course"
            className="h-40 w-full object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2 text-kids-header">Coding Adventures</h2>
          <p className="text-gray-700 mb-4">
            Embark on a coding journey where you create your own games and bring stories to life through programming.
          </p>
          <Link
            to="/kids-programs/coding"
            className="inline-block bg-kids-accent text-black px-4 py-2 rounded hover:bg-yellow-400 transition duration-300"
          >
            Learn More
          </Link>
        </div>

        {/* Robotics Course Highlight */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <img
            src="/robotics-course-image.png"
            alt="Robotics Course"
            className="h-40 w-full object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2 text-kids-header">Robotics Fun</h2>
          <p className="text-gray-700 mb-4">
            Build and program your own robots to navigate mazes, solve puzzles, and even compete in robot battles!
          </p>
          <Link
            to="/kids-programs/robotics"
            className="inline-block bg-kids-accent text-black px-4 py-2 rounded hover:bg-yellow-400 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="bg-kids-accent p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <h2 className="text-3xl font-bold mb-4 text-black">Join Us and Start Your Tech Adventure!</h2>
        <p className="text-gray-700 mb-6">
          Register for our upcoming school holiday programs and see the exciting world of coding and robotics come to life.
        </p>
        <Link
          to="/kids-programs/upcoming"
          className="inline-block bg-kids-header text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          View Programs
        </Link>
      </div>
    </div>
  );
};

export default KidsHome;
