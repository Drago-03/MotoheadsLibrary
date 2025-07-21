import React from 'react';

import { useState } from 'react';
import { Car, ArrowRight, Play } from 'lucide-react';

function SimpleApp() {
  const [isLoading, setIsLoading] = useState(false);

  const handleEnterArchive = () => {
    setIsLoading(true);
    // Force reload to try loading the full app
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleViewDemo = () => {
    // For now, just show an alert - in future could show a demo
    alert('Demo feature coming soon! Click "Enter Archive" to access the full application.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black flex items-center justify-center relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-red-500 to-transparent opacity-30 transform -skew-x-12 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-yellow-500 to-transparent opacity-30 transform skew-x-12 animate-pulse"></div>
      </div>

      <div className="text-center text-white relative z-10 p-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-4 rounded-full inline-block mb-4 animate-pulse">
            <Car className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
            AutoVault
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            The Ultimate Automotive Archive
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
            <h3 className="text-xl font-bold text-white mb-2">125+ Years</h3>
            <p className="text-gray-300">Complete automotive history from 1900 to today</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
            <h3 className="text-xl font-bold text-white mb-2">Global Collection</h3>
            <p className="text-gray-300">Vehicles from every major automotive nation</p>
          </div>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-red-500/30">
            <h3 className="text-xl font-bold text-white mb-2">Expert Curated</h3>
            <p className="text-gray-300">Detailed specifications and history</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleEnterArchive}
            disabled={isLoading}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-4 px-8 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Loading...</span>
              </>
            ) : (
              <>
                <Play className="w-6 h-6" />
                <span>Enter Archive</span>
                <ArrowRight className="w-6 h-6" />
              </>
            )}
          </button>
          
          <button
            onClick={handleViewDemo}
            className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-4 px-8 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 text-lg"
          >
            <Car className="w-6 h-6" />
            <span>Quick Demo</span>
          </button>
        </div>

        {/* Status message */}
        <p className="text-sm text-gray-400 mt-6">
          {isLoading ? 'Preparing your automotive journey...' : 'Fallback interface - Click "Enter Archive" to load the full application'}
        </p>
      </div>

      {/* Animated car */}
      <div className="absolute bottom-10 left-10 opacity-20">
        <Car className="w-12 h-12 text-red-500 animate-bounce" />
      </div>
    </div>
  );
}

export default SimpleApp;
