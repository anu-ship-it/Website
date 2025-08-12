import React, { useState } from 'react';
import { Search, Menu, X, Play, Star } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
              <Play className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">StreamVibe</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#movies" className="text-gray-300 hover:text-white transition-colors">Movies</a>
            <a href="#shows" className="text-gray-300 hover:text-white transition-colors">TV Shows</a>
            <a href="#genres" className="text-gray-300 hover:text-white transition-colors">Genres</a>
            <a href="#request" className="text-gray-300 hover:text-white transition-colors">Request</a>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              <Search className="h-5 w-5" />
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#movies" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Movies</a>
              <a href="#shows" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">TV Shows</a>
              <a href="#genres" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Genres</a>
              <a href="#request" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">Request</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;