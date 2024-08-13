import React from 'react';

const CourseCard = ({ course, isOpen, onClick }) => {
  return (
    <div className="mb-4 bg-white p-4 rounded shadow-md transition-transform transform hover:scale-105 cursor-pointer" onClick={onClick}>
      <h3 className="text-xl font-bold text-theme-color1 mb-2">{course.title}</h3>
      <p className="text-md text-theme-color3 mb-2"><strong>Duration:</strong> {course.duration}</p>
      <p className="text-md text-theme-color3 mb-2"><strong>Next Start Date:</strong> {new Date(course.nextStartDate).toDateString()}</p>
      <p className="text-md text-theme-color3 mb-2"><strong>Cost:</strong> {course.cost}</p>
      {isOpen && (
        <div>
          <p className="text-md text-theme-color3 mb-2"><strong>Description:</strong> {course.description}</p>
          <p className="text-md text-theme-color3 mb-2"><strong>Outcomes:</strong> {course.outcomes}</p>
          <h4 className="text-lg font-semibold text-theme-color1 mt-4">Topics Covered:</h4>
          <ul className="list-disc list-inside text-theme-color3">
            {course.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
          <button className="bg-theme-color1 text-white px-4 py-2 mt-4 rounded hover:bg-theme-color2 hover:text-theme-color1">Enroll</button>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
