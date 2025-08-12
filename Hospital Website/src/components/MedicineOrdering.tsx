import React, { useState } from 'react';
import { Search, ShoppingCart, Plus, Minus } from 'lucide-react';

interface Medicine {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  inStock: boolean;
}

const medicines: Medicine[] = [
  { id: 1, name: "Paracetamol 500mg", category: "Pain Relief", price: 12.99, description: "Effective pain and fever relief", inStock: true },
  { id: 2, name: "Amoxicillin 250mg", category: "Antibiotics", price: 25.50, description: "Broad-spectrum antibiotic", inStock: true },
  { id: 3, name: "Ibuprofen 400mg", category: "Pain Relief", price: 15.75, description: "Anti-inflammatory medication", inStock: true },
  { id: 4, name: "Cetirizine 10mg", category: "Allergies", price: 18.20, description: "Antihistamine for allergy relief", inStock: false },
  { id: 5, name: "Omeprazole 20mg", category: "Digestive", price: 22.90, description: "Acid reflux medication", inStock: true },
  { id: 6, name: "Metformin 500mg", category: "Diabetes", price: 19.99, description: "Type 2 diabetes medication", inStock: true },
];

const categories = ["All", "Pain Relief", "Antibiotics", "Allergies", "Digestive", "Diabetes"];

export const MedicineOrdering: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const filteredMedicines = medicines.filter(medicine => {
    const matchesSearch = medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         medicine.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || medicine.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (medicineId: number) => {
    setCart(prev => ({
      ...prev,
      [medicineId]: (prev[medicineId] || 0) + 1
    }));
  };

  const removeFromCart = (medicineId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[medicineId] > 1) {
        newCart[medicineId] -= 1;
      } else {
        delete newCart[medicineId];
      }
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [medicineId, quantity]) => {
      const medicine = medicines.find(m => m.id === parseInt(medicineId));
      return total + (medicine ? medicine.price * quantity : 0);
    }, 0);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Your Medicines</h2>
          <p className="text-xl text-gray-600">Browse our extensive catalog and order with confidence</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-sky-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        {getTotalItems() > 0 && (
          <div className="mb-8 bg-sky-50 border border-sky-200 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center space-x-4">
              <ShoppingCart className="w-5 h-5 text-sky-600" />
              <span className="text-sky-800 font-medium">
                {getTotalItems()} item(s) in cart - Total: ${getTotalPrice().toFixed(2)}
              </span>
              <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}

        {/* Medicine Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicines.map(medicine => (
            <div key={medicine.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{medicine.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    medicine.inStock ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {medicine.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                
                <p className="text-sm text-sky-600 font-medium mb-2">{medicine.category}</p>
                <p className="text-gray-600 mb-4 text-sm">{medicine.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900">${medicine.price}</span>
                  
                  {medicine.inStock ? (
                    <div className="flex items-center space-x-2">
                      {cart[medicine.id] ? (
                        <>
                          <button
                            onClick={() => removeFromCart(medicine.id)}
                            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-4 h-4 text-gray-600" />
                          </button>
                          <span className="font-medium text-gray-900 min-w-[20px] text-center">
                            {cart[medicine.id]}
                          </span>
                          <button
                            onClick={() => addToCart(medicine.id)}
                            className="w-8 h-8 rounded-full bg-sky-100 hover:bg-sky-200 flex items-center justify-center transition-colors"
                          >
                            <Plus className="w-4 h-4 text-sky-600" />
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => addToCart(medicine.id)}
                          className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium flex items-center space-x-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </button>
                      )}
                    </div>
                  ) : (
                    <button
                      disabled
                      className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed"
                    >
                      Out of Stock
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMedicines.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No medicines found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};