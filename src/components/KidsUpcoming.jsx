import React from 'react';

const KidsUpcoming = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-kids-header">Upcoming Programs</h1>
      <p className="mb-8 text-lg text-gray-700">
        Explore our school holiday courses for 2024 and 2025, designed to inspire and educate young minds in Coding and Robotics.
      </p>

      {/* 2024 School Holiday Program Schedule */}
      <h2 className="text-2xl font-semibold mb-4 text-kids-header">2024 School Holiday Program</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="min-w-full bg-white text-left text-sm border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-kids-accent text-black">
              <th className="py-3 px-4 font-semibold">Term Break</th>
              <th className="py-3 px-4 font-semibold">Course Dates</th>
              <th className="py-3 px-4 font-semibold">Course Details</th>
              <th className="py-3 px-4 font-semibold">Timing</th>
            </tr>
          </thead>
          <tbody>
            {[
              { break: "Term 3 Break", dates: "30 Sep - 2 Oct", details: "Coding Levels 1-3 / Robotics Levels 1-3", timing: "9:00 AM - 2:00 PM" },
              { break: "Term 4 Break", dates: "16-18 Dec", details: "Coding Levels 1-3 / Robotics Levels 1-3", timing: "9:00 AM - 2:00 PM" },
              { break: "Term 4 Break", dates: "19-21 Dec", details: "Coding Levels 1-3 / Robotics Levels 1-3", timing: "9:00 AM - 2:00 PM" },
            ].map((course, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-4">{course.break}</td>
                <td className="py-3 px-4">{course.dates}</td>
                <td className="py-3 px-4">{course.details}</td>
                <td className="py-3 px-4">{course.timing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 2025 School Holiday Program Schedule */}
      <h2 className="text-2xl font-semibold mb-4 text-kids-header">2025 School Holiday Program</h2>
      <div className="mb-8 overflow-x-auto">
        <table className="min-w-full bg-white text-left text-sm border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-kids-accent text-black">
              <th className="py-3 px-4 font-semibold">Term Break</th>
              <th className="py-3 px-4 font-semibold">Course Dates</th>
              <th className="py-3 px-4 font-semibold">Course Details</th>
              <th className="py-3 px-4 font-semibold">Timing</th>
            </tr>
          </thead>
          <tbody>
            {[
              { break: "Term 1 Break", dates: "14-16 Apr", details: "Coding Levels 1-3 / Robotics Levels 1-3", timing: "9:00 AM - 2:00 PM" },
              { break: "Term 1 Break", dates: "21-23 Apr", details: "Coding Levels 1-3 / Robotics Levels 1-3", timing: "9:00 AM - 2:00 PM" },
              { break: "Term 2 Break", dates: "8-10 Jul", details: "Coding Levels 1-3 / Robotics Levels 1-3", timing: "9:00 AM - 2:00 PM" },
              { break: "Term 2 Break", dates: "15-17 Jul", details: "Coding Levels 1-3 / Robotics Levels 1-3", timing: "9:00 AM - 2:00 PM" },
              { break: "Term 3 Break", dates: "30 Sep - 2 Oct", details: "Coding Levels 1-3 / Robotics Levels 1-3", timing: "9:00 AM - 2:00 PM" },
              { break: "Term 3 Break", dates: "7-9 Oct", details: "Coding Levels 1-3 / Robotics Levels 1-3", timing: "9:00 AM - 2:00 PM" },
              { break: "Term 4 Break", dates: "15-17 Dec", details: "Coding Levels 1-3 / Robotics Levels 1-3", timing: "9:00 AM - 2:00 PM" },
              { break: "Term 4 Break", dates: "18-20 Dec", details: "Coding Levels 1-3 / Robotics Levels 1-3", timing: "9:00 AM - 2:00 PM" },
            ].map((course, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-4">{course.break}</td>
                <td className="py-3 px-4">{course.dates}</td>
                <td className="py-3 px-4">{course.details}</td>
                <td className="py-3 px-4">{course.timing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-lg text-gray-700">
        For more details and course information, please contact us at 
        <a href="mailto:info@aitechinstitute.io" className="underline text-kids-accent ml-1">info@aitechinstitute.io</a>.
      </p>
      <p className="text-lg text-gray-700 mt-2">
        For the official state school term dates, refer to the 
        <a href="https://www.education.wa.edu.au/future-term-dates" target="_blank" rel="noopener noreferrer" className="underline text-kids-accent ml-1">Western Australian Government site</a>.
      </p>
    </div>
  );
};

export default KidsUpcoming;
