import React from 'react';
import { useLocation } from 'react-router-dom';

const EnrollPage = () => {
  const location = useLocation();
  console.log("Location state:", location.state); // Debugging log

  const { title, duration, nextStartDate } = location.state || { title: "No Title", duration: "No Duration", nextStartDate: "No Date" };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4 text-green">Enroll in {title}</h1>
      <p className="text-md mb-6 text-green">Duration: {duration}</p>
      <p className="text-md mb-6 text-green">Next Start Date: {nextStartDate}</p>
      <form className="bg-gray-100 p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-green mb-2" htmlFor="name">Name</label>
          <input className="w-full p-2 border rounded" type="text" id="name" name="name" required />
        </div>
        <div className="mb-4">
          <label className="block text-green mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 border rounded" type="email" id="email" name="email" required />
        </div>
        <div className="mb-4">
          <label className="block text-green mb-2" htmlFor="phone">Phone</label>
          <input className="w-full p-2 border rounded" type="tel" id="phone" name="phone" required />
        </div>
        <button className="bg-green text-white px-4 py-2 rounded hover:bg-yellowCream">Submit</button>
      </form>
    </div>
  );
};

export default EnrollPage;
