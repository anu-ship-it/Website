import React from 'react';
import { Shield, Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-sky-400" />
              <h3 className="text-xl font-bold">HealthCare Plus</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for 24/7 healthcare support and medicine delivery. Quality care when you need it most.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sky-400">Contact Info</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>info@healthcareplus.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>123 Health St, Medical City, MC 12345</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sky-400">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>24/7 Medicine Ordering</li>
              <li>Prescription Fulfillment</li>
              <li>Medicine Inquiries</li>
              <li>Healthcare Consultation</li>
              <li>Emergency Medicine</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sky-400">Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-medium">24/7 Available</span>
              </div>
              <p className="text-gray-300 text-xs">
                Medicine ordering and inquiries available around the clock for your convenience.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 HealthCare Plus. All rights reserved. | Licensed Healthcare Provider
          </p>
        </div>
      </div>
    </footer>
  );
};