import { Car } from '../types/car';

// Global automotive regions and countries
export const regions = {
  'North America': ['United States', 'Canada', 'Mexico'],
  'Europe': ['Germany', 'Italy', 'France', 'United Kingdom', 'Sweden', 'Spain', 'Czech Republic', 'Netherlands', 'Belgium', 'Austria', 'Switzerland'],
  'Asia Pacific': ['Japan', 'South Korea', 'China', 'India', 'Malaysia', 'Thailand', 'Australia'],
  'South America': ['Brazil', 'Argentina', 'Chile', 'Colombia'],
  'Middle East & Africa': ['South Africa', 'Turkey', 'Iran', 'Egypt'],
  'Eastern Europe': ['Russia', 'Poland', 'Romania', 'Ukraine']
};

// Comprehensive manufacturers by region
export const manufacturersByRegion = {
  'North America': {
    'United States': ['Ford', 'General Motors', 'Chrysler', 'Cadillac', 'Lincoln', 'Chevrolet', 'Buick', 'Dodge', 'Jeep', 'RAM', 'Tesla', 'Lucid Motors', 'Rivian'],
    'Canada': ['McLaren (partial)', 'Campagna Motors'],
    'Mexico': ['Mastretta']
  },
  'Europe': {
    'Germany': ['BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Porsche', 'Opel', 'Maybach', 'Smart'],
    'Italy': ['Ferrari', 'Lamborghini', 'Maserati', 'Alfa Romeo', 'Fiat', 'Lancia', 'Pagani'],
    'France': ['Peugeot', 'Citroën', 'Renault', 'Bugatti', 'Alpine'],
    'United Kingdom': ['Aston Martin', 'Bentley', 'Rolls-Royce', 'Jaguar', 'Land Rover', 'McLaren', 'Lotus', 'Morgan', 'Mini'],
    'Sweden': ['Volvo', 'Saab', 'Koenigsegg'],
    'Spain': ['SEAT', 'Cupra'],
    'Czech Republic': ['Škoda'],
    'Netherlands': ['Spyker', 'DAF'],
    'Belgium': ['Gillet'],
    'Austria': ['KTM X-Bow'],
    'Switzerland': ['Rinspeed']
  },
  'Asia Pacific': {
    'Japan': ['Toyota', 'Honda', 'Nissan', 'Mazda', 'Subaru', 'Mitsubishi', 'Lexus', 'Infiniti', 'Acura', 'Suzuki', 'Isuzu', 'Daihatsu'],
    'South Korea': ['Hyundai', 'Kia', 'Genesis', 'SsangYong'],
    'China': ['BYD', 'Geely', 'Great Wall', 'Chery', 'SAIC', 'FAW', 'Dongfeng', 'NIO', 'Xpeng', 'Li Auto', 'GAC'],
    'India': ['Tata Motors', 'Mahindra', 'Maruti Suzuki', 'Force Motors'],
    'Malaysia': ['Proton', 'Perodua'],
    'Thailand': ['Thai Rung'],
    'Australia': ['Holden (legacy)', 'Ford Australia (legacy)']
  },
  'South America': {
    'Brazil': ['Embraer (aircraft)', 'Troller'],
    'Argentina': ['Zanella'],
    'Chile': [],
    'Colombia': []
  },
  'Middle East & Africa': {
    'South Africa': ['Birkin Cars'],
    'Turkey': ['Otosan', 'TEMSA'],
    'Iran': ['Iran Khodro', 'Saipa'],
    'Egypt': ['Arab American Vehicles']
  },
  'Eastern Europe': {
    'Russia': ['Lada', 'UAZ', 'GAZ', 'KAMAZ'],
    'Poland': ['FSO', 'Solaris Bus & Coach'],
    'Romania': ['Dacia'],
    'Ukraine': ['ZAZ', 'KrAZ']
  }
};

export const cars: Car[] = [
  {
    id: '1',
    name: 'Ford Model T',
    manufacturer: 'Ford',
    model: 'Model T',
    year: 1908,
    country: 'USA',
    type: 'Sedan',
    drivetrain: 'RWD',
    engine: {
      type: 'I4',
      displacement: '2.9L',
      horsepower: 20,
      torque: '83 lb-ft'
    },
    transmission: 'Manual',
    fuelType: 'Gasoline',
    mpg: { city: 13, highway: 21 },
    price: { msrp: 825, currency: 'USD' },
    production: { start: 1908, end: 1927, total: 15000000 },
    specifications: {
      length: '11 ft 2 in',
      width: '5 ft 6 in',
      height: '6 ft 3 in',
      weight: '1200 lbs',
      acceleration: '0-60: N/A',
      topSpeed: '42 mph'
    },
    description: 'The Ford Model T revolutionized transportation and manufacturing with its affordable price and assembly line production.',
    significance: 'The first mass-produced automobile that made cars accessible to the general public, fundamentally changing society.',
    images: ['https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg'],
    rating: 4.8,
    reviews: 1247,
    featured: true
  },
  {
    id: '2',
    name: 'Porsche 911 Carrera',
    manufacturer: 'Porsche',
    model: '911 Carrera',
    year: 1963,
    country: 'Germany',
    type: 'Sports Car',
    drivetrain: 'RWD',
    engine: {
      type: 'V6',
      displacement: '2.0L',
      horsepower: 130,
      torque: '128 lb-ft'
    },
    transmission: 'Manual',
    fuelType: 'Gasoline',
    mpg: { city: 18, highway: 26 },
    price: { msrp: 6490, currency: 'USD' },
    production: { start: 1963, end: 1973, total: 111995 },
    specifications: {
      length: '13 ft 11 in',
      width: '5 ft 3 in',
      height: '4 ft 4 in',
      weight: '2380 lbs',
      acceleration: '0-60: 9.1s',
      topSpeed: '131 mph'
    },
    description: 'The original Porsche 911 established the template for one of the most enduring sports car designs in history.',
    significance: 'Introduced the iconic 911 silhouette that continues to define Porsche sports cars today.',
    images: ['https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg'],
    rating: 4.9,
    reviews: 2156,
    featured: true
  },
  {
    id: '3',
    name: 'Chevrolet Corvette Stingray',
    manufacturer: 'Chevrolet',
    model: 'Corvette Stingray',
    year: 1963,
    country: 'USA',
    type: 'Sports Car',
    drivetrain: 'RWD',
    engine: {
      type: 'V8',
      displacement: '5.4L',
      horsepower: 250,
      torque: '350 lb-ft'
    },
    transmission: 'Manual',
    fuelType: 'Gasoline',
    mpg: { city: 12, highway: 18 },
    price: { msrp: 4252, currency: 'USD' },
    production: { start: 1963, end: 1967, total: 117964 },
    specifications: {
      length: '14 ft 7 in',
      width: '5 ft 10 in',
      height: '4 ft 1 in',
      weight: '3150 lbs',
      acceleration: '0-60: 5.6s',
      topSpeed: '142 mph'
    },
    description: 'The second generation Corvette featured the iconic split-window design and established America\'s sports car credentials.',
    significance: 'Marked the beginning of the modern Corvette era with its distinctive styling and performance capabilities.',
    images: ['https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg'],
    rating: 4.7,
    reviews: 1834,
    featured: true
  },
  {
    id: '4',
    name: 'Jaguar E-Type',
    manufacturer: 'Jaguar',
    model: 'E-Type',
    year: 1961,
    country: 'UK',
    type: 'Sports Car',
    drivetrain: 'RWD',
    engine: {
      type: 'I6',
      displacement: '3.8L',
      horsepower: 265,
      torque: '260 lb-ft'
    },
    transmission: 'Manual',
    fuelType: 'Gasoline',
    mpg: { city: 15, highway: 22 },
    price: { msrp: 5595, currency: 'USD' },
    production: { start: 1961, end: 1975, total: 70584 },
    specifications: {
      length: '14 ft 7 in',
      width: '5 ft 5 in',
      height: '4 ft 0 in',
      weight: '2520 lbs',
      acceleration: '0-60: 7.1s',
      topSpeed: '150 mph'
    },
    description: 'The E-Type combined stunning beauty with exceptional performance, earning acclaim as one of the most beautiful cars ever made.',
    significance: 'Enzo Ferrari called it "the most beautiful car ever made" and it became an icon of 1960s automotive design.',
    images: ['https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg'],
    rating: 4.9,
    reviews: 987,
    featured: true
  },
  {
    id: '5',
    name: 'Tesla Model S',
    manufacturer: 'Tesla',
    model: 'Model S',
    year: 2012,
    country: 'USA',
    type: 'Sedan',
    drivetrain: 'RWD',
    engine: {
      type: 'Electric',
      horsepower: 362,
      torque: '325 lb-ft'
    },
    transmission: 'Automatic',
    fuelType: 'Electric',
    mpg: { city: 89, highway: 90 },
    price: { msrp: 71070, currency: 'USD' },
    production: { start: 2012, total: 450000 },
    specifications: {
      length: '16 ft 2 in',
      width: '6 ft 5 in',
      height: '4 ft 8 in',
      weight: '4647 lbs',
      acceleration: '0-60: 4.2s',
      topSpeed: '155 mph'
    },
    description: 'The Tesla Model S pioneered mainstream electric luxury vehicles with unprecedented range and performance.',
    significance: 'Proved that electric vehicles could be desirable, luxurious, and practical for everyday use.',
    images: ['https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg'],
    rating: 4.6,
    reviews: 3421,
    featured: true
  },
  {
    id: '6',
    name: 'Ferrari 250 GTO',
    manufacturer: 'Ferrari',
    model: '250 GTO',
    year: 1962,
    country: 'Italy',
    type: 'Sports Car',
    drivetrain: 'RWD',
    engine: {
      type: 'V12',
      displacement: '3.0L',
      horsepower: 300,
      torque: '217 lb-ft'
    },
    transmission: 'Manual',
    fuelType: 'Gasoline',
    mpg: { city: 8, highway: 12 },
    price: { msrp: 18000, currency: 'USD' },
    production: { start: 1962, end: 1964, total: 36 },
    specifications: {
      length: '13 ft 10 in',
      width: '5 ft 6 in',
      height: '4 ft 0 in',
      weight: '2164 lbs',
      acceleration: '0-60: 6.1s',
      topSpeed: '174 mph'
    },
    description: 'The 250 GTO is considered one of the greatest sports cars ever built, combining racing pedigree with sublime beauty.',
    significance: 'Represents the pinnacle of 1960s sports car design and engineering, now among the most valuable cars in the world.',
    images: ['https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg'],
    rating: 5.0,
    reviews: 156,
    featured: true
  },
  {
    id: '7',
    name: 'Volkswagen Beetle',
    manufacturer: 'Volkswagen',
    model: 'Beetle',
    year: 1938,
    country: 'Germany',
    type: 'Hatchback',
    drivetrain: 'RWD',
    engine: {
      type: 'I4',
      displacement: '1.2L',
      horsepower: 25,
      torque: '69 lb-ft'
    },
    transmission: 'Manual',
    fuelType: 'Gasoline',
    mpg: { city: 27, highway: 32 },
    price: { msrp: 1800, currency: 'USD' },
    production: { start: 1938, end: 2003, total: 21529464 },
    specifications: {
      length: '13 ft 5 in',
      width: '5 ft 1 in',
      height: '4 ft 11 in',
      weight: '1870 lbs',
      acceleration: '0-60: 27.5s',
      topSpeed: '71 mph'
    },
    description: 'The Volkswagen Beetle became one of the most recognizable and beloved cars in history with its distinctive design.',
    significance: 'Demonstrated that small, economical cars could be successful globally and influenced automotive design for decades.',
    images: ['https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg'],
    rating: 4.5,
    reviews: 2847,
    featured: false
  },
  {
    id: '8',
    name: 'Lamborghini Miura',
    manufacturer: 'Lamborghini',
    model: 'Miura',
    year: 1966,
    country: 'Italy',
    type: 'Sports Car',
    drivetrain: 'RWD',
    engine: {
      type: 'V12',
      displacement: '3.9L',
      horsepower: 350,
      torque: '271 lb-ft'
    },
    transmission: 'Manual',
    fuelType: 'Gasoline',
    mpg: { city: 9, highway: 15 },
    price: { msrp: 20000, currency: 'USD' },
    production: { start: 1966, end: 1973, total: 764 },
    specifications: {
      length: '13 ft 7 in',
      width: '5 ft 7 in',
      height: '3 ft 6 in',
      weight: '2850 lbs',
      acceleration: '0-60: 6.7s',
      topSpeed: '171 mph'
    },
    description: 'The Miura established the mid-engine supercar template and showcased Lamborghini\'s bold design philosophy.',
    significance: 'Created the blueprint for modern supercars with its mid-engine layout and dramatic wedge-shaped design.',
    images: ['https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg'],
    rating: 4.8,
    reviews: 432,
    featured: true
  }
];

export const manufacturers = [...new Set(cars.map(car => car.manufacturer))].sort();
export const countries = [...new Set(cars.map(car => car.country))].sort();
export const types = [...new Set(cars.map(car => car.type))].sort();
export const drivetrains = [...new Set(cars.map(car => car.drivetrain))].sort();
export const engineTypes = [...new Set(cars.map(car => car.engine.type))].sort();