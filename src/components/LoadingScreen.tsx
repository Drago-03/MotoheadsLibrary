import React, { useState, useEffect } from 'react';
import { Car, Zap, Settings, Gauge } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
  loadingText?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, loadingText = "Starting your engine..." }) => {
  console.log('⏳ LoadingScreen rendered');
  
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('Initializing');
  const [rpm, setRpm] = useState(0);
  const [pistonPosition, setPistonPosition] = useState(0);

  const stages = [
    'Initializing systems...',
    'Checking engine oil...',
    'Warming up engine...',
    'Calibrating speedometer...',
    'Loading car database...',
    'Preparing garage...',
    'Ready to drive!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 3 + 1;
        
        // Update stage based on progress
        const stageIndex = Math.floor((newProgress / 100) * stages.length);
        if (stageIndex < stages.length) {
          setStage(stages[stageIndex]);
        }

        // Complete loading
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  // RPM animation
  useEffect(() => {
    const rpmInterval = setInterval(() => {
      setRpm(prev => (prev + 50) % 7000);
    }, 50);

    return () => clearInterval(rpmInterval);
  }, []);

  // Piston animation
  useEffect(() => {
    const pistonInterval = setInterval(() => {
      setPistonPosition(prev => (prev + 1) % 100);
    }, 30);

    return () => clearInterval(pistonInterval);
  }, []);

  const speedometerAngle = (progress / 100) * 180 - 90;
  const rpmAngle = (rpm / 7000) * 180 - 90;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-red-900 to-black flex items-center justify-center z-50">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto p-8">
        {/* Main Logo */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-6 rounded-full inline-block mb-4 animate-pulse">
            <Car className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
            AutoVault
          </h1>
        </div>

        {/* Engine Animation */}
        <div className="mb-8">
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
            <h3 className="text-xl font-bold text-white mb-4">Engine Status</h3>
            
            {/* Piston Animation */}
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-24 bg-gray-800 rounded-lg border-2 border-gray-600">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full transition-all duration-75"
                     style={{ top: `${10 + (pistonPosition / 100) * 40}px` }}>
                </div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-yellow-500 rounded"></div>
              </div>
            </div>

            {/* RPM Gauge */}
            <div className="flex justify-center mb-4">
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 border-4 border-gray-600 rounded-full bg-black">
                  <div 
                    className="absolute top-1/2 left-1/2 w-1 h-8 bg-red-500 origin-bottom transform -translate-x-1/2 -translate-y-full transition-transform duration-75"
                    style={{ transform: `translate(-50%, -100%) rotate(${rpmAngle}deg)` }}
                  ></div>
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-white font-bold">
                  {rpm} RPM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="mb-8">
          {/* Speedometer Style Progress */}
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-24">
              <svg className="w-full h-full" viewBox="0 0 200 100">
                {/* Background Arc */}
                <path
                  d="M 20 80 A 80 80 0 0 1 180 80"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="8"
                />
                {/* Progress Arc */}
                <path
                  d="M 20 80 A 80 80 0 0 1 180 80"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="8"
                  strokeDasharray={`${(progress / 100) * 251.2} 251.2`}
                  className="transition-all duration-300"
                />
                {/* Needle */}
                <line
                  x1="100"
                  y1="80"
                  x2={100 + 60 * Math.cos((speedometerAngle * Math.PI) / 180)}
                  y2={80 + 60 * Math.sin((speedometerAngle * Math.PI) / 180)}
                  stroke="#ef4444"
                  strokeWidth="3"
                  className="transition-all duration-300"
                />
                {/* Center Dot */}
                <circle cx="100" cy="80" r="4" fill="#ef4444" />
                
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Progress Percentage */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
                <div className="text-3xl font-bold text-white">{Math.round(progress)}%</div>
                <div className="text-sm text-gray-400">Loading</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-800 rounded-full h-3 mb-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
            </div>
          </div>

          {/* Stage Text */}
          <div className="text-center">
            <p className="text-xl text-white font-semibold mb-2">{loadingText}</p>
            <p className="text-gray-400">{stage}</p>
          </div>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-black/30 rounded-lg p-3 border border-gray-600">
            <Settings className="w-6 h-6 text-blue-400 mx-auto mb-2 animate-spin" />
            <div className="text-xs text-gray-300">Engine</div>
            <div className="text-sm text-green-400 font-bold">Online</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-gray-600">
            <Gauge className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <div className="text-xs text-gray-300">Gauges</div>
            <div className="text-sm text-green-400 font-bold">Ready</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-gray-600">
            <Zap className="w-6 h-6 text-green-400 mx-auto mb-2 animate-pulse" />
            <div className="text-xs text-gray-300">Power</div>
            <div className="text-sm text-green-400 font-bold">100%</div>
          </div>
          <div className="bg-black/30 rounded-lg p-3 border border-gray-600">
            <Car className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <div className="text-xs text-gray-300">Database</div>
            <div className="text-sm text-yellow-400 font-bold">Loading</div>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>

        {/* Tip */}
        <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
          <p className="text-yellow-400 text-sm">
            💡 <strong>Pro Tip:</strong> Use the filters to find your dream car faster!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;