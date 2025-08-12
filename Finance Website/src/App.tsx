import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  Building, 
  CreditCard, 
  Shield, 
  Calculator, 
  Bitcoin,
  BarChart3,
  Users,
  Award,
  Globe,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', topic: '', message: '' });
  };

  const financeCategories = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Personal Finance",
      description: "Budgeting, saving strategies, and personal financial planning",
      topics: ["Budgeting", "Emergency Funds", "Debt Management", "Retirement Planning"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Investment",
      description: "Stock market insights, portfolio management, and investment strategies",
      topics: ["Stock Analysis", "Portfolio Diversification", "Risk Management", "Market Trends"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Corporate Finance",
      description: "Business financing, capital structure, and corporate financial analysis",
      topics: ["Capital Budgeting", "Financial Analysis", "Mergers & Acquisitions", "Valuation"]
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Market Analysis",
      description: "Economic indicators, market research, and financial forecasting",
      topics: ["Economic Indicators", "Market Research", "Technical Analysis", "Forecasting"]
    },
    {
      icon: <Bitcoin className="w-8 h-8" />,
      title: "Cryptocurrency",
      description: "Digital assets, blockchain technology, and crypto investment strategies",
      topics: ["Bitcoin", "Altcoins", "Blockchain", "DeFi"]
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Banking",
      description: "Banking services, loans, mortgages, and financial products",
      topics: ["Savings Accounts", "Mortgages", "Business Loans", "Credit Cards"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Insurance",
      description: "Risk management through various insurance products and strategies",
      topics: ["Life Insurance", "Health Insurance", "Property Insurance", "Investment Insurance"]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Tax Planning",
      description: "Tax optimization strategies and compliance guidance",
      topics: ["Tax Optimization", "Deductions", "Business Taxes", "Estate Planning"]
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "50K+", label: "Active Users" },
    { icon: <Award className="w-8 h-8" />, value: "15+", label: "Years Experience" },
    { icon: <Globe className="w-8 h-8" />, value: "100+", label: "Countries Served" },
    { icon: <BarChart3 className="w-8 h-8" />, value: "$2B+", label: "Assets Managed" }
  ];

  const featuredArticles = [
    {
      title: "2024 Investment Outlook: Navigating Market Volatility",
      excerpt: "Expert insights on positioning your portfolio for success in an uncertain market environment.",
      category: "Investment",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Personal Finance Fundamentals: Building Wealth from Ground Up",
      excerpt: "Essential strategies for creating a solid financial foundation and achieving long-term prosperity.",
      category: "Personal Finance",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Corporate Finance Revolution: Digital Transformation Impact",
      excerpt: "How technology is reshaping corporate financial management and decision-making processes.",
      category: "Corporate Finance",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <TrendingUp className="w-8 h-8 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900">FinanceHub</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-blue-600 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#categories" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Categories</a>
                <a href="#insights" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Insights</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="text-blue-600 block px-3 py-2 text-base font-medium">Home</a>
                <a href="#categories" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Categories</a>
                <a href="#insights" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Insights</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Complete
              <span className="block text-blue-200">Finance Resource</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover comprehensive financial insights, expert guidance, and personalized solutions to achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Explore Categories
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
                Get Expert Advice
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-100 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance Categories */}
      <section id="categories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Finance Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of financial topics and resources tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financeCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <div className="text-blue-600 mb-4 group-hover:text-blue-700 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                <div className="space-y-2">
                  {category.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center text-sm text-gray-500">
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />
                      {topic}
                    </div>
                  ))}
                </div>
                <button className="mt-6 text-blue-600 font-semibold flex items-center hover:text-blue-700 transition-colors group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="insights" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Financial Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with expert analysis, market trends, and actionable financial advice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 group">
                <div className="overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-600 text-sm font-semibold bg-blue-100 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700 transition-colors group">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Empowering Your Financial Journey
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                At FinanceHub, we believe everyone deserves access to comprehensive financial education and expert guidance. Our mission is to democratize financial knowledge and help you make informed decisions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Content</h4>
                    <p className="text-gray-600 text-sm">Curated by certified financial professionals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Trusted Platform</h4>
                    <p className="text-gray-600 text-sm">Secure and reliable financial insights</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Community Driven</h4>
                    <p className="text-gray-600 text-sm">Join thousands of financially savvy individuals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Global Reach</h4>
                    <p className="text-gray-600 text-sm">Serving clients worldwide with local expertise</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Financial team"
                className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get Personalized Financial Advice</h2>
            <p className="text-xl text-blue-100">
              Have a specific finance question? Our experts are here to help you find the right solution.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="topic" className="block text-sm font-semibold text-gray-700 mb-2">
                  Finance Topic *
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select a finance topic</option>
                  <option value="personal-finance">Personal Finance</option>
                  <option value="investment">Investment Strategy</option>
                  <option value="corporate-finance">Corporate Finance</option>
                  <option value="market-analysis">Market Analysis</option>
                  <option value="cryptocurrency">Cryptocurrency</option>
                  <option value="banking">Banking & Loans</option>
                  <option value="insurance">Insurance Planning</option>
                  <option value="tax-planning">Tax Planning</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Question *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                  placeholder="Describe your finance question or situation in detail..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 transform hover:scale-105"
              >
                Get Expert Advice
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Ways to Reach Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-3 text-blue-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <span>experts@financehub.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                  <span>New York, NY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-blue-400 mr-2" />
                <span className="text-2xl font-bold">FinanceHub</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner in financial education and wealth management. Empowering you to make informed financial decisions.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#categories" className="hover:text-white transition-colors">Finance Categories</a></li>
                <li><a href="#insights" className="hover:text-white transition-colors">Market Insights</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Investment Advisory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financial Planning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Risk Assessment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio Management</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Financial Calculator</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Data</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Educational Videos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FinanceHub. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;