import React, { useState } from 'react';
import { 
  Factory, 
  Settings, 
  Shield, 
  Truck, 
  Users, 
  Award, 
  MapPin, 
  Phone, 
  Mail,
  Search,
  HelpCircle,
  ChevronDown,
  CheckCircle,
  Globe,
  Cog,
  Zap
} from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [helpMessage, setHelpMessage] = useState('');
  const [activeTab, setActiveTab] = useState('search');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'search') {
      console.log('Searching for:', searchQuery);
      alert(`Searching for: ${searchQuery}`);
    } else {
      console.log('Help request:', helpMessage);
      alert(`Help request submitted: ${helpMessage}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Factory className="h-8 w-8 text-blue-700 mr-2" />
              <span className="text-2xl font-bold text-gray-900">IndustrialTech Pro</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">Services</a>
              <a href="#industries" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">Industries</a>
              <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">About</a>
              <a href="#quality" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">Quality</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">Contact</a>
            </nav>
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium">
              Get Quote
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Industrial Manufacturing 
                <span className="text-orange-400"> Excellence</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Leading B2B supplier delivering precision manufacturing solutions, 
                custom fabrication, and industrial components to power your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg">
                  View Capabilities
                </button>
                <button className="border-2 border-blue-200 text-blue-100 px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                  Download Catalog
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-800 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">25+</div>
                    <div className="text-blue-200">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">500+</div>
                    <div className="text-blue-200">Global Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">ISO</div>
                    <div className="text-blue-200">Certified Quality</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">24/7</div>
                    <div className="text-blue-200">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Manufacturing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive manufacturing solutions designed to meet your industrial requirements with precision and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Cog className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Custom Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Precision custom manufacturing services tailored to your specifications with advanced CNC machining and fabrication.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  CNC Machining & Milling
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Metal Fabrication
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Prototype Development
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Industrial Components</h3>
              <p className="text-gray-600 mb-4">
                High-quality industrial components and parts for machinery, equipment, and production lines.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Bearings & Seals
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Hydraulic Components
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Electrical Components
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Assembly Services</h3>
              <p className="text-gray-600 mb-4">
                Complete assembly solutions from component sourcing to final product delivery and testing.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Sub-Assembly Production
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Quality Testing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Packaging & Logistics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted manufacturing partner across diverse industrial sectors with specialized expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                <Factory className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="font-semibold text-gray-900">Automotive</h3>
              <p className="text-sm text-gray-600 mt-1">Parts & Components</p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 transition-colors">
                <Zap className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Energy</h3>
              <p className="text-sm text-gray-600 mt-1">Power Generation</p>
            </div>

            <div className="text-center group">
              <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors">
                <Globe className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Aerospace</h3>
              <p className="text-sm text-gray-600 mt-1">Precision Parts</p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors">
                <Settings className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Mining</h3>
              <p className="text-sm text-gray-600 mt-1">Heavy Equipment</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About IndustrialTech Pro</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 25 years of experience in industrial manufacturing, we've built a reputation 
                for delivering exceptional quality and reliability. Our state-of-the-art facilities 
                and experienced team ensure precision in every project.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From small custom components to large-scale production runs, we combine traditional 
                craftsmanship with cutting-edge technology to meet the evolving needs of modern industry.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center mb-2">
                    <Users className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="font-semibold text-gray-900">Expert Team</span>
                  </div>
                  <p className="text-gray-600 text-sm">Skilled engineers and technicians</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <Shield className="h-5 w-5 text-blue-700 mr-2" />
                    <span className="font-semibold text-gray-900">Quality First</span>
                  </div>
                  <p className="text-gray-600 text-sm">ISO 9001 certified processes</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Advanced Technology</h4>
                    <p className="text-gray-600 text-sm">Latest CNC machines and automated systems</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">On-Time Delivery</h4>
                    <p className="text-gray-600 text-sm">98% on-time delivery rate with global logistics</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cost Efficiency</h4>
                    <p className="text-gray-600 text-sm">Competitive pricing without compromising quality</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">Round-the-clock technical support and assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section id="quality" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality & Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is backed by industry-leading certifications and quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
              <Award className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600">Quality Management System certified for consistent excellence</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center">
              <Shield className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AS9100D</h3>
              <p className="text-gray-600">Aerospace Quality Management System for critical applications</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center">
              <CheckCircle className="h-12 w-12 text-orange-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">IATF 16949</h3>
              <p className="text-gray-600">Automotive Quality Management System compliance</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Quality Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Design Review</h4>
                <p className="text-sm text-gray-600">Comprehensive design analysis and optimization</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Material Inspection</h4>
                <p className="text-sm text-gray-600">Rigorous incoming material quality verification</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">In-Process Control</h4>
                <p className="text-sm text-gray-600">Continuous monitoring throughout production</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">4</div>
                <h4 className="font-semibold text-gray-900 mb-2">Final Testing</h4>
                <p className="text-sm text-gray-600">Comprehensive testing before shipment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your manufacturing needs? Contact our expert team for consultation and quotes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <MapPin className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Main Facility</h3>
              <p className="text-gray-600">
                1250 Industrial Boulevard<br />
                Manufacturing District<br />
                Detroit, MI 48201
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Phone className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone & Fax</h3>
              <p className="text-gray-600">
                Phone: +1 (555) 123-4567<br />
                Fax: +1 (555) 123-4568<br />
                24/7 Emergency: +1 (555) 999-0000
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Mail className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                Sales: sales@industrialtech.com<br />
                Support: support@industrialtech.com<br />
                Quotes: quotes@industrialtech.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Help Form */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Need Help or Information?</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Search our knowledge base or submit a help request. Our expert team is here to assist you.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="flex border-b border-gray-200 mb-8">
              <button
                className={`flex items-center px-6 py-3 font-semibold transition-colors ${
                  activeTab === 'search' 
                    ? 'text-blue-700 border-b-2 border-blue-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('search')}
              >
                <Search className="h-5 w-5 mr-2" />
                Search Topics
              </button>
              <button
                className={`flex items-center px-6 py-3 font-semibold transition-colors ${
                  activeTab === 'help' 
                    ? 'text-blue-700 border-b-2 border-blue-700' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('help')}
              >
                <HelpCircle className="h-5 w-5 mr-2" />
                Ask for Help
              </button>
            </div>

            <form onSubmit={handleFormSubmit}>
              {activeTab === 'search' ? (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="search" className="block text-lg font-semibold text-gray-900 mb-3">
                      What are you looking for?
                    </label>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="e.g., CNC machining capabilities, material specifications, delivery times..."
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Search our knowledge base for technical specifications, capabilities, and frequently asked questions.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button
                      type="button"
                      onClick={() => setSearchQuery('CNC machining capabilities')}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                    >
                      CNC Capabilities
                    </button>
                    <button
                      type="button"
                      onClick={() => setSearchQuery('material specifications')}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                    >
                      Materials
                    </button>
                    <button
                      type="button"
                      onClick={() => setSearchQuery('quality certifications')}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                    >
                      Certifications
                    </button>
                    <button
                      type="button"
                      onClick={() => setSearchQuery('delivery schedules')}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
                    >
                      Delivery
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg flex items-center justify-center"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Search Knowledge Base
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="help" className="block text-lg font-semibold text-gray-900 mb-3">
                      How can we help you?
                    </label>
                    <textarea
                      id="help"
                      value={helpMessage}
                      onChange={(e) => setHelpMessage(e.target.value)}
                      placeholder="Describe your manufacturing needs, technical questions, or any assistance you require. Our expert team will respond promptly."
                      rows={6}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none"
                    />
                    <p className="mt-2 text-sm text-gray-600">
                      Include project details, specifications, timeline, and any specific requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-lg flex items-center justify-center"
                  >
                    <HelpCircle className="h-5 w-5 mr-2" />
                    Submit Help Request
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Factory className="h-8 w-8 text-orange-400 mr-2" />
                <span className="text-xl font-bold">IndustrialTech Pro</span>
              </div>
              <p className="text-gray-400 mb-4">
                Leading manufacturing solutions provider with 25+ years of excellence in industrial production.
              </p>
              <div className="text-sm text-gray-400">
                ISO 9001:2015 | AS9100D | IATF 16949
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Custom Manufacturing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CNC Machining</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Metal Fabrication</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Assembly Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Quality Testing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Automotive</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Aerospace</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Energy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mining</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Medical Devices</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>1250 Industrial Boulevard</p>
                <p>Detroit, MI 48201</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Email: info@industrialtech.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 IndustrialTech Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;