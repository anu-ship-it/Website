import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageCircle, Pill } from 'lucide-react';

export const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    medicineNeeded: '',
    urgency: 'normal',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Medicine Inquiry</h2>
          <p className="text-xl text-gray-600">Can't find what you need? Let us help you find the right medicine.</p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-4">Your inquiry has been submitted successfully.</p>
              <p className="text-sm text-gray-500">Our healthcare team will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="medicineNeeded" className="block text-sm font-medium text-gray-700 mb-2">
                    <Pill className="w-4 h-4 inline mr-1" />
                    Medicine Needed
                  </label>
                  <input
                    type="text"
                    id="medicineNeeded"
                    name="medicineNeeded"
                    required
                    value={formData.medicineNeeded}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="Enter medicine name or description"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  >
                    <option value="low">Low Priority</option>
                    <option value="normal">Normal</option>
                    <option value="high">High Priority</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="sms">Text Message</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageCircle className="w-4 h-4 inline mr-1" />
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  placeholder="Please provide any additional details about your medicine needs, dosage requirements, or any specific questions you have..."
                />
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                <h4 className="font-medium text-sky-800 mb-2">What happens next?</h4>
                <ul className="text-sm text-sky-700 space-y-1">
                  <li>• Our healthcare team will review your inquiry</li>
                  <li>• We'll contact you within 24 hours</li>
                  <li>• We'll help you find the medicine you need</li>
                  <li>• Urgent requests are prioritized and handled immediately</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-4 px-6 rounded-lg hover:bg-sky-700 transition-colors font-medium flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};