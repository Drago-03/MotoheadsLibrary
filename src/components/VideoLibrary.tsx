import React, { useState, useMemo } from 'react';
import { Play, Clock, Eye, ThumbsUp, Star, Filter, Search, User, CheckCircle } from 'lucide-react';
import { Video, ModificationCategory, VehicleType, SearchFilters } from '../types/marketplace';
import { sampleVideos, modificationCategories, vehicleTypes } from '../data/marketplace';

interface VideoLibraryProps {
  onVideoSelect: (video: Video) => void;
}

const VideoLibrary: React.FC<VideoLibraryProps> = ({ onVideoSelect }) => {
  const [filters, setFilters] = useState<Partial<SearchFilters>>({
    query: '',
    vehicleType: '',
    category: '',
    sortBy: 'newest'
  });
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');

  const filteredVideos = useMemo(() => {
    let filtered = sampleVideos.filter(video => {
      if (filters.query && !video.title.toLowerCase().includes(filters.query.toLowerCase()) &&
          !video.description.toLowerCase().includes(filters.query.toLowerCase()) &&
          !video.tags.some(tag => tag.toLowerCase().includes(filters.query.toLowerCase()))) {
        return false;
      }
      
      if (filters.vehicleType && video.vehicle.type.category !== filters.vehicleType) {
        return false;
      }
      
      if (filters.category && video.modificationCategory.id !== filters.category) {
        return false;
      }
      
      if (selectedDifficulty && video.difficulty !== selectedDifficulty) {
        return false;
      }
      
      return true;
    });

    // Sort videos
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'newest':
          return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
        case 'rating':
          return b.rating - a.rating;
        case 'relevance':
        default:
          return b.views - a.views;
      }
    });

    return filtered;
  }, [filters, selectedDifficulty]);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatViews = (views: number) => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-orange-500';
      case 'expert': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Modification Video Library</h1>
          <p className="text-gray-300">Learn from the pros with step-by-step tutorials</p>
        </div>

        {/* Filters */}
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-red-500/30">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search videos..."
                value={filters.query}
                onChange={(e) => setFilters({ ...filters, query: e.target.value })}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Vehicle Type */}
            <select
              value={filters.vehicleType}
              onChange={(e) => setFilters({ ...filters, vehicleType: e.target.value })}
              className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">All Vehicle Types</option>
              {vehicleTypes.filter(vt => vt.isActive).map(type => (
                <option key={type.id} value={type.category}>{type.name}</option>
              ))}
            </select>

            {/* Category */}
            <select
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">All Categories</option>
              {modificationCategories.map(category => (
                <optgroup key={category.id} label={category.name}>
                  {category.subcategories?.map(sub => (
                    <option key={sub.id} value={sub.id}>{sub.name}</option>
                  ))}
                </optgroup>
              ))}
            </select>

            {/* Sort */}
            <select
              value={filters.sortBy}
              onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
              className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="newest">Newest First</option>
              <option value="rating">Highest Rated</option>
              <option value="relevance">Most Popular</option>
            </select>
          </div>

          {/* Difficulty Filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-300 font-semibold mr-4">Difficulty:</span>
            {['beginner', 'intermediate', 'advanced', 'expert'].map(difficulty => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(selectedDifficulty === difficulty ? '' : difficulty)}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
                  selectedDifficulty === difficulty
                    ? `${getDifficultyColor(difficulty)} text-white`
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-300">
            Showing {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map(video => (
            <div
              key={video.id}
              onClick={() => onVideoSelect(video)}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all duration-300 cursor-pointer group border border-gray-700 hover:border-red-500"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                  {formatDuration(video.duration)}
                </div>

                {/* Difficulty Badge */}
                <div className={`absolute top-2 left-2 ${getDifficultyColor(video.difficulty)} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
                  {video.difficulty.toUpperCase()}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                  {video.title}
                </h3>

                {/* Author */}
                <div className="flex items-center space-x-2 mb-3">
                  <img
                    src={video.author.avatar}
                    alt={video.author.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-gray-300 text-sm">{video.author.name}</span>
                  {video.author.verified && (
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                  )}
                </div>

                {/* Vehicle Info */}
                <div className="text-gray-400 text-sm mb-3">
                  {video.vehicle.year} {video.vehicle.make} {video.vehicle.model}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-gray-400 text-sm mb-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{formatViews(video.views)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{video.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{video.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Cost Estimate */}
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">Est. Cost:</span>
                    <span className="text-green-400 font-semibold">
                      ${video.cost.min} - ${video.cost.max}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="text-gray-300">Time:</span>
                    <span className="text-blue-400">{video.estimatedTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <Play className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-400 mb-2">No videos found</h3>
            <p className="text-gray-500">Try adjusting your search filters</p>
            <button
              onClick={() => {
                setFilters({ query: '', vehicleType: '', category: '', sortBy: 'newest' });
                setSelectedDifficulty('');
              }}
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoLibrary;