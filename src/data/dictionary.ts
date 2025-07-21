import { DictionaryTerm } from '../types';

export const dictionaryTerms: DictionaryTerm[] = [
  {
    id: '1',
    term: 'Horsepower',
    definition: 'A unit of measurement for engine power, originally based on the power of a horse. One horsepower equals 746 watts.',
    category: 'engine',
    pronunciation: 'HAWRS-pow-er',
    relatedTerms: ['Torque', 'Engine', 'Performance'],
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg'
  },
  {
    id: '2',
    term: 'Torque',
    definition: 'The rotational force produced by an engine, measured in pound-feet (lb-ft) or Newton-meters (Nm). Higher torque provides better acceleration.',
    category: 'engine',
    pronunciation: 'TORK',
    relatedTerms: ['Horsepower', 'Engine', 'Acceleration'],
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg'
  },
  {
    id: '3',
    term: 'Aerodynamics',
    definition: 'The study of how air flows around a vehicle. Good aerodynamics reduce drag and improve fuel efficiency and performance.',
    category: 'body',
    pronunciation: 'air-oh-dy-NAM-iks',
    relatedTerms: ['Drag Coefficient', 'Downforce', 'Spoiler'],
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg'
  },
  {
    id: '4',
    term: 'Turbocharger',
    definition: 'A forced induction system that uses exhaust gases to spin a turbine, which compresses incoming air to increase engine power.',
    category: 'engine',
    pronunciation: 'TUR-bo-char-jer',
    relatedTerms: ['Supercharger', 'Boost', 'Intercooler'],
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg'
  },
  {
    id: '5',
    term: 'Apex',
    definition: 'The innermost point of a corner on a race track, representing the optimal racing line through a turn.',
    category: 'racing',
    pronunciation: 'AY-peks',
    relatedTerms: ['Racing Line', 'Corner', 'Track'],
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg'
  },
  {
    id: '6',
    term: 'Differential',
    definition: 'A gear system that allows wheels to rotate at different speeds, especially important when turning corners.',
    category: 'transmission',
    pronunciation: 'dif-er-EN-shal',
    relatedTerms: ['Transmission', 'Drivetrain', 'Limited Slip'],
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg'
  },
  {
    id: '7',
    term: 'Coilover',
    definition: 'A suspension component that combines a coil spring and shock absorber in one unit, often adjustable for height and damping.',
    category: 'suspension',
    pronunciation: 'KOYL-oh-ver',
    relatedTerms: ['Suspension', 'Shock Absorber', 'Spring'],
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg'
  },
  {
    id: '8',
    term: 'ECU',
    definition: 'Engine Control Unit - the computer that manages engine functions like fuel injection, ignition timing, and emissions control.',
    category: 'electrical',
    pronunciation: 'E-C-U',
    relatedTerms: ['Computer', 'Tuning', 'Sensors'],
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg'
  },
  {
    id: '9',
    term: 'Downforce',
    definition: 'Aerodynamic force that pushes a car down onto the track, improving grip and cornering ability at high speeds.',
    category: 'racing',
    pronunciation: 'DOWN-fors',
    relatedTerms: ['Aerodynamics', 'Wing', 'Grip'],
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg'
  },
  {
    id: '10',
    term: 'Burnout',
    definition: 'Spinning the rear wheels while keeping the car stationary, often done to heat up tires or for show.',
    category: 'general',
    pronunciation: 'BURN-owt',
    relatedTerms: ['Tires', 'Traction', 'Drag Racing'],
    image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg'
  }
];

export const categories = [
  { id: 'all', name: 'All Terms', icon: '🏎️' },
  { id: 'engine', name: 'Engine', icon: '⚙️' },
  { id: 'body', name: 'Body & Exterior', icon: '🚗' },
  { id: 'racing', name: 'Racing', icon: '🏁' },
  { id: 'transmission', name: 'Transmission', icon: '🔧' },
  { id: 'suspension', name: 'Suspension', icon: '🔩' },
  { id: 'electrical', name: 'Electrical', icon: '⚡' },
  { id: 'general', name: 'General', icon: '📚' }
];