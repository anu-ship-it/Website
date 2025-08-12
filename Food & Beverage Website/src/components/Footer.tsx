import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-600 mb-4">FoodHub</h3>
            <p className="text-gray-300 mb-6">
              Your favorite food delivery service bringing delicious meals right to your doorstep.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-600 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-600 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-600 transition-colors">Partner with Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-600 transition-colors">Safety</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-600" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-600" />
                <span className="text-gray-300">support@foodhub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-600" />
                <span className="text-gray-300">123 Food Street, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 FoodHub. All rights reserved. Made with ❤️ for food lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;