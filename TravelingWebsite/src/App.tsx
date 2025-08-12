import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HotelBooking from './components/HotelBooking';
import VehicleBooking from './components/VehicleBooking';
import TripInquiry from './components/TripInquiry';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HotelBooking />
      <VehicleBooking />
      <TripInquiry />
      <Footer />
    </div>
  );
}

export default App;