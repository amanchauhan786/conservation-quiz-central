
import React from 'react';
import { Linkedin, Github } from 'lucide-react';

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
            <div className="flex justify-center md:justify-end space-x-4 mt-2">
              <a 
                href="https://www.linkedin.com/in/aman-chauhan-128552256" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/amanchauhan786" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
