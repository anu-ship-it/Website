import React, { useState } from 'react';
import { Search, Star, Download, Shield, Zap, Users, ArrowRight, Check, X } from 'lucide-react';

interface Software {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  downloads: string;
  image: string;
  featured: boolean;
  tags: string[];
}

const softwareData: Software[] = [
  {
    id: '1',
    name: 'PhotoMaster Pro',
    category: 'Design & Graphics',
    description: 'Professional photo editing software with AI-powered tools',
    price: 49.99,
    rating: 4.8,
    downloads: '2.3M',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300',
    featured: true,
    tags: ['AI', 'Photo Editing', 'Professional']
  },
  {
    id: '2',
    name: 'CodeFlow IDE',
    category: 'Development',
    description: 'Advanced integrated development environment for modern coding',
    price: 79.99,
    rating: 4.9,
    downloads: '1.8M',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=300',
    featured: true,
    tags: ['IDE', 'Coding', 'Productivity']
  },
  {
    id: '3',
    name: 'DataViz Analytics',
    category: 'Business & Finance',
    description: 'Powerful data visualization and business intelligence platform',
    price: 129.99,
    rating: 4.7,
    downloads: '890K',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=300',
    featured: false,
    tags: ['Analytics', 'Business', 'Data']
  },
  {
    id: '4',
    name: 'SecureVault',
    category: 'Security',
    description: 'Enterprise-grade password manager and security suite',
    price: 39.99,
    rating: 4.9,
    downloads: '3.1M',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=300',
    featured: true,
    tags: ['Security', 'Password', 'Enterprise']
  },
  {
    id: '5',
    name: 'VideoEdit Studio',
    category: 'Media & Entertainment',
    description: '4K video editing suite with professional-grade effects',
    price: 89.99,
    rating: 4.6,
    downloads: '1.2M',
    image: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=300',
    featured: false,
    tags: ['Video', 'Editing', '4K']
  },
  {
    id: '6',
    name: 'ProjectManager Elite',
    category: 'Productivity',
    description: 'Complete project management solution for teams',
    price: 59.99,
    rating: 4.8,
    downloads: '950K',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300',
    featured: false,
    tags: ['Project Management', 'Teams', 'Collaboration']
  }
];

const categories = [
  'All Categories',
  'Design & Graphics',
  'Development',
  'Business & Finance',
  'Security',
  'Media & Entertainment',
  'Productivity'
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [requestForm, setRequestForm] = useState({
    softwareName: '',
    category: '',
    description: '',
    budget: ''
  });

  const filteredSoftware = softwareData.filter(software => {
    const matchesSearch = software.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         software.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         software.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All Categories' || software.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredSoftware = softwareData.filter(software => software.featured);

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Software request submitted:', requestForm);
    // Reset form
    setRequestForm({ softwareName: '', category: '', description: '', budget: '' });
    alert('Thank you for your request! Our team will get back to you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <nav className="relative z-10 container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">SoftwareHub</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Browse</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Categories</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Support</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-white/80 hover:text-white transition-colors">Sign In</button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Discover Premium
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Software</span>
            </h1>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Access thousands of professional software tools. Pay only for what you use. 
              Start building amazing things today.
            </p>

            {/* Main Search */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for any software..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent text-white placeholder-white/60 px-12 py-4 rounded-xl focus:outline-none"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-white/10 text-white px-6 py-4 rounded-xl border border-white/20 focus:outline-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-900">
                      {category}
                    </option>
                  ))}
                </select>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5,000+</div>
              <div className="text-white/60">Software Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2.5M+</div>
              <div className="text-white/60">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/60">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/60">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Software */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Software</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Hand-picked premium tools trusted by professionals worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredSoftware.map((software) => (
              <div key={software.id} className="group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                  <div className="relative mb-6">
                    <img
                      src={software.image}
                      alt={software.name}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      FEATURED
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{software.name}</h3>
                    <p className="text-white/60 text-sm">{software.description}</p>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{software.rating}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/60 text-sm">
                      <Download className="w-4 h-4" />
                      <span>{software.downloads}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">${software.price}</div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200">
                      Get Access
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Software */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">All Software</h2>
            <p className="text-white/60 text-lg">Browse our complete collection of premium tools</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSoftware.map((software) => (
              <div key={software.id} className="group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-6">
                    <img
                      src={software.image}
                      alt={software.name}
                      className="w-full h-40 object-cover rounded-xl mb-4"
                    />
                    <div className="flex flex-wrap gap-2 mb-3">
                      {software.tags.map((tag) => (
                        <span key={tag} className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-2">{software.name}</h3>
                    <p className="text-white/60 text-sm mb-2">{software.description}</p>
                    <p className="text-blue-400 text-sm font-medium">{software.category}</p>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{software.rating}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/60 text-sm">
                      <Download className="w-4 h-4" />
                      <span>{software.downloads}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-white">${software.price}</div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors">
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-white/60 text-lg">Flexible pricing for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                <div className="text-4xl font-bold text-white mb-1">$9<span className="text-lg text-white/60">/month</span></div>
                <p className="text-white/60">Perfect for individuals</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-white">Access to 100+ tools</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-white">Email support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-white/60">Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500 rounded-2xl p-8 relative">
              <div className="absolute top-0 right-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold px-3 py-1 rounded-b-lg">
                POPULAR
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <div className="text-4xl font-bold text-white mb-1">$29<span className="text-lg text-white/60">/month</span></div>
                <p className="text-white/60">Best for professionals</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-white">Access to 1000+ tools</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-white">Priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-white">Custom integrations</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all">
                Get Pro
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-1">$99<span className="text-lg text-white/60">/month</span></div>
                <p className="text-white/60">For large teams</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-white">Unlimited access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-white">24/7 phone support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-white">Dedicated account manager</span>
                </li>
              </ul>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-20 bg-gradient-to-br from-black/40 to-blue-900/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Can't Find What You Need?</h2>
              <p className="text-white/60 text-lg">
                Tell us what software you're looking for and we'll help you find it or build it
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <form onSubmit={handleRequestSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Software Name</label>
                  <input
                    type="text"
                    value={requestForm.softwareName}
                    onChange={(e) => setRequestForm({...requestForm, softwareName: e.target.value})}
                    placeholder="What software are you looking for?"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Category</label>
                  <select
                    value={requestForm.category}
                    onChange={(e) => setRequestForm({...requestForm, category: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="" className="bg-gray-900">Select Category</option>
                    {categories.slice(1).map(category => (
                      <option key={category} value={category} className="bg-gray-900">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-white font-semibold mb-2">Description</label>
                  <textarea
                    value={requestForm.description}
                    onChange={(e) => setRequestForm({...requestForm, description: e.target.value})}
                    placeholder="Describe the features and functionality you need..."
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Budget Range</label>
                  <select
                    value={requestForm.budget}
                    onChange={(e) => setRequestForm({...requestForm, budget: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="" className="bg-gray-900">Select Budget</option>
                    <option value="0-50" className="bg-gray-900">$0 - $50</option>
                    <option value="50-100" className="bg-gray-900">$50 - $100</option>
                    <option value="100-500" className="bg-gray-900">$100 - $500</option>
                    <option value="500+" className="bg-gray-900">$500+</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Submit Request</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold text-white">SoftwareHub</span>
              </div>
              <p className="text-white/60 mb-4">
                Your trusted marketplace for premium software tools and professional applications.
              </p>
              <div className="flex space-x-4">
                <Shield className="w-5 h-5 text-white/60" />
                <Users className="w-5 h-5 text-white/60" />
                <Zap className="w-5 h-5 text-white/60" />
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Design & Graphics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business & Finance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>&copy; 2025 SoftwareHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;