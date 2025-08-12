import React, { useState } from 'react';
import ContentCard from './ContentCard';
import { Filter } from 'lucide-react';

const ContentShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content' },
    { id: 'movies', name: 'Movies' },
    { id: 'series', name: 'TV Series' },
    { id: 'documentaries', name: 'Documentaries' },
    { id: 'originals', name: 'Originals' }
  ];

  const content = [
    {
      title: "The Dark Knight",
      genre: "Action, Drama",
      rating: 9.0,
      duration: "2h 32m",
      year: 2008,
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological tests of his ability to fight injustice.",
      category: "movies"
    },
    {
      title: "Stranger Things",
      genre: "Sci-Fi, Horror",
      rating: 8.7,
      duration: "45m episodes",
      year: 2016,
      image: "https://images.pexels.com/photos/7991668/pexels-photo-7991668.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "A group of young friends witness supernatural forces and secret government exploits in their small town.",
      category: "series"
    },
    {
      title: "Planet Earth",
      genre: "Documentary",
      rating: 9.4,
      duration: "50m episodes",
      year: 2006,
      image: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "A groundbreaking series that takes you to the world's most spectacular natural locations.",
      category: "documentaries"
    },
    {
      title: "The Crown",
      genre: "Drama, History",
      rating: 8.6,
      duration: "1h episodes",
      year: 2016,
      image: "https://images.pexels.com/photos/16848461/pexels-photo-16848461.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Chronicles the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped Britain.",
      category: "originals"
    },
    {
      title: "Inception",
      genre: "Sci-Fi, Thriller",
      rating: 8.8,
      duration: "2h 28m",
      year: 2010,
      image: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task.",
      category: "movies"
    },
    {
      title: "Breaking Bad",
      genre: "Crime, Drama",
      rating: 9.5,
      duration: "47m episodes",
      year: 2008,
      image: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "A high school chemistry teacher turned methamphetamine producer partners with a former student.",
      category: "series"
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? content 
    : content.filter(item => item.category === activeCategory);

  return (
    <section id="content" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trending <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Content</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the most popular movies, series, and documentaries loved by millions worldwide
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <ContentCard key={index} {...item} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Load More Content
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;