import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Subjects from './components/Subjects';
import Teachers from './components/Teachers';
import Testimonials from './components/Testimonials';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Subjects />
      <Teachers />
      <Testimonials />
      <InquiryForm />
      <Footer />
    </div>
  );
}

export default App;