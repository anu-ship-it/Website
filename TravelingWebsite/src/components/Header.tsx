import React, { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Hotels', 'Vehicles', 'Custom Trips', 'About', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-sky-500" />
            <span className="text-2xl font-bold text-gray-900">WanderLux</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(index === 0 ? 'hotels' : index === 1 ? 'vehicles' : index === 2 ? 'trip-inquiry' : 'about')}
                className="text-gray-700 hover:text-sky-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-sky-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="py-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(index === 0 ? 'hotels' : index === 1 ? 'vehicles' : index === 2 ? 'trip-inquiry' : 'about')}
                  className="block w-full text-left text-gray-700 hover:text-sky-600 px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;