
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-conservation-green text-white py-6 mt-12">
      <div className="nptel-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Conservation Economics</h3>
            <p className="text-sm opacity-75">NPTEL Quiz Platform - 2025</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm opacity-75">Developed by Aman Chauhan</p>
            <p className="text-sm opacity-75">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
