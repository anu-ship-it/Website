import React from 'react';
import { Play, Info, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-300 text-sm">4.8/5 Rating</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Stream Your
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Favorite </span>
            Entertainment
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Discover thousands of movies, TV shows, and exclusive content. From blockbuster hits to indie gems, find your next binge-worthy obsession.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Start Watching</span>
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2">
              <Info className="h-5 w-5" />
              <span>More Info</span>
            </button>
          </div>

          <div className="flex items-center space-x-8 mt-12 text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-sm">Movies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5K+</div>
              <div className="text-sm">TV Shows</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1M+</div>
              <div className="text-sm">Happy Users</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;