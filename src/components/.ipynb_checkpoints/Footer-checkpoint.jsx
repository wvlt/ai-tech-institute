import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-theme-color1 text-theme-color2 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© 2024 AI Tech Institute. All rights reserved.</p>
        <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
          <p className="mb-2 md:mb-0"><strong>Phone:</strong> 0422 222 707</p>
          <p className="mb-2 md:mb-0"><strong>Email:</strong> <a href="mailto:info@aitechinstitute.io" className="text-theme-color2 hover:text-theme-color3">info@aitechinstitute.io</a></p>
          <a href="https://www.linkedin.com/company/104118811/admin/dashboard/" className="hover:text-theme-color3" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
