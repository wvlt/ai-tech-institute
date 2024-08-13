import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ selectedCourse }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: selectedCourse || '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    try {
      await axios.post('http://localhost:5001/send-email', formData);
      setFormStatus('Enquiry sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('There was an error sending your enquiry. Please send us an email instead info@aitechinstitute.io');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register Your Interest</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-green font-bold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-green font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-green font-bold mb-2" htmlFor="course">Course</label>
          <select
            name="course"
            id="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select a course</option>
            <option value="24-Week Bootcamps">24-Week Bootcamps</option>
            <option value="12-Week Skill-ups">12-Week Skill-ups</option>
            <option value="12-Week Short Courses">12-Week Short Courses</option>
            <option value="1-Day Courses">1-Day Courses</option>
            <option value="1-Week Courses">1-Week Courses</option>
            <option value="6-Week Courses">6-Week Courses</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-green font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-green text-white px-4 py-2 rounded hover:bg-yellowCream hover:text-green">Send Enquiry</button>
      </form>
      {formStatus && <p className="mt-4 text-green">{formStatus}</p>}
    </div>
  );
};

export default RegistrationForm;
