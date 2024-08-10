import React from 'react';
import { useLocation } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';

const ContactPage = () => {
  const location = useLocation();
  const { title } = location.state || {};

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-4 text-green">Contact Us</h1>
      <p className="text-lg mb-6 text-green">Feel free to reach out to us using the information below or fill out the form to register your interest.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
          <p className="mb-4"><strong>Phone:</strong> 0426026538</p>
          <p className="mb-4"><strong>Email:</strong> <a href="mailto:admin@aitechinstitute.io" className="text-blue-500">admin@aitechinstitute.io</a></p>
          <p className="mb-4"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/104118811/admin/dashboard/" className="text-blue-500" target="_blank" rel="noopener noreferrer">AI Tech Institute LinkedIn</a></p>
        </div>
        <RegistrationForm selectedCourse={title} />
      </div>
    </div>
  );
};

export default ContactPage;
