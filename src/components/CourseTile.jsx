import React from 'react';
import { Link } from 'react-router-dom';

const CourseTile = ({ title, duration, description, outcomes, topics, isOpen, onClick, nextStartDate }) => {
  return (
    <div className="mb-4 bg-white p-4 rounded shadow-md transition-transform transform hover:scale-102 cursor-pointer" onClick={onClick}>
      <h3 className="text-xl font-bold text-theme-color1 mb-2">{title}</h3>
      <p className="text-md text-theme-color3 mb-2"><strong>Duration:</strong> {duration}</p>
      <p className="text-md text-theme-color3 mb-2"><strong>Description:</strong> {description}</p>
      <p className="text-md text-theme-color3 mb-2"><strong>Outcomes:</strong> {outcomes}</p>
      <p className="text-md text-theme-color3 mb-2"><strong>Next Start Date:</strong> {nextStartDate.toDateString()}</p>
      {isOpen && (
        <div>
          <h4 className="text-lg font-semibold text-theme-color1 mt-4">Topics Covered:</h4>
          <ul className="list-disc list-inside text-theme-color3">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
          <Link to="/contact" className="mt-4 inline-block bg-theme-color1 text-white px-4 py-2 rounded hover:bg-theme-color2 hover:text-theme-color1">
            Enrol
          </Link>
        </div>
      )}
    </div>
  );
};

export default CourseTile;
