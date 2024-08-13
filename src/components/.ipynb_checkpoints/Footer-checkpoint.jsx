import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-theme-color1 text-theme-color2 py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <p>© 2024 AI Tech Institute. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/company/104118811/admin/dashboard/" className="hover:text-theme-color3" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
