import React from 'react';
import { Play, Star, Clock, Calendar } from 'lucide-react';

interface ContentCardProps {
  title: string;
  genre: string;
  rating: number;
  duration: string;
  year: number;
  image: string;
  description: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ 
  title, 
  genre, 
  rating, 
  duration, 
  year, 
  image, 
  description 
}) => {
  return (
    <div className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors">
            <Play className="h-8 w-8 text-white" />
          </button>
        </div>

        {/* Rating badge */}
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 text-yellow-400 fill-current" />
          <span className="text-white text-sm font-medium">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-purple-400 text-sm font-medium">{genre}</span>
          <div className="flex items-center space-x-4 text-gray-400 text-xs">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{year}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-white text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ContentCard;