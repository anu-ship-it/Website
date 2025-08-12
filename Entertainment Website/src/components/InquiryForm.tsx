import React, { useState } from 'react';
import { Send, User, Mail, MessageCircle, Film, Check, Star, Calendar, Clock, Sparkles } from 'lucide-react';

const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    showTitle: '',
    genre: '',
    priority: '',
    releaseYear: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', showTitle: '', genre: '', priority: '', releaseYear: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  if (isSubmitted) {
    return (
      <section id="request" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-16 text-center shadow-2xl">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/25 animate-bounce">
                <Check className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-spin">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
            </div>
            <h3 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Request Submitted Successfully!
            </h3>
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
              Thank you for your request! Our content team will review your submission and work on adding your requested show to our platform. 
              You'll receive an email update within 24-48 hours.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-8 text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24-48h</div>
                <div className="text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-sm">Shows Added</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="request" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/30 mb-6">
            <Sparkles className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Content Request</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Request Your 
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Dream Show</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Can't find what you're looking for? Our content team is always working to expand our library. 
            Tell us what you'd love to watch and we'll make it happen.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 md:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <span>Personal Information</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-gray-300 text-sm font-semibold mb-3 transition-colors group-focus-within:text-purple-400">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className={`absolute left-4 top-4 h-5 w-5 transition-all duration-300 ${
                      focusedField === 'name' ? 'text-purple-400 scale-110' : 'text-gray-400'
                    }`} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                      className={`w-full bg-gray-800/50 border rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 transition-all duration-300 ${
                        focusedField === 'name' 
                          ? 'border-purple-500 ring-2 ring-purple-500/20 bg-gray-800/70' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-gray-300 text-sm font-semibold mb-3 transition-colors group-focus-within:text-purple-400">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-4 top-4 h-5 w-5 transition-all duration-300 ${
                      focusedField === 'email' ? 'text-purple-400 scale-110' : 'text-gray-400'
                    }`} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      className={`w-full bg-gray-800/50 border rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 transition-all duration-300 ${
                        focusedField === 'email' 
                          ? 'border-purple-500 ring-2 ring-purple-500/20 bg-gray-800/70' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Details Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <span>Content Details</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Show Title */}
                <div className="group">
                  <label className="block text-gray-300 text-sm font-semibold mb-3 transition-colors group-focus-within:text-purple-400">
                    Show/Movie Title *
                  </label>
                  <div className="relative">
                    <Film className={`absolute left-4 top-4 h-5 w-5 transition-all duration-300 ${
                      focusedField === 'showTitle' ? 'text-purple-400 scale-110' : 'text-gray-400'
                    }`} />
                    <input
                      type="text"
                      name="showTitle"
                      value={formData.showTitle}
                      onChange={handleChange}
                      onFocus={() => handleFocus('showTitle')}
                      onBlur={handleBlur}
                      required
                      className={`w-full bg-gray-800/50 border rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 transition-all duration-300 ${
                        focusedField === 'showTitle' 
                          ? 'border-purple-500 ring-2 ring-purple-500/20 bg-gray-800/70' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="Name of the show or movie"
                    />
                  </div>
                </div>

                {/* Genre */}
                <div className="group">
                  <label className="block text-gray-300 text-sm font-semibold mb-3 transition-colors group-focus-within:text-purple-400">
                    Genre
                  </label>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    onFocus={() => handleFocus('genre')}
                    onBlur={handleBlur}
                    className={`w-full bg-gray-800/50 border rounded-xl px-4 py-4 text-white transition-all duration-300 ${
                      focusedField === 'genre' 
                        ? 'border-purple-500 ring-2 ring-purple-500/20 bg-gray-800/70' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <option value="">Select genre</option>
                    <option value="action">Action & Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="drama">Drama</option>
                    <option value="horror">Horror & Thriller</option>
                    <option value="sci-fi">Sci-Fi & Fantasy</option>
                    <option value="romance">Romance</option>
                    <option value="documentary">Documentary</option>
                    <option value="animation">Animation</option>
                    <option value="crime">Crime & Mystery</option>
                    <option value="family">Family & Kids</option>
                  </select>
                </div>

                {/* Priority */}
                <div className="group">
                  <label className="block text-gray-300 text-sm font-semibold mb-3 transition-colors group-focus-within:text-purple-400">
                    Priority Level
                  </label>
                  <div className="relative">
                    <Star className={`absolute left-4 top-4 h-5 w-5 transition-all duration-300 ${
                      focusedField === 'priority' ? 'text-purple-400 scale-110' : 'text-gray-400'
                    }`} />
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      onFocus={() => handleFocus('priority')}
                      onBlur={handleBlur}
                      className={`w-full bg-gray-800/50 border rounded-xl pl-12 pr-4 py-4 text-white transition-all duration-300 ${
                        focusedField === 'priority' 
                          ? 'border-purple-500 ring-2 ring-purple-500/20 bg-gray-800/70' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <option value="">Select priority</option>
                      <option value="low">Low - Whenever possible</option>
                      <option value="medium">Medium - Would love to see it</option>
                      <option value="high">High - Really want this!</option>
                      <option value="urgent">Urgent - My #1 request</option>
                    </select>
                  </div>
                </div>

                {/* Release Year */}
                <div className="group">
                  <label className="block text-gray-300 text-sm font-semibold mb-3 transition-colors group-focus-within:text-purple-400">
                    Release Year (Optional)
                  </label>
                  <div className="relative">
                    <Calendar className={`absolute left-4 top-4 h-5 w-5 transition-all duration-300 ${
                      focusedField === 'releaseYear' ? 'text-purple-400 scale-110' : 'text-gray-400'
                    }`} />
                    <input
                      type="number"
                      name="releaseYear"
                      value={formData.releaseYear}
                      onChange={handleChange}
                      onFocus={() => handleFocus('releaseYear')}
                      onBlur={handleBlur}
                      min="1900"
                      max="2025"
                      className={`w-full bg-gray-800/50 border rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 transition-all duration-300 ${
                        focusedField === 'releaseYear' 
                          ? 'border-purple-500 ring-2 ring-purple-500/20 bg-gray-800/70' 
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                      placeholder="e.g., 2023"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Details Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <span>Additional Details</span>
              </h3>

              <div className="group">
                <label className="block text-gray-300 text-sm font-semibold mb-3 transition-colors group-focus-within:text-purple-400">
                  Tell us more about your request
                </label>
                <div className="relative">
                  <MessageCircle className={`absolute left-4 top-4 h-5 w-5 transition-all duration-300 ${
                    focusedField === 'message' ? 'text-purple-400 scale-110' : 'text-gray-400'
                  }`} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    rows={5}
                    className={`w-full bg-gray-800/50 border rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 transition-all duration-300 resize-none ${
                      focusedField === 'message' 
                        ? 'border-purple-500 ring-2 ring-purple-500/20 bg-gray-800/70' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                    placeholder="Why do you want to watch this? Any specific details about the show/movie? Cast members, director, or anything else that might help us find it..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="pt-8 border-t border-gray-700/50">
              <div className="text-center space-y-6">
                <button
                  type="submit"
                  className="group relative bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-3 mx-auto overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Submit My Request</span>
                  <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                </button>
                
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                  By submitting this form, you agree to our content request policy. 
                  We'll do our best to add your requested content to our platform.
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Quick Response</h4>
            <p className="text-gray-400 text-sm">We review all requests within 24-48 hours</p>
          </div>
          
          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">High Success Rate</h4>
            <p className="text-gray-400 text-sm">95% of requested content gets added</p>
          </div>
          
          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-white font-semibold mb-2">Regular Updates</h4>
            <p className="text-gray-400 text-sm">New content added weekly based on requests</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;