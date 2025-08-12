import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentShowcase from './components/ContentShowcase';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <ContentShowcase />
      <InquiryForm />
      <Footer />
    </div>
  );
}

export default App;