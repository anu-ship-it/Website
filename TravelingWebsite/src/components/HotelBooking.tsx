import React, { useState } from 'react';
import { Star, MapPin, Wifi, Car, Utensils, Waves } from 'lucide-react';

const HotelBooking = () => {
  const [priceRange, setPriceRange] = useState('all');
  const [rating, setRating] = useState('all');

  const hotels = [
    {
      id: 1,
      name: 'Ocean View Resort',
      location: 'Maldives',
      rating: 5,
      price: 450,
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['Wifi', 'Pool', 'Restaurant', 'Parking'],
      description: 'Luxury beachfront resort with crystal clear waters'
    },
    {
      id: 2,
      name: 'Mountain Peak Lodge',
      location: 'Swiss Alps',
      rating: 4,
      price: 280,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['Wifi', 'Restaurant', 'Parking'],
      description: 'Cozy mountain retreat with breathtaking alpine views'
    },
    {
      id: 3,
      name: 'City Center Grand',
      location: 'New York, USA',
      rating: 4,
      price: 320,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['Wifi', 'Restaurant', 'Pool'],
      description: 'Modern luxury hotel in the heart of Manhattan'
    },
    {
      id: 4,
      name: 'Desert Oasis Spa',
      location: 'Dubai, UAE',
      rating: 5,
      price: 380,
      image: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800',
      amenities: ['Wifi', 'Pool', 'Restaurant', 'Parking'],
      description: 'Exclusive desert resort with world-class spa facilities'
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Wifi': return <Wifi className="h-4 w-4" />;
      case 'Pool': return <Waves className="h-4 w-4" />;
      case 'Restaurant': return <Utensils className="h-4 w-4" />;
      case 'Parking': return <Car className="h-4 w-4" />;
      default: return null;
    }
  };

  const filteredHotels = hotels.filter(hotel => {
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'budget' && hotel.price < 300) ||
      (priceRange === 'mid' && hotel.price >= 300 && hotel.price < 400) ||
      (priceRange === 'luxury' && hotel.price >= 400);
    
    const matchesRating = rating === 'all' || hotel.rating >= Number(rating);
    
    return matchesPrice && matchesRating;
  });

  return (
    <section id="hotels" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Luxury Hotels & Resorts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover exceptional accommodations in the world's most desirable destinations
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 bg-white rounded-xl shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
              >
                <option value="all">All Prices</option>
                <option value="budget">Budget ($100-299)</option>
                <option value="mid">Mid-range ($300-399)</option>
                <option value="luxury">Luxury ($400+)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Minimum Rating</label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
              >
                <option value="all">All Ratings</option>
                <option value="3">3+ Stars</option>
                <option value="4">4+ Stars</option>
                <option value="5">5 Stars</option>
              </select>
            </div>
          </div>
        </div>

        {/* Hotel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                  <div className="flex items-center space-x-1">
                    {[...Array(hotel.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-sky-600">${hotel.price}</div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{hotel.location}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{hotel.description}</p>
                
                <div className="flex items-center space-x-4 mb-6">
                  {hotel.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-1 text-gray-500">
                      {getAmenityIcon(amenity)}
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelBooking;