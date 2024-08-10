import React, { useState } from 'react';

const courses = [
  { title: 'AI and Data Science Fundamentals', duration: '24 weeks', nextStartDate: 'September 1, 2024' },
  { title: 'AI Engineering Advanced', duration: '12 weeks', nextStartDate: 'October 15, 2024' },
  { title: 'Python Developer Course', duration: '12 weeks', nextStartDate: 'October 15, 2024' },
  { title: 'ML Deployment Advanced', duration: '12 weeks', nextStartDate: 'November 5, 2024' }
];

const RegistrationForm = ({ selectedCourse }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    course: selectedCourse || courses[0].title,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Add form submission logic here
  };

  return (
    <form className="bg-gray-100 p-6 rounded shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Register Your Interest</h2>
      <div className="mb-4">
        <label className="block text-green mb-2" htmlFor="name">Name</label>
        <input className="w-full p-2 border rounded" type="text" id="name" name="name" value={formState.name} onChange={handleChange} required />
      </div>
      <div className="mb-4">
        <label className="block text-green mb-2" htmlFor="email">Email</label>
        <input className="w-full p-2 border rounded" type="email" id="email" name="email" value={formState.email} onChange={handleChange} required />
      </div>
      <div className="mb-4">
        <label className="block text-green mb-2" htmlFor="phone">Phone</label>
        <input className="w-full p-2 border rounded" type="tel" id="phone" name="phone" value={formState.phone} onChange={handleChange} required />
      </div>
      <div className="mb-4">
        <label className="block text-green mb-2" htmlFor="course">Course</label>
        <select className="w-full p-2 border rounded" id="course" name="course" value={formState.course} onChange={handleChange} required>
          {courses.map((course, index) => (
            <option key={index} value={course.title}>{course.title}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-green mb-2" htmlFor="message">Message</label>
        <textarea className="w-full p-2 border rounded" id="message" name="message" value={formState.message} onChange={handleChange} required></textarea>
      </div>
      <button className="bg-green text-white px-4 py-2 rounded hover:bg-yellowCream">Submit</button>
    </form>
  );
};

export default RegistrationForm;
