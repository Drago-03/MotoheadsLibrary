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
        movieAppearances: ["Bullitt (1968)", "Gone in 60 Seconds (2000)", "Ford v Ferrari (2019)"],
        notable: "Steve McQueen's Highland Green Fastback from Bullitt sold for $3.74 million in 2020",
        racing: "Dominated SCCA racing in the late 1960s"
      },
      modernValue: {
        collector: "Highly sought after, especially Fastback models",
        averagePrice: "$35,000 - $75,000",
        rareModels: "Shelby GT350: $200,000+, Boss 429: $500,000+"
      }
    },
    {
      id: 2,
      name: "1967 Chevrolet Camaro SS",
      manufacturer: "Chevrolet", 
      year: 1967,
      type: "Muscle Car",
      country: "USA",
      region: "North America",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400",
      images: [
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800",
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800"
      ],
      description: "Pure American muscle with timeless design and thunderous V8 power.",
      detailedDescription: "Chevrolet's answer to the Ford Mustang, the Camaro was introduced in 1967 as a direct competitor. The SS (Super Sport) package included the most powerful engines available, distinctive styling cues, and performance-oriented suspension tuning. It represented GM's commitment to the growing muscle car market.",
      historicalSignificance: "The Camaro became one of the most successful pony cars ever produced and established Chevrolet's presence in the performance car market. It spawned numerous high-performance variants including the legendary Z/28 and ZL1 models.",
      engine: {
        type: "V8",
        displacement: "396 cubic inches (6.5L)",
        horsepower: "375 hp",
        torque: "415 lb-ft",
        configuration: "Big Block V8",
        fuelSystem: "Holley 4-barrel carburetor"
      },
      transmission: "4-speed manual / 3-speed Turbo Hydra-Matic",
      drivetrain: "Rear-wheel drive",
      performance: {
        topSpeed: "125 mph",
        acceleration: "5.8 seconds (0-60 mph)",
        quarterMile: "14.2 seconds",
        fuelEconomy: "10/15 mpg (city/highway)"
      },
      dimensions: {
        length: "184.6 inches",
        width: "72.5 inches",
        height: "51.0 inches",
        wheelbase: "108 inches",
        weight: "3,200 lbs"
      },
      production: {
        start: 1967,
        end: 1969,
        total: 220906,
        originalPrice: "$3,200"
      },
      cultural: {
        movieAppearances: ["Transformers series (Bumblebee)", "2 Fast 2 Furious", "Better Off Dead"],
        notable: "Bumblebee from Transformers made the 1967 Camaro iconic for new generations",
        racing: "Dominated Trans-Am racing with the Z/28 variant"
      },
      modernValue: {
        collector: "First-generation Camaros are highly collectible",
        averagePrice: "$40,000 - $85,000",
        rareModels: "ZL1: $500,000+, Z/28: $100,000+"
      }
    },
    {
      id: 3,
      name: "1963 Porsche 911",
      manufacturer: "Porsche",
      year: 1963,
      type: "Sports Car", 
      country: "Germany",
      region: "Europe",
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400",
      images: [
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800",
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800"
      ],
      description: "The legendary rear-engine sports car that defined Porsche and set the template for decades.",
      detailedDescription: "The Porsche 911, originally designated the 901, was designed by Ferdinand 'Butzi' Porsche. Its distinctive silhouette, rear-mounted air-cooled flat-six engine, and exceptional handling characteristics made it an instant classic. The 911 represented Porsche's evolution from the 356 into the modern era.",
      historicalSignificance: "The 911 has become one of the most recognizable and successful sports cars in history. Its basic design has remained largely unchanged for over 60 years, proving the brilliance of the original concept. It established Porsche as a premier sports car manufacturer.",
      engine: {
        type: "Flat-6",
        displacement: "130 cubic inches (2.0L)",
        horsepower: "130 hp",
        torque: "128 lb-ft",
        configuration: "Air-cooled Flat-6",
        fuelSystem: "Weber carburetors"
      },
      transmission: "5-speed manual",
      drivetrain: "Rear-wheel drive",
      performance: {
        topSpeed: "131 mph",
        acceleration: "8.5 seconds (0-60 mph)",
        quarterMile: "16.1 seconds",
        fuelEconomy: "20/28 mpg (city/highway)"
      },
      dimensions: {
        length: "164.0 inches",
        width: "63.4 inches",
        height: "52.0 inches",
        wheelbase: "87.0 inches",
        weight: "2,380 lbs"
      },
      production: {
        start: 1963,
        end: 1989,
        total: 195958,
        originalPrice: "$6,500"
      },
      cultural: {
        movieAppearances: ["Le Mans (1971)", "Bad Boys", "Risky Business"],
        notable: "Steve McQueen owned several 911s and helped popularize them in America",
        racing: "Dominated endurance racing and rally competitions worldwide"
      },
      modernValue: {
        collector: "Early 911s are among the most valuable classic cars",
        averagePrice: "$75,000 - $200,000",
        rareModels: "911R: $1,000,000+, Carrera RS: $500,000+"
      }
    },
    {
      id: 4,
      name: "1970 Dodge Challenger R/T",
      manufacturer: "Dodge",
      year: 1970,
      type: "Muscle Car",
      country: "USA",
      region: "North America", 
      image: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400",
      images: [
        "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=800",
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800"
      ],
      description: "Raw power and aggressive styling define this American muscle car legend.",
      detailedDescription: "The Dodge Challenger was Chrysler's entry into the pony car wars, arriving later than competitors but making up for lost time with bold styling and massive engine options. The R/T (Road/Track) package represented the ultimate expression of American muscle, combining race-bred performance with street usability.",
      historicalSignificance: "Though produced for only five years initially, the Challenger became an icon of the muscle car era. Its appearance in movies like 'Vanishing Point' cemented its status as a symbol of American automotive rebellion and freedom.",
      engine: {
        type: "V8",
        displacement: "440 cubic inches (7.2L)",
        horsepower: "375 hp",
        torque: "480 lb-ft",
        configuration: "Big Block V8",
        fuelSystem: "Carter AFB 4-barrel carburetor"
      },
      transmission: "4-speed manual / 3-speed TorqueFlite automatic",
      drivetrain: "Rear-wheel drive",
      performance: {
        topSpeed: "130 mph",
        acceleration: "5.1 seconds (0-60 mph)",
        quarterMile: "13.5 seconds",
        fuelEconomy: "8/12 mpg (city/highway)"
      },
      dimensions: {
        length: "191.3 inches",
        width: "76.1 inches",
        height: "51.8 inches",
        wheelbase: "110 inches",
        weight: "3,400 lbs"
      },
      production: {
        start: 1970,
        end: 1974,
        total: 188895,
        originalPrice: "$3,800"
      },
      cultural: {
        movieAppearances: ["Vanishing Point (1971)", "Death Proof", "Fast & Furious series"],
        notable: "The white 1970 Challenger from Vanishing Point is one of cinema's most famous cars",
        racing: "Competed successfully in Trans-Am and drag racing"
      },
      modernValue: {
        collector: "Highly sought after, especially R/T and T/A models",
        averagePrice: "$45,000 - $95,000",
        rareModels: "Hemi Challenger: $200,000+, Plymouth 'Cuda AAR: $150,000+"
      }
    },
    {
      id: 5,
      name: "1961 Ferrari 250 GT SWB",
      manufacturer: "Ferrari",
      year: 1961,
      type: "Grand Tourer",
      country: "Italy",
      region: "Europe",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400",
      images: [
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800",
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800",
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800"
      ],
      description: "Italian craftsmanship and racing heritage in perfect harmony.",
      detailedDescription: "The Ferrari 250 GT SWB (Short Wheelbase) represents the pinnacle of 1960s grand touring cars. Designed by Pininfarina and built by Scaglietti, it combined race-proven mechanicals with elegant Italian coachwork. The SWB was equally at home on the racetrack or touring the countryside.",
      historicalSignificance: "The 250 GT SWB bridged the gap between Ferrari's racing cars and road cars, establishing the template for all future Ferrari grand tourers. It dominated GT racing in the early 1960s and helped establish Ferrari's reputation for building the world's most desirable sports cars.",
      engine: {
        type: "V12",
        displacement: "180 cubic inches (3.0L)",
        horsepower: "280 hp",
        torque: "217 lb-ft",
        configuration: "Naturally Aspirated V12",
        fuelSystem: "Three Weber 40DCL carburetors"
      },
      transmission: "4-speed manual",
      drivetrain: "Rear-wheel drive",
      performance: {
        topSpeed: "150 mph",
        acceleration: "6.2 seconds (0-60 mph)",
        quarterMile: "14.3 seconds",
        fuelEconomy: "12/16 mpg (city/highway)"
      },
      dimensions: {
        length: "164.2 inches",
        width: "67.7 inches",
        height: "50.4 inches",
        wheelbase: "94.5 inches",
        weight: "2,400 lbs"
      },
      production: {
        start: 1959,
        end: 1962,
        total: 176,
        originalPrice: "$11,400"
      },
      cultural: {
        movieAppearances: ["Ferris Bueller's Day Off (250 GT Spyder)", "The Thomas Crown Affair"],
        notable: "Considered one of the most beautiful cars ever made",
        racing: "Won the Tour de France Automobile multiple times"
      },
      modernValue: {
        collector: "Among the most valuable classic cars in the world",
        averagePrice: "$8,000,000 - $15,000,000",
        rareModels: "Competition Berlinetta: $20,000,000+, Tour de France: $25,000,000+"
      }
    },
    {
      id: 6,
      name: "1964 Aston Martin DB5",
      manufacturer: "Aston Martin",
      year: 1964,
      type: "Grand Tourer",
      country: "United Kingdom",
      region: "Europe",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400",
      images: [
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800",
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800"
      ],
      description: "British elegance meets performance, famously driven by James Bond.",
      detailedDescription: "The Aston Martin DB5 epitomizes British automotive elegance and sophistication. Designed by Carrozzeria Touring using their Superleggera construction method, the DB5 combined Italian styling with British engineering excellence. It represented the perfect grand tourer for the jet-set era.",
      historicalSignificance: "The DB5 became globally famous as James Bond's car in 'Goldfinger' and 'Thunderball', establishing Aston Martin as the ultimate gentleman's sports car brand. It elevated the company's profile enormously and created a lasting association with luxury and sophistication.",
      engine: {
        type: "Inline-6",
        displacement: "244 cubic inches (4.0L)",
        horsepower: "282 hp",
        torque: "280 lb-ft",
        configuration: "DOHC Inline-6",
        fuelSystem: "Three SU carburetors"
      },
      transmission: "5-speed manual / 3-speed automatic",
      drivetrain: "Rear-wheel drive",
      performance: {
        topSpeed: "145 mph",
        acceleration: "8.1 seconds (0-60 mph)",
        quarterMile: "16.1 seconds",
        fuelEconomy: "15/20 mpg (city/highway)"
      },
      dimensions: {
        length: "180.0 inches",
        width: "66.0 inches",
        height: "53.0 inches",
        wheelbase: "98.0 inches",
        weight: "3,230 lbs"
      },
      production: {
        start: 1963,
        end: 1965,
        total: 1021,
        originalPrice: "$12,500"
      },
      cultural: {
        movieAppearances: ["Goldfinger (1964)", "Thunderball (1965)", "GoldenEye (1995)"],
        notable: "The Bond DB5 with ejector seat became one of cinema's most famous cars",
        racing: "Limited racing success but excellent touring capabilities"
      },
      modernValue: {
        collector: "One of the most desirable British classic cars",
        averagePrice: "$800,000 - $1,500,000",
        rareModels: "Bond specification: $4,000,000+, Convertible: $2,000,000+"
      }
    },
    {
      id: 7,
      name: "1969 Nissan Skyline GT-R",
      manufacturer: "Nissan",
      year: 1969,
      type: "Sports Sedan",
      country: "Japan",
      region: "Asia",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400",
      images: [
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800",
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800"
      ],
      description: "The original Godzilla - Japan's first true performance car legend.",
      detailedDescription: "The Hakosuka (box skyline) GT-R was the first car to wear the legendary GT-R badge. Built to dominate Japanese touring car racing, it featured a race-bred inline-6 engine and sophisticated suspension. It established Japan as a serious player in the performance car market.",
      historicalSignificance: "The original GT-R created the template for all future Japanese performance cars and established the GT-R nameplate as synonymous with cutting-edge technology and track performance. It proved Japanese manufacturers could build world-class sports cars.",
      engine: {
        type: "Inline-6",
        displacement: "122 cubic inches (2.0L)",
        horsepower: "160 hp",
        torque: "130 lb-ft",
        configuration: "DOHC Inline-6",
        fuelSystem: "Triple Weber carburetors"
      },
      transmission: "5-speed manual",
      drivetrain: "Rear-wheel drive",
      performance: {
        topSpeed: "125 mph",
        acceleration: "8.5 seconds (0-60 mph)",
        quarterMile: "16.2 seconds",
        fuelEconomy: "18/25 mpg (city/highway)"
      },
      dimensions: {
        length: "175.0 inches",
        width: "63.8 inches",
        height: "55.1 inches",
        wheelbase: "103.1 inches",
        weight: "2,400 lbs"
      },
      production: {
        start: 1969,
        end: 1972,
        total: 1945,
        originalPrice: "$3,500"
      },
      cultural: {
        movieAppearances: ["Fast & Furious franchise", "Initial D"],
        notable: "Created the foundation for Japan's tuning culture",
        racing: "Won 50 consecutive races in Japanese touring car championship"
      },
      modernValue: {
        collector: "Extremely rare and valuable among JDM enthusiasts",
        averagePrice: "$300,000 - $600,000",
        rareModels: "Race specification: $1,000,000+, Perfect condition: $800,000+"
      }
    },
    {
      id: 8,
      name: "1973 BMW 2002 Turbo",
      manufacturer: "BMW",
      year: 1973,
      type: "Sports Sedan",
      country: "Germany",
      region: "Europe",
      image: "https://images.unsplash.com/photo-1555626040-6ca4ac833fb5?w=400",
      images: [
        "https://images.unsplash.com/photo-1555626040-6ca4ac833fb5?w=800",
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800",
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800"
      ],
      description: "Europe's first production turbocharged car - a revolutionary compact rocket.",
      detailedDescription: "The BMW 2002 Turbo was a groundbreaking achievement - Europe's first production car with a turbocharger. Based on the successful 2002 platform, it featured aggressive bodywork, a KKK turbocharger, and performance that embarrassed much larger cars. It established BMW's reputation for innovative performance cars.",
      historicalSignificance: "The 2002 Turbo pioneered turbocharging in production cars and established BMW as 'The Ultimate Driving Machine'. It proved that small, lightweight cars with forced induction could outperform larger naturally aspirated engines, influencing automotive development for decades.",
      engine: {
        type: "Inline-4",
        displacement: "122 cubic inches (2.0L)",
        horsepower: "170 hp",
        torque: "181 lb-ft",
        configuration: "Turbocharged Inline-4",
        fuelSystem: "Kugelfischer mechanical fuel injection"
      },
      transmission: "4-speed manual",
      drivetrain: "Rear-wheel drive",
      performance: {
        topSpeed: "131 mph",
        acceleration: "7.0 seconds (0-60 mph)",
        quarterMile: "15.2 seconds",
        fuelEconomy: "15/22 mpg (city/highway)"
      },
      dimensions: {
        length: "166.3 inches",
        width: "62.8 inches",
        height: "55.3 inches",
        wheelbase: "98.4 inches",
        weight: "2,340 lbs"
      },
      production: {
        start: 1973,
        end: 1974,
        total: 1672,
        originalPrice: "$7,500"
      },
      cultural: {
        movieAppearances: ["Ronin", "The Transporter"],
        notable: "Inspired BMW's M division and modern turbocharged engines",
        racing: "Dominated European Touring Car Championship"
      },
      modernValue: {
        collector: "Highly sought after by BMW enthusiasts and collectors",
        averagePrice: "$150,000 - $300,000",
        rareModels: "Perfect original: $400,000+, Race specification: $250,000+"
      }
    }
  ];

  const regions = ['all', 'North America', 'Europe', 'Asia'];

  const filteredCars = mockCars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.manufacturer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.country.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRegion = selectedRegion === 'all' || car.region === selectedRegion;
    
    return matchesSearch && matchesRegion;
  });

  const handleCarSelect = (car: any) => {
    setSelectedCar(car);
    setCurrentPage('detail');
  };

  // Detailed Car View Component
  const CarDetailView = ({ car, onBack }: { car: any; onBack: () => void }) => {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-8">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="mb-6 flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Collection</span>
          </button>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src={car.images[0]}
                alt={car.name}
                className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="grid grid-cols-3 gap-2 mt-4">
                {car.images.slice(1).map((img: string, index: number) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${car.name} ${index + 2}`}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="bg-amber-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {car.region}
                  </span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {car.type}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">{car.name}</h1>
                <p className="text-xl text-gray-400">{car.manufacturer} • {car.year} • {car.country}</p>
              </div>
              
              <div className="bg-slate-800 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Quick Specs</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Engine</p>
                    <p className="text-white font-semibold">{car.engine.type} {car.engine.displacement}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Power</p>
                    <p className="text-white font-semibold">{car.engine.horsepower}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">0-60 mph</p>
                    <p className="text-white font-semibold">{car.performance.acceleration}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Top Speed</p>
                    <p className="text-white font-semibold">{car.performance.topSpeed}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-xl p-6 border border-amber-500/30">
                <h3 className="text-xl font-bold text-amber-400 mb-2">Modern Value</h3>
                <p className="text-2xl font-bold text-white mb-2">{car.modernValue.averagePrice}</p>
                <p className="text-gray-400 text-sm">{car.modernValue.collector}</p>
              </div>
            </div>
          </div>

          {/* Detailed Sections */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Historical Significance */}
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Historical Significance</h3>
              <p className="text-gray-300 leading-relaxed">{car.historicalSignificance}</p>
            </div>

            {/* Detailed Description */}
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">About This Car</h3>
              <p className="text-gray-300 leading-relaxed">{car.detailedDescription}</p>
            </div>
          </div>

          {/* Engine & Performance */}
          <div className="bg-slate-800 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Engine & Performance</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white">{car.engine.horsepower}</h4>
                <p className="text-gray-400 text-sm">Horsepower</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white">{car.engine.torque}</h4>
                <p className="text-gray-400 text-sm">Torque</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white">{car.performance.acceleration}</h4>
                <p className="text-gray-400 text-sm">0-60 mph</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white">{car.performance.topSpeed}</h4>
                <p className="text-gray-400 text-sm">Top Speed</p>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 rounded-lg p-4">
                <h5 className="text-amber-400 font-semibold mb-2">Engine Details</h5>
                <p className="text-gray-300 text-sm">{car.engine.configuration}</p>
                <p className="text-gray-400 text-sm">{car.engine.fuelSystem}</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <h5 className="text-amber-400 font-semibold mb-2">Drivetrain</h5>
                <p className="text-gray-300 text-sm">{car.drivetrain}</p>
                <p className="text-gray-400 text-sm">{car.transmission}</p>
              </div>
              <div className="bg-gray-900 rounded-lg p-4">
                <h5 className="text-amber-400 font-semibold mb-2">Fuel Economy</h5>
                <p className="text-gray-300 text-sm">{car.performance.fuelEconomy}</p>
                <p className="text-gray-400 text-sm">City/Highway</p>
              </div>
            </div>
          </div>

          {/* Dimensions & Production */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Dimensions</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Length</span>
                  <span className="text-white font-semibold">{car.dimensions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Width</span>
                  <span className="text-white font-semibold">{car.dimensions.width}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Height</span>
                  <span className="text-white font-semibold">{car.dimensions.height}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Wheelbase</span>
                  <span className="text-white font-semibold">{car.dimensions.wheelbase}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Weight</span>
                  <span className="text-white font-semibold">{car.dimensions.weight}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Production Info</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Production Years</span>
                  <span className="text-white font-semibold">{car.production.start} - {car.production.end}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Produced</span>
                  <span className="text-white font-semibold">{car.production.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Original Price</span>
                  <span className="text-white font-semibold">{car.production.originalPrice}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Impact */}
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-6 mb-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">Cultural Impact</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Movie Appearances</h4>
                <div className="space-y-2">
                  {car.cultural.movieAppearances.map((movie: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
                      </svg>
                      <span className="text-gray-300">{movie}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Racing Heritage</h4>
                <p className="text-gray-300">{car.cultural.racing}</p>
                <div className="mt-4 p-3 bg-black/30 rounded-lg">
                  <p className="text-yellow-400 text-sm">💡 {car.cultural.notable}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Collector Information */}
          <div className="bg-gradient-to-r from-amber-900/50 to-yellow-900/50 rounded-xl p-6 border border-amber-500/30">
            <h3 className="text-2xl font-bold text-amber-400 mb-6">Collector Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Market Value</h4>
                <p className="text-3xl font-bold text-amber-400 mb-2">{car.modernValue.averagePrice}</p>
                <p className="text-gray-300 mb-4">{car.modernValue.collector}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Rare Models</h4>
                <p className="text-gray-300">{car.modernValue.rareModels}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
            <p className="text-2xl text-gray-300 mb-4">The Ultimate Automotive Archive</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              Explore the complete evolution of automotive history, from classic muscle cars to modern supercars. 
              Discover the stories, specifications, and significance of the machines that shaped our world.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-amber-500/30">
              <div className="bg-amber-500 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-400 mb-2">Curated Collection</h3>
              <p className="text-gray-300">Expert-reviewed specifications and automotive history</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
              <div className="bg-green-500 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Global Coverage</h3>
              <p className="text-gray-300">Vehicles from every major automotive nation</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
              <div className="bg-blue-500 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">125+ Years</h3>
              <p className="text-gray-300">Complete automotive timeline from 1900 to present</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mb-8">
            <button
              onClick={() => setCurrentPage('main')}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 px-12 py-4 rounded-xl font-bold text-xl hover:from-amber-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Enter the Archive
            </button>
          </div>

          {/* Status */}
          <p className="text-gray-400 text-sm">
            🚀 React + Vite • Running on localhost:3000 • Ready to explore!
          </p>
        </div>
      </div>
    );
  }

  // Main Application
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Toaster position="top-center" reverseOrder={false} />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b-4 border-amber-500 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-500 p-2 rounded-full">
                <svg className="h-8 w-8 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  AutoVault
                </h1>
                <p className="text-slate-300 text-sm">Automotive Archive</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search vehicles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white placeholder-slate-400 w-80"
                />
              </div>
              
              {/* Region Filter */}
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                title="Filter by region"
                className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {regions.map(region => (
                  <option key={region} value={region}>
                    {region === 'all' ? 'All Regions' : region}
                  </option>
                ))}
              </select>
              
              <button
                onClick={() => setCurrentPage('landing')}
                className="text-slate-300 hover:text-amber-400 transition-colors"
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Classic Car Collection</h2>
          <p className="text-gray-400">
            {filteredCars.length} vehicles found
            {searchQuery && ` for "${searchQuery}"`}
            {selectedRegion !== 'all' && ` in ${selectedRegion}`}
          </p>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map(car => (
            <div
              key={car.id}
              className="bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-700 hover:border-amber-500 group overflow-hidden"
            >
              {/* Car Image */}
              <div className="relative overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3 flex space-x-2">
                  <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {car.type}
                  </span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {car.region}
                  </span>
                </div>
              </div>

              {/* Car Info */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{car.manufacturer} • {car.year}</p>
                </div>

                <div className="flex items-center space-x-4 mb-4 text-sm text-slate-300">
                  <div className="flex items-center space-x-1">
                    <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>{car.country}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {car.description}
                </p>

                <button 
                  onClick={() => handleCarSelect(car)}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 py-2 px-4 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 transform hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-slate-800 rounded-xl p-8 max-w-md mx-auto">
              <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.674-2.674"/>
              </svg>
              <h3 className="text-xl font-bold text-white mb-2">No vehicles found</h3>
              <p className="text-gray-400 mb-4">Try adjusting your search terms</p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                Clear search
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 AutoVault - The Ultimate Automotive Archive Platform
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Built with React + Vite • Powered by passion for automotive history
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
