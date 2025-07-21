import React, { useState } from 'react';
import { ArrowLeft, ThumbsUp, ThumbsDown, Share2, Download, Star, Clock, DollarSign, Wrench, User, CheckCircle } from 'lucide-react';
import { Video } from '../types/marketplace';

interface VideoPlayerProps {
  video: Video;
  onBack: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, onBack }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

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
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Library</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="bg-black rounded-xl overflow-hidden mb-6">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-red-600 rounded-full p-4 mb-4 inline-block">
                    <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-400">Video Player Placeholder</p>
                  <p className="text-gray-500 text-sm">In production, integrate with React Player or similar</p>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="bg-gray-800 rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-white mb-2">{video.title}</h1>
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span>{formatViews(video.views)} views</span>
                    <span>•</span>
                    <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className={`${getDifficultyColor(video.difficulty)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {video.difficulty.toUpperCase()}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4 mb-6">
                <button
                  onClick={() => {
                    setLiked(!liked);
                    if (disliked) setDisliked(false);
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    liked ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <ThumbsUp className="w-5 h-5" />
                  <span>{video.likes + (liked ? 1 : 0)}</span>
                </button>

                <button
                  onClick={() => {
                    setDisliked(!disliked);
                    if (liked) setLiked(false);
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    disliked ? 'bg-red-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <ThumbsDown className="w-5 h-5" />
                  <span>{video.dislikes + (disliked ? 1 : 0)}</span>
                </button>

                <button className="flex items-center space-x-2 bg-gray-700 text-gray-300 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>

                <button className="flex items-center space-x-2 bg-gray-700 text-gray-300 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
                  <Download className="w-5 h-5" />
                  <span>Save</span>
                </button>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4 pb-6 border-b border-gray-700">
                <img
                  src={video.author.avatar}
                  alt={video.author.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-white font-semibold">{video.author.name}</h3>
                    {video.author.verified && (
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">Automotive Content Creator</p>
                </div>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Subscribe
                </button>
              </div>

              {/* Description */}
              <div className="pt-6">
                <h4 className="text-white font-semibold mb-3">Description</h4>
                <p className="text-gray-300 leading-relaxed">{video.description}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Vehicle Info */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4">Vehicle Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Make:</span>
                  <span className="text-white">{video.vehicle.make}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Model:</span>
                  <span className="text-white">{video.vehicle.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Year:</span>
                  <span className="text-white">{video.vehicle.year}</span>
                </div>
                {video.vehicle.engine && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Engine:</span>
                    <span className="text-white">{video.vehicle.engine}</span>
                  </div>
                )}
                {video.vehicle.transmission && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Transmission:</span>
                    <span className="text-white">{video.vehicle.transmission}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-white font-semibold">Time Required</p>
                    <p className="text-gray-400 text-sm">{video.estimatedTime}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-white font-semibold">Estimated Cost</p>
                    <p className="text-gray-400 text-sm">
                      ${video.cost.min} - ${video.cost.max} {video.cost.currency}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <div>
                    <p className="text-white font-semibold">Difficulty</p>
                    <p className="text-gray-400 text-sm capitalize">{video.difficulty}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Required */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Wrench className="w-5 h-5 mr-2" />
                Tools Required
              </h3>
              <div className="space-y-2">
                {video.tools.map((tool, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-white font-bold mb-4">Community Rating</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{video.rating}</div>
                <div className="flex justify-center space-x-1 mb-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= Math.floor(video.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-400 text-sm">{video.reviewCount} reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;