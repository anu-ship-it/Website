import React from 'react';
import { Heart, Clock, Shield } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Health, Our Priority
            <span className="block text-sky-600 mt-2">24/7 Medicine Support</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access quality medicines anytime, anywhere. Our dedicated healthcare team ensures you get the right medication with professional support around the clock.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
            <p className="text-gray-600">Order medicines anytime, day or night. We're always here for your health needs.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h3>
            <p className="text-gray-600">All medicines are sourced from certified manufacturers and thoroughly verified.</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600">Professional healthcare team ready to assist with your medicine inquiries.</p>
          </div>
        </div>
      </div>
    </section>
  );
};