import React, { useState } from 'react';
import { Menu, X, BookOpen, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-blue-700 mr-2" />
            <span className="text-2xl font-bold text-gray-900">LearnHub</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Home</a>
            <a href="#subjects" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Subjects</a>
            <a href="#teachers" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Teachers</a>
            <a href="#about" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">About</a>
            <a href="#inquiry" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-blue-700 hover:text-blue-800 font-medium transition-colors">Sign In</button>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Get Started
            </button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-blue-700">Home</a>
              <a href="#subjects" className="block py-2 text-gray-700 hover:text-blue-700">Subjects</a>
              <a href="#teachers" className="block py-2 text-gray-700 hover:text-blue-700">Teachers</a>
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-700">About</a>
              <a href="#inquiry" className="block py-2 text-gray-700 hover:text-blue-700">Contact</a>
              <div className="pt-2 space-y-2">
                <button className="block w-full text-left py-2 text-blue-700">Sign In</button>
                <button className="block w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;