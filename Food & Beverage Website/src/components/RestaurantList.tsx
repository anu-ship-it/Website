import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import RestaurantModal from './RestaurantModal';
import { Restaurant, CartItem } from '../types';

interface RestaurantListProps {
  restaurants: Restaurant[];
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
  searchTerm: string;
  selectedLocation: string;
}

const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants,
  onAddToCart,
  searchTerm,
  selectedLocation,
}) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          {searchTerm || selectedLocation !== 'All' 
            ? `Results${searchTerm ? ` for "${searchTerm}"` : ''} in ${selectedLocation}`
            : 'Popular Restaurants'}
        </h2>
        <p className="text-gray-600">{restaurants.length} restaurants found</p>
      </div>

      {restaurants.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-gray-400 text-6xl mb-4">🍽️</div>
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">No restaurants found</h3>
          <p className="text-gray-500">Try adjusting your search or location filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onClick={() => setSelectedRestaurant(restaurant)}
            />
          ))}
        </div>
      )}

      {selectedRestaurant && (
        <RestaurantModal
          restaurant={selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
          onAddToCart={onAddToCart}
        />
      )}
    </div>
  );
};

export default RestaurantList;