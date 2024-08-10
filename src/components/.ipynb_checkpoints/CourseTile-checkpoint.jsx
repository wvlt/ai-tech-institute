import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseTile = ({ title, duration, description, outcomes, topics, isOpen, onClick, nextStartDate }) => {
  const navigate = useNavigate();

  const handleEnrollClick = (e) => {
    e.stopPropagation();
    navigate('/contact', { state: { title, duration, nextStartDate } });
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mb-4 cursor-pointer hover:bg-yellowCream transition duration-200" onClick={onClick}>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-green">{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-md text-gray-600">Duration: {duration}</p>
        <p className="text-md text-gray-600">Next cohort: {nextStartDate}</p>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className="text-md mb-4">{description}</p>
          <ul className="list-disc list-inside mb-4">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
          <p>{outcomes}</p>
          <button className="bg-green text-white px-4 py-2 rounded hover:bg-yellowCream mt-4" onClick={handleEnrollClick}>
            Enroll Now
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseTile;
