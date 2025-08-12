import React from 'react';
import { X, Star, Clock, Truck, Plus } from 'lucide-react';
import { Restaurant, CartItem } from '../types';

interface RestaurantModalProps {
  restaurant: Restaurant;
  onClose: () => void;
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
}

const RestaurantModal: React.FC<RestaurantModalProps> = ({
  restaurant,
  onClose,
  onAddToCart,
}) => {
  const handleAddToCart = (menuItem: any) => {
    onAddToCart({
      id: menuItem.id,
      name: menuItem.name,
      price: menuItem.price,
      restaurantName: restaurant.name,
      image: menuItem.image,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{restaurant.name}</h2>
            <p className="text-gray-600 mb-4">{restaurant.cuisine} • {restaurant.location}</p>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="font-semibold">{restaurant.rating}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Clock className="h-5 w-5 text-gray-500" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Truck className="h-5 w-5 text-gray-500" />
                <span>${restaurant.deliveryFee.toFixed(2)} delivery</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Menu</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {restaurant.menu.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <p className="text-lg font-bold text-orange-600">${item.price.toFixed(2)}</p>
                    </div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg ml-4"
                    />
                  </div>
                  
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantModal;