import React from 'react';
import { MapPin, ShoppingCart, User } from 'lucide-react';

interface HeaderProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  selectedLocation,
  onLocationChange,
  cartItemCount,
  onCartClick,
}) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-600">FoodHub</h1>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin className="h-5 w-5 text-orange-600" />
              <select
                value={selectedLocation}
                onChange={(e) => onLocationChange(e.target.value)}
                className="bg-transparent border-none outline-none cursor-pointer font-medium hover:text-orange-600 transition-colors"
              >
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Miami">Miami</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors">
              <User className="h-5 w-5" />
              <span className="hidden md:inline">Sign In</span>
            </button>
            
            <button
              onClick={onCartClick}
              className="relative flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden md:inline">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;