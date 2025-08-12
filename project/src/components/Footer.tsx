import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">LearnHub</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Connecting students with expert teachers worldwide. Transform your learning experience 
              with personalized education tailored to your goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#subjects" className="text-gray-400 hover:text-white transition-colors">Subjects</a></li>
              <li><a href="#teachers" className="text-gray-400 hover:text-white transition-colors">Teachers</a></li>
              <li><a href="#inquiry" className="text-gray-400 hover:text-white transition-colors">Find a Teacher</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Subjects</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mathematics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Computer Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Languages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Test Prep</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">
                  123 Education Street<br />
                  Learning City, LC 12345<br />
                  United States
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <p className="text-gray-400">info@learnhub.com</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Support Hours</h4>
              <p className="text-gray-400 text-sm">
                Monday - Friday: 9 AM - 9 PM<br />
                Saturday - Sunday: 10 AM - 6 PM
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 LearnHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;