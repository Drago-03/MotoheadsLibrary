export interface Car {
  id: string;
  name: string;
  manufacturer: string;
  model: string;
  year: number;
  country: string;
  region: string; // Added region field
  type: 'Sedan' | 'Coupe' | 'Convertible' | 'SUV' | 'Truck' | 'Hatchback' | 'Wagon' | 'Sports Car' | 'Luxury' | 'Supercar' | 'Hypercar' | 'Roadster';
  drivetrain: 'FWD' | 'RWD' | 'AWD' | '4WD';
  engine: {
    type: 'V4' | 'V6' | 'V8' | 'V10' | 'V12' | 'W12' | 'W16' | 'I3' | 'I4' | 'I5' | 'I6' | 'I8' | 'Flat-4' | 'Flat-6' | 'Flat-8' | 'Flat-12' | 'Electric' | 'Hybrid' | 'Plug-in Hybrid' | 'Hydrogen';
    displacement?: string;
    horsepower: number;
    torque: string;
    configuration?: string; // Enhanced engine details
    fuelSystem?: string;
    compression?: string;
  };
  transmission: 'Manual' | 'Automatic' | 'CVT' | 'Dual-Clutch';
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid' | 'Plug-in Hybrid' | 'Hydrogen';
  mpg?: {
    city: number;
    highway: number;
  };
  price: {
    msrp: number;
    currency: string;
    adjustedForInflation?: number; // Added inflation-adjusted pricing
  };
  production: {
    start: number;
    end?: number;
    total: number;
  };
  specifications: {
    length: string;
    width: string;
    height: string;
    weight: string;
    wheelbase?: string; // Added more specifications
    acceleration: string;
    topSpeed: string;
    fuelCapacity?: string;
    trunkCapacity?: string;
  };
  description: string;
  significance: string;
  culturalImpact?: string; // Added cultural impact
  technicalInnovations?: string[]; // Added technical innovations
  racingHistory?: string; // Added racing history
  images: string[];
  rating: number;
  reviews: number;
  featured: boolean;
  collectibility?: { // Added collectibility information
    currentValue: string;
    appreciationRate: string;
    rarity: string;
  };
  modernSuccessor?: string; // Added modern successor
}

export interface FilterState {
  search: string;
  region: string; // Added region filter
  country: string;
  manufacturer: string;
  yearRange: [number, number];
  type: string;
  drivetrain: string;
  engineType: string;
  priceRange: [number, number];
  sortBy: 'name' | 'year' | 'price' | 'rating';
  sortOrder: 'asc' | 'desc';
}