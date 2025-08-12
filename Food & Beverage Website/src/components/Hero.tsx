import React from 'react';
import { Search } from 'lucide-react';

interface HeroProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const Hero: React.FC<HeroProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}) => {
  const categories = ['All', 'Italian', 'Chinese', 'Mexican', 'American', 'Japanese'];

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Delicious Food, Delivered Fast
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Discover amazing restaurants and order your favorite meals with just a few clicks
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search restaurants, cuisines, or dishes..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold">1000+</div>
            <div className="opacity-90">Restaurants</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50K+</div>
            <div className="opacity-90">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold">15 min</div>
            <div className="opacity-90">Avg Delivery</div>
          </div>
          <div>
            <div className="text-3xl font-bold">4.8★</div>
            <div className="opacity-90">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;