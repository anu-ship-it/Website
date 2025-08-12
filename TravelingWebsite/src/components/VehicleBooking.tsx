import React, { useState } from 'react';
import { Users, Fuel, Cog, Shield } from 'lucide-react';

const VehicleBooking = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const vehicles = [
    {
      id: 1,
      name: 'BMW X5',
      category: 'luxury',
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      price: 89,
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['GPS Navigation', 'Premium Sound', 'Leather Seats', 'Climate Control']
    },
    {
      id: 2,
      name: 'Toyota Camry',
      category: 'standard',
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      price: 45,
      image: 'https://images.pexels.com/photos/1719649/pexels-photo-1719649.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['GPS Navigation', 'Bluetooth', 'USB Ports', 'Air Conditioning']
    },
    {
      id: 3,
      name: 'Ford Transit Van',
      category: 'van',
      passengers: 12,
      transmission: 'Manual',
      fuel: 'Diesel',
      price: 75,
      image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Large Capacity', 'GPS Navigation', 'Bluetooth', 'Air Conditioning']
    },
    {
      id: 4,
      name: 'Tesla Model S',
      category: 'electric',
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Electric',
      price: 95,
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Autopilot', 'Premium Sound', 'Supercharging', 'Premium Interior']
    },
    {
      id: 5,
      name: 'Honda Civic',
      category: 'economy',
      passengers: 5,
      transmission: 'Manual',
      fuel: 'Petrol',
      price: 32,
      image: 'https://images.pexels.com/photos/1690688/pexels-photo-1690688.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Fuel Efficient', 'Bluetooth', 'USB Ports', 'Air Conditioning']
    },
    {
      id: 6,
      name: 'Mercedes S-Class',
      category: 'luxury',
      passengers: 5,
      transmission: 'Automatic',
      fuel: 'Petrol',
      price: 120,
      image: 'https://images.pexels.com/photos/1779871/pexels-photo-1779871.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Chauffeur Service', 'Premium Sound', 'Massage Seats', 'Champagne Bar']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'economy', label: 'Economy' },
    { value: 'standard', label: 'Standard' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'electric', label: 'Electric' },
    { value: 'van', label: 'Van' }
  ];

  const filteredVehicles = selectedCategory === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === selectedCategory);

  return (
    <section id="vehicles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Vehicle Rentals</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our extensive fleet of premium vehicles for every journey
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-sky-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white px-3 py-1 rounded-full shadow-md">
                    <span className="text-sm font-semibold text-gray-700 capitalize">{vehicle.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-500">${vehicle.price}</div>
                    <div className="text-sm text-gray-500">per day</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{vehicle.passengers} Passengers</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Cog className="h-4 w-4 mr-2" />
                    <span className="text-sm">{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Fuel className="h-4 w-4 mr-2" />
                    <span className="text-sm">{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Shield className="h-4 w-4 mr-2" />
                    <span className="text-sm">Insured</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleBooking;