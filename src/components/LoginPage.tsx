import React, { useState, useEffect } from 'react';
import { Car, Zap, Users, Trophy, ArrowRight, Eye, EyeOff } from 'lucide-react';

interface LoginPageProps {
  onLogin: (username: string, password: string) => void;
  onNavigateToSplash: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigateToSplash }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      onLogin(username, password);
      setIsLoading(false);
    }, 2000);
  };

  const playEngineSound = () => {
    // In a real app, you'd play actual audio
    console.log('🏎️ Engine rev sound!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Moving Cars */}
        <div className="absolute top-20 left-0 w-full h-16 overflow-hidden">
          <div className="animate-pulse">
            <Car className="absolute text-red-500 w-12 h-12 animate-bounce" 
                 style={{ 
                   left: `${(animationPhase * 25)}%`,
                   transition: 'left 3s ease-in-out'
                 }} />
          </div>
        </div>
        
        {/* Racing Stripes */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-2 bg-gradient-to-b from-red-500 to-transparent absolute left-1/4 transform -skew-x-12"></div>
          <div className="h-full w-2 bg-gradient-to-b from-yellow-500 to-transparent absolute right-1/4 transform skew-x-12"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-1/4 right-10 animate-spin-slow">
          <Zap className="w-8 h-8 text-yellow-400 opacity-60" />
        </div>
        <div className="absolute bottom-1/4 left-10 animate-bounce">
          <Trophy className="w-10 h-10 text-gold-400 opacity-60" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="bg-black/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-red-500/30 p-8 w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-full">
                <Car className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent mb-2">
              Rev Up Your Engine
            </h1>
            <p className="text-gray-300">Fuel Your Passion for Cars</p>
          </div>

          {/* Motivational Phrases */}
          <div className="text-center mb-6">
            <div className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-lg p-3 mb-4">
              <p className="text-yellow-400 font-semibold text-sm">
                {animationPhase === 0 && "🏁 Join the Ultimate Car Community"}
                {animationPhase === 1 && "⚡ Accelerate Your Knowledge"}
                {animationPhase === 2 && "🏎️ Shift Into High Gear"}
                {animationPhase === 3 && "🔥 Ignite Your Automotive Journey"}
              </p>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Driver Name
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="Enter your racing alias..."
                required
                onFocus={playEngineSound}
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Garage Key
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Your secret garage code..."
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 px-6 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              onClick={playEngineSound}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Starting Engine...</span>
                </>
              ) : (
                <>
                  <span>Hit the Gas</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Additional Options */}
          <div className="mt-6 text-center space-y-3">
            <button className="text-gray-400 hover:text-red-400 transition-colors text-sm">
              Forgot your garage key?
            </button>
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <Users className="w-4 h-4" />
              <span>New to the crew?</span>
              <button className="text-red-400 hover:text-red-300 transition-colors font-semibold">
                Join the Garage
              </button>
            </div>
          </div>

          {/* Back to Splash */}
          <div className="mt-6 text-center">
            <button
              onClick={onNavigateToSplash}
              className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm flex items-center justify-center space-x-1"
            >
              <Car className="w-4 h-4" />
              <span>Back to Showroom</span>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Tire Tracks */}
      <div className="absolute bottom-0 left-0 w-full h-20 opacity-20">
        <div className="flex space-x-4 animate-pulse">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-8 h-4 bg-gray-600 rounded-full transform rotate-12"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;