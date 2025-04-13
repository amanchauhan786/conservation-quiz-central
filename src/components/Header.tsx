
import React from 'react';
import { BookOpen, Home, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-conservation-green text-white py-4 shadow-md">
      <div className="nptel-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <GraduationCap size={28} />
            <Link to="/" className="text-xl font-bold">Conservation Economics</Link>
          </div>
          <nav className="flex space-x-2">
            <Button asChild variant="ghost" className="text-white hover:bg-conservation-green-dark">
              <Link to="/" className="flex items-center space-x-2">
                <Home size={18} />
                <span>Dashboard</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" className="text-white hover:bg-conservation-green-dark">
              <Link to="/learn" className="flex items-center space-x-2">
                <BookOpen size={18} />
                <span>Learn</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
