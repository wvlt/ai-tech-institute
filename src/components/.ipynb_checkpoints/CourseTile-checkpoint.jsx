import React from 'react';
import { Link } from 'react-router-dom';

const CourseTile = ({ title, duration, description, outcomes, topics, isOpen, onClick, nextStartDate }) => {
  return (
    <div className="mb-4 p-4 bg-white rounded shadow-md hover:bg-yellowCream transition cursor-pointer" onClick={onClick}>
      <h3 className="text-xl font-bold text-green mb-2 flex justify-between items-center">
        {title}
        <span className="text-sm font-normal text-gray-600">Next cohort: {nextStartDate}</span>
      </h3>
      <p className="text-md text-green">{duration}</p>
      {isOpen && (
        <>
          <p className="text-md text-gray-800">{description}</p>
          <p className="text-md text-gray-800 font-bold">Outcomes:</p>
          <p className="text-md text-gray-800">{outcomes}</p>
          <p className="text-md text-gray-800 font-bold">Topics:</p>
          <ul className="list-disc list-inside text-gray-800">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
          <Link to={`/contact?course=${encodeURIComponent(title)}`}>
            <button className="mt-4 bg-green text-white px-4 py-2 rounded hover:bg-yellowCream hover:text-green">Enroll Now</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CourseTile;
