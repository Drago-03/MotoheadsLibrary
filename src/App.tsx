import { useState } from 'react';
import EnhancedCarDetail from './components/EnhancedCarDetail';
import { Car } from './types/car';

console.log('App component loading...');

function App() {
  console.log('App function executing...');
  
  const [currentPage, setCurrentPage] = useState<'landing' | 'main' | 'detail'>('landing');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  // Enhanced car data with comprehensive details and regional organization
  const mockCars: Car[] = [
    {
      id: "1",
      name: "1965 Ford Mustang",
      manufacturer: "Ford",
      model: "Mustang",
      year: 1965,
      country: "USA",
      region: "North America",
      type: "Sports Car",
      drivetrain: "RWD",
      engine: {
        type: "V8",
        displacement: "289 cubic inches (4.7L)",
        horsepower: 271,
        torque: "312 lb-ft",
        configuration: "Naturally Aspirated V8",
        fuelSystem: "4-barrel carburetor",
        compression: "10.5:1"
      },
      transmission: "Manual",
      fuelType: "Gasoline",
      mpg: {
        city: 12,
        highway: 18
      },
      price: {
        msrp: 35000,
        currency: "USD",
        adjustedForInflation: 320000
      },
      production: {
        start: 1965,
        end: 1966,
        total: 559451
      },
      specifications: {
        length: "181.6 inches",
        width: "68.2 inches", 
        height: "51.1 inches",
        weight: "2,570 lbs",
        wheelbase: "108 inches",
        acceleration: "6.5 seconds",
        topSpeed: "120 mph",
        fuelCapacity: "16 gallons",
        trunkCapacity: "10.1 cubic feet"
      },
      description: "The iconic American muscle car that started a revolution and defined the pony car segment.",
      significance: "The Ford Mustang revolutionized the automotive industry when it debuted in 1964 as a 1965 model. Created under the direction of Lee Iacocca, the Mustang was designed to be an affordable sports car that would appeal to the youth market.",
      culturalImpact: "The Mustang's introduction created the 'pony car' class of automobiles and spawned competitors like the Chevrolet Camaro and Pontiac Firebird. It became a cultural icon, appearing in countless movies and TV shows.",
      technicalInnovations: [
        "Long hood, short deck design",
        "Affordable sports car concept", 
        "Modular option packages",
        "Unibody construction"
      ],
      racingHistory: "Dominated Trans-Am racing and became legendary in SCCA competition with the Shelby GT350 variant.",
      images: [
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800"
      ],
      rating: 4.8,
      reviews: 1247,
      featured: true,
      collectibility: {
        currentValue: "$45,000 - $85,000",
        appreciationRate: "+15% annually",
        rarity: "High demand classic"
      },
      modernSuccessor: "2024 Ford Mustang"
    },
    {
      id: "2",
      name: "1967 Chevrolet Camaro SS",
      manufacturer: "Chevrolet",
      model: "Camaro",
      year: 1967,
      country: "USA",
      region: "North America",
      type: "Sports Car",
      drivetrain: "RWD",
      engine: {
        type: "V8",
        displacement: "396 cubic inches (6.5L)",
        horsepower: 375,
        torque: "415 lb-ft",
        configuration: "Big Block V8",
        fuelSystem: "4-barrel carburetor",
        compression: "11.0:1"
      },
      transmission: "Manual",
      fuelType: "Gasoline",
      mpg: {
        city: 10,
        highway: 15
      },
      price: {
        msrp: 38000,
        currency: "USD",
        adjustedForInflation: 350000
      },
      production: {
        start: 1967,
        end: 1969,
        total: 220917
      },
      specifications: {
        length: "184.6 inches",
        width: "72.5 inches",
        height: "51.0 inches", 
        weight: "3,200 lbs",
        wheelbase: "108 inches",
        acceleration: "5.8 seconds",
        topSpeed: "125 mph",
        fuelCapacity: "18 gallons",
        trunkCapacity: "9.2 cubic feet"
      },
      description: "Ford's fierce competitor to the Mustang, featuring aggressive styling and powerful big-block V8 engines.",
      significance: "The Camaro was Chevrolet's answer to the Ford Mustang's success. Introduced in 1967, it featured more modern styling and engineering than the Mustang.",
      culturalImpact: "Featured prominently in movies like Transformers (as Bumblebee) and 2 Fast 2 Furious, making it an icon of American muscle.",
      technicalInnovations: [
        "Advanced suspension design",
        "Optional big-block V8 engines",
        "Rally Sport appearance package",
        "Z/28 performance package"
      ],
      racingHistory: "Dominated Trans-Am racing with the Z/28 variant, winning multiple championships throughout the late 1960s.",
      images: [
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800", 
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800"
      ],
      rating: 4.7,
      reviews: 892,
      featured: true,
      collectibility: {
        currentValue: "$50,000 - $120,000",
        appreciationRate: "+18% annually", 
        rarity: "First-gen highly sought after"
      },
      modernSuccessor: "2024 Chevrolet Camaro"
    }
  ];

  const regions = [
    { id: 'all', name: 'All Regions', flag: '🌍' },
    { id: 'north-america', name: 'North America', flag: '🇺🇸' },
    { id: 'europe', name: 'Europe', flag: '🇪🇺' },
    { id: 'asia-pacific', name: 'Asia Pacific', flag: '🌏' }
  ];

  const filteredCars = mockCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || 
                         car.region.toLowerCase().replace(' ', '-') === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setCurrentPage('detail');
  };

  // Handle page navigation
  if (currentPage === 'detail' && selectedCar) {
    return <EnhancedCarDetail 
      car={selectedCar} 
      onBack={() => setCurrentPage('main')}
      onAddToCart={(item) => console.log('Added to cart:', item)}
    />;
  }

  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
        <div className="container mx-auto px-4 py-8 text-center">
          {/* Logo Section */}
          <div className="mb-12 pt-20">
            <div className="bg-amber-500 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              AutoVault
            </h1>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Discover the world's most iconic automobiles. From classic muscle cars to modern supercars, 
              explore automotive history through our comprehensive digital collection.
            </p>
            
            <button 
              onClick={() => setCurrentPage('main')}
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 
                         text-black px-12 py-4 rounded-xl text-xl font-bold transition-all duration-300 
                         transform hover:scale-105 shadow-2xl"
            >
              Explore Collection
            </button>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30">
              <div className="bg-amber-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Curated Collection</h3>
              <p className="text-gray-300">Hand-picked vehicles representing automotive excellence across all eras and regions.</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30">
              <div className="bg-amber-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 9V3.5L22 12l-9 8.5V15H3v-6h10z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Detailed Insights</h3>
              <p className="text-gray-300">Comprehensive specifications, historical context, and performance data for every vehicle.</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30">
              <div className="bg-amber-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Verified</h3>
              <p className="text-gray-300">All information verified by automotive experts and enthusiasts worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main application page
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-red-500/30 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-amber-500 p-2 rounded-lg">
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold">AutoVault</h1>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search cars..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400 focus:border-red-500 focus:outline-none"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Region Filter */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-3 mb-8">
          {regions.map(region => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                selectedRegion === region.id 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span>{region.flag}</span>
              <span>{region.name}</span>
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <div 
              key={car.id} 
              onClick={() => handleCarClick(car)}
              className="bg-black/50 rounded-2xl overflow-hidden border border-red-500/30 hover:border-red-500 transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="relative aspect-video">
                <img 
                  src={car.images[0]} 
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{car.name}</h3>
                  <p className="text-gray-300">{car.manufacturer} • {car.year}</p>
                </div>
                <div className="absolute top-4 right-4 bg-amber-500 text-black px-2 py-1 rounded text-sm font-bold">
                  ★ {car.rating}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{car.description.substring(0, 100)}...</p>
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 font-bold">${car.price.msrp.toLocaleString()}</span>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
