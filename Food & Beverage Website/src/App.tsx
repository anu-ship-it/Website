import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RestaurantList from './components/RestaurantList';
import Cart from './components/Cart';
import FeedbackForm from './components/FeedbackForm';
import Footer from './components/Footer';
import { Restaurant, CartItem, FeedbackData } from './types';
import { restaurants } from './data/restaurants';

function App() {
  const [selectedLocation, setSelectedLocation] = useState('New York');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesLocation = restaurant.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || restaurant.cuisine === selectedCategory;
    
    return matchesLocation && matchesSearch && matchesCategory;
  });

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item => item.id === id ? { ...item, quantity } : item)
      );
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleFeedbackSubmit = (feedback: FeedbackData) => {
    // In a real app, this would send to a backend
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback! We appreciate your input.');
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
        cartItemCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <Hero
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      
      <RestaurantList
        restaurants={filteredRestaurants}
        onAddToCart={addToCart}
        searchTerm={searchTerm}
        selectedLocation={selectedLocation}
      />
      
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
      
      <Footer />
      
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartItemQuantity}
        onRemoveItem={removeFromCart}
        total={cartTotal}
      />
    </div>
  );
}

export default App;