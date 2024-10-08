import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const KidsCareers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    // Prepare email data
    const emailData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // EmailJS configuration
    emailjs.send('service_ii7ap3b', 'template_nu5fi05', emailData, 'tf8sbyXSln9qtQFSQ')
      .then((result) => {
        console.log(result.text);
        setFormStatus('Application submitted successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        console.error('Error submitting application:', error);
        setFormStatus('There was an issue submitting your application. Please email us directly at info@aitechinstitute.io');
      });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-kids-header">Join the TechTykes Team</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="lg:w-1/2">
          <p className="text-lg mb-6 text-gray-700">
            At TechTykes, we believe in shaping the future of young minds through innovative and engaging educational experiences. 
            We’re looking for passionate tutors and mentors who want to inspire the next generation of tech enthusiasts.
          </p>
          
          <div className="bg-kids-accent p-6 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-black">Why Join Us?</h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>Work in a dynamic and inspiring environment where every day is a chance to make a difference.</li>
              <li>Engage with kids and help them explore the exciting world of coding, robotics, and AI.</li>
              <li>Flexible working hours and competitive compensation.</li>
              <li>Be part of a forward-thinking team backed by AI Tech Institute.</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-semibold mb-4 text-kids-header">Open Positions</h2>
          <p className="text-lg mb-6 text-gray-700">
            We are currently seeking tutors and mentors in the following areas:
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-12">
            <li>AI and Coding Basics for Kids</li>
            <li>Robotics Programming</li>
            <li>Game Development for Young Creators</li>
          </ul>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-kids-header">Contact Us</h2>
            <p className="mb-4 text-gray-700">
              If you're excited about joining our team, please email us at: 
              <a href="mailto:info@aitechinstitute.io" className="underline ml-1">info@aitechinstitute.io</a>.
            </p>
            <p className="mb-6 text-gray-700">
              Alternatively, fill out the form below, and we’ll get back to you!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-kids-accent focus:border-kids-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-kids-accent focus:border-kids-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-kids-accent focus:border-kids-accent"
                  placeholder="Tell us about yourself and why you’d like to join TechTykes."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-kids-header text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
              >
                Submit Application
              </button>
              {formStatus && <p className="mt-4 text-green-600">{formStatus}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsCareers;
