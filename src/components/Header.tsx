
import React from 'react';
import { BookOpen, Home, GraduationCap, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useAuth } from './AuthProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="bg-conservation-green text-white py-4 shadow-md">
      <div className="nptel-container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <GraduationCap size={28} />
            <Link to="/" className="text-xl font-bold">Conservation Economics</Link>
          </div>
          <nav className="flex items-center space-x-2">
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

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:bg-conservation-green-dark">
                    <User size={18} />
                    <span className="ml-2 hidden md:inline-block">{user.email?.split('@')[0]}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="text-red-500 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild variant="ghost" className="text-white hover:bg-conservation-green-dark">
                <Link to="/auth">
                  <User size={18} />
                  <span className="ml-2">Sign In</span>
                </Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
