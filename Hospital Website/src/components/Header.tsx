import React from 'react';
import { Phone, Clock, Shield } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-sky-600" />
            <h1 className="text-2xl font-bold text-gray-900">HealthCare Plus</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-emerald-600">
              <Clock className="w-5 h-5" />
              <span className="text-sm font-medium">24/7 Available</span>
            </div>
            <div className="flex items-center space-x-2 text-sky-600">
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};