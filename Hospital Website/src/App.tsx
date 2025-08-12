import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MedicineOrdering } from './components/MedicineOrdering';
import { InquiryForm } from './components/InquiryForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <MedicineOrdering />
        <InquiryForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;