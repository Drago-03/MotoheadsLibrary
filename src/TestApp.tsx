import { useState } from 'react';
import { Car } from 'lucide-react';

function TestApp() {
  const [currentPage, setCurrentPage] = useState<'splash' | 'loading' | 'main'>('splash');

  const handleEnterFromSplash = () => {
    console.log('🎬 Enter from splash clicked, navigating to loading page');
    setCurrentPage('loading');
    setTimeout(() => {
      console.log('🎬 Loading complete, navigating to main page');
      setCurrentPage('main');
    }, 2000);
  };

  // Simple splash screen
  if (currentPage === 'splash') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-black flex items-center justify-center">
        <div className="text-center text-white">
          <Car className="w-16 h-16 mx-auto mb-4 text-red-400" />
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
            AutoVault
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            The Ultimate Automotive Archive
          </p>
          <button
            onClick={handleEnterFromSplash}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Enter Archive
          </button>
        </div>
      </div>
    );
  }

  // Simple loading screen
  if (currentPage === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-black flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-2">Starting Engine...</h2>
          <p className="text-gray-300">Loading automotive archive</p>
        </div>
      </div>
    );
  }

  // Simple main page
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Car className="w-8 h-8 text-red-600" />
              <h1 className="text-2xl font-bold text-gray-800">AutoVault</h1>
            </div>
            <button
              onClick={() => setCurrentPage('splash')}
              className="text-gray-600 hover:text-gray-800"
            >
              Back to Splash
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to the Garage!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Your automotive archive is now working perfectly!
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              🚗 Application Working Successfully!
            </h3>
            <p className="text-gray-600 mb-4">
              The app flow is working correctly. All page transitions are functioning.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800">✅ Splash Screen</h4>
                <p className="text-sm text-green-600">Working</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800">✅ Loading Screen</h4>
                <p className="text-sm text-green-600">Working</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800">✅ Main App</h4>
                <p className="text-sm text-green-600">Working</p>
              </div>
            </div>
            <div className="mt-8">
              <button
                onClick={() => setCurrentPage('splash')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Test Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestApp;
