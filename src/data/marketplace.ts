import { VehicleType, ModificationCategory, Video, Part, PartListing, Supplier, ServiceCenter } from '../types/marketplace';

export const vehicleTypes: VehicleType[] = [
  { id: '1', name: 'Cars', category: 'car', icon: '🚗', isActive: true },
  { id: '2', name: 'Motorcycles', category: 'motorcycle', icon: '🏍️', isActive: true },
  { id: '3', name: 'Trucks', category: 'truck', icon: '🚛', isActive: true },
  { id: '4', name: 'ATVs', category: 'atv', icon: '🏎️', isActive: false },
  { id: '5', name: 'Boats', category: 'boat', icon: '🚤', isActive: false },
];

export const modificationCategories: ModificationCategory[] = [
  {
    id: '1',
    name: 'Engine & Performance',
    slug: 'engine-performance',
    description: 'Boost your vehicle\'s power and efficiency',
    icon: '⚙️',
    vehicleTypes: ['car', 'motorcycle', 'truck'],
    subcategories: [
      {
        id: '1-1',
        name: 'Turbochargers & Superchargers',
        slug: 'forced-induction',
        description: 'Forced induction systems',
        icon: '🌪️',
        vehicleTypes: ['car', 'truck']
      },
      {
        id: '1-2',
        name: 'Exhaust Systems',
        slug: 'exhaust',
        description: 'Performance exhaust upgrades',
        icon: '💨',
        vehicleTypes: ['car', 'motorcycle', 'truck']
      },
      {
        id: '1-3',
        name: 'Air Intake Systems',
        slug: 'air-intake',
        description: 'Cold air intakes and filters',
        icon: '🌬️',
        vehicleTypes: ['car', 'motorcycle', 'truck']
      }
    ]
  },
  {
    id: '2',
    name: 'Suspension & Handling',
    slug: 'suspension-handling',
    description: 'Improve ride quality and cornering',
    icon: '🔧',
    vehicleTypes: ['car', 'truck'],
    subcategories: [
      {
        id: '2-1',
        name: 'Coilovers',
        slug: 'coilovers',
        description: 'Adjustable suspension systems',
        icon: '🔩',
        vehicleTypes: ['car']
      },
      {
        id: '2-2',
        name: 'Sway Bars',
        slug: 'sway-bars',
        description: 'Anti-roll bars for better handling',
        icon: '⚖️',
        vehicleTypes: ['car', 'truck']
      }
    ]
  },
  {
    id: '3',
    name: 'Exterior & Styling',
    slug: 'exterior-styling',
    description: 'Enhance your vehicle\'s appearance',
    icon: '🎨',
    vehicleTypes: ['car', 'motorcycle', 'truck'],
    subcategories: [
      {
        id: '3-1',
        name: 'Body Kits',
        slug: 'body-kits',
        description: 'Aerodynamic body modifications',
        icon: '🏎️',
        vehicleTypes: ['car']
      },
      {
        id: '3-2',
        name: 'Wheels & Tires',
        slug: 'wheels-tires',
        description: 'Custom wheels and performance tires',
        icon: '⚪',
        vehicleTypes: ['car', 'truck']
      }
    ]
  },
  {
    id: '4',
    name: 'Interior & Electronics',
    slug: 'interior-electronics',
    description: 'Upgrade comfort and technology',
    icon: '📱',
    vehicleTypes: ['car', 'motorcycle', 'truck'],
    subcategories: [
      {
        id: '4-1',
        name: 'Audio Systems',
        slug: 'audio',
        description: 'Sound systems and speakers',
        icon: '🔊',
        vehicleTypes: ['car', 'truck']
      },
      {
        id: '4-2',
        name: 'Gauges & Instruments',
        slug: 'gauges',
        description: 'Performance monitoring equipment',
        icon: '📊',
        vehicleTypes: ['car', 'motorcycle', 'truck']
      }
    ]
  }
];

export const sampleVideos: Video[] = [
  {
    id: '1',
    title: 'Installing a Cold Air Intake - Honda Civic Type R',
    description: 'Complete step-by-step guide to installing a performance cold air intake system on a Honda Civic Type R. Includes all tools needed and performance gains.',
    thumbnailUrl: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg',
    videoUrl: 'https://example.com/video1.mp4',
    duration: 1245,
    views: 15420,
    likes: 892,
    dislikes: 23,
    uploadDate: '2024-01-15',
    author: {
      id: 'author1',
      name: 'TurboTech Garage',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      verified: true
    },
    vehicle: {
      id: 'vehicle1',
      make: 'Honda',
      model: 'Civic Type R',
      year: 2023,
      type: vehicleTypes[0],
      engine: '2.0L Turbo',
      transmission: '6-Speed Manual',
      drivetrain: 'FWD'
    },
    modificationCategory: modificationCategories[0].subcategories![2],
    difficulty: 'intermediate',
    tools: ['Socket Set', 'Screwdrivers', 'Pliers', 'Jack Stands'],
    estimatedTime: '2-3 hours',
    cost: { min: 200, max: 500, currency: 'USD' },
    tags: ['honda', 'civic', 'type-r', 'cold-air-intake', 'performance'],
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: '2',
    title: 'Coilover Installation - BMW E46 M3',
    description: 'Professional coilover installation on a BMW E46 M3. Learn proper alignment techniques and suspension setup for track use.',
    thumbnailUrl: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
    videoUrl: 'https://example.com/video2.mp4',
    duration: 2156,
    views: 8934,
    likes: 567,
    dislikes: 12,
    uploadDate: '2024-01-10',
    author: {
      id: 'author2',
      name: 'Precision Motorsports',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      verified: true
    },
    vehicle: {
      id: 'vehicle2',
      make: 'BMW',
      model: 'M3',
      year: 2004,
      type: vehicleTypes[0],
      engine: '3.2L S54',
      transmission: '6-Speed Manual',
      drivetrain: 'RWD'
    },
    modificationCategory: modificationCategories[1].subcategories![0],
    difficulty: 'advanced',
    tools: ['Spring Compressor', 'Torque Wrench', 'Jack', 'Jack Stands', 'Alignment Tools'],
    estimatedTime: '4-6 hours',
    cost: { min: 1200, max: 2500, currency: 'USD' },
    tags: ['bmw', 'e46', 'm3', 'coilovers', 'suspension', 'track'],
    rating: 4.9,
    reviewCount: 89
  }
];

export const sampleSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'AutoZone',
    logo: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg',
    website: 'https://autozone.com',
    rating: 4.2,
    reviewCount: 15420,
    verified: true,
    location: { city: 'Memphis', state: 'TN', country: 'USA' },
    shippingRegions: ['USA', 'Canada'],
    returnPolicy: '30-day return policy',
    contactInfo: { phone: '1-800-AUTOZONE', email: 'support@autozone.com' }
  },
  {
    id: '2',
    name: 'Summit Racing',
    logo: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg',
    website: 'https://summitracing.com',
    rating: 4.7,
    reviewCount: 8934,
    verified: true,
    location: { city: 'Akron', state: 'OH', country: 'USA' },
    shippingRegions: ['USA', 'Canada', 'International'],
    returnPolicy: '90-day return policy',
    contactInfo: { phone: '1-800-230-3030', email: 'help@summitracing.com' }
  },
  {
    id: '3',
    name: 'FCP Euro',
    logo: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg',
    website: 'https://fcpeuro.com',
    rating: 4.8,
    reviewCount: 5672,
    verified: true,
    location: { city: 'Milford', state: 'CT', country: 'USA' },
    shippingRegions: ['USA', 'Canada'],
    returnPolicy: 'Lifetime replacement guarantee',
    contactInfo: { phone: '1-877-634-0063', email: 'info@fcpeuro.com' }
  }
];

export const sampleParts: Part[] = [
  {
    id: '1',
    name: 'K&N Performance Air Filter',
    description: 'High-flow washable air filter for improved engine performance and fuel economy.',
    partNumber: '33-2304',
    brand: 'K&N',
    category: modificationCategories[0].subcategories![2],
    compatibleVehicles: [
      {
        id: 'vehicle1',
        make: 'Honda',
        model: 'Civic',
        year: 2020,
        type: vehicleTypes[0]
      }
    ],
    images: [
      'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg'
    ],
    specifications: {
      'Filter Type': 'Cotton Gauze',
      'Cleaning': 'Washable & Reusable',
      'Warranty': '10 Year/Million Mile',
      'Flow Rate': '+50% vs stock'
    },
    weight: 1.2,
    dimensions: { length: 12, width: 8, height: 2, unit: 'inches' },
    warranty: '10 Year/Million Mile Limited Warranty',
    rating: 4.6,
    reviewCount: 342,
    tags: ['air-filter', 'performance', 'washable', 'honda', 'civic']
  },
  {
    id: '2',
    name: 'Bilstein B14 Coilover Kit',
    description: 'Premium coilover suspension system with adjustable damping and ride height.',
    partNumber: '47-264423',
    brand: 'Bilstein',
    category: modificationCategories[1].subcategories![0],
    compatibleVehicles: [
      {
        id: 'vehicle2',
        make: 'BMW',
        model: 'M3',
        year: 2004,
        type: vehicleTypes[0]
      }
    ],
    images: [
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
      'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg'
    ],
    specifications: {
      'Damping': '10-Way Adjustable',
      'Ride Height': 'Adjustable 0.8-2.4 inches',
      'Spring Rate': 'Progressive',
      'Material': 'Aluminum/Steel'
    },
    weight: 45.5,
    dimensions: { length: 24, width: 8, height: 8, unit: 'inches' },
    warranty: '2 Year Limited Warranty',
    rating: 4.9,
    reviewCount: 127,
    tags: ['coilovers', 'suspension', 'adjustable', 'bmw', 'm3', 'bilstein']
  }
];

export const samplePartListings: PartListing[] = [
  {
    id: '1',
    part: sampleParts[0],
    supplier: sampleSuppliers[0],
    price: 89.99,
    currency: 'USD',
    availability: 'in-stock',
    quantity: 25,
    condition: 'new',
    shipping: {
      cost: 9.99,
      estimatedDays: 3,
      methods: ['Standard', 'Express'],
      freeShippingThreshold: 75
    },
    location: {
      city: 'Memphis',
      state: 'TN',
      country: 'USA',
      coordinates: [-90.0490, 35.2271]
    },
    lastUpdated: '2024-01-20T10:30:00Z'
  },
  {
    id: '2',
    part: sampleParts[0],
    supplier: sampleSuppliers[1],
    price: 84.95,
    currency: 'USD',
    availability: 'in-stock',
    quantity: 15,
    condition: 'new',
    shipping: {
      cost: 12.99,
      estimatedDays: 2,
      methods: ['Standard', 'Express', 'Overnight'],
      freeShippingThreshold: 99
    },
    location: {
      city: 'Akron',
      state: 'OH',
      country: 'USA',
      coordinates: [-81.5190, 41.0814]
    },
    lastUpdated: '2024-01-20T09:15:00Z'
  },
  {
    id: '3',
    part: sampleParts[1],
    supplier: sampleSuppliers[2],
    price: 1899.99,
    currency: 'USD',
    availability: 'low-stock',
    quantity: 3,
    condition: 'new',
    shipping: {
      cost: 0,
      estimatedDays: 5,
      methods: ['Standard'],
      freeShippingThreshold: 0
    },
    location: {
      city: 'Milford',
      state: 'CT',
      country: 'USA',
      coordinates: [-73.0568, 41.2226]
    },
    lastUpdated: '2024-01-20T08:45:00Z'
  }
];

export const sampleServiceCenters: ServiceCenter[] = [
  {
    id: '1',
    name: 'Precision Auto Works',
    type: 'auto-shop',
    address: {
      street: '123 Main St',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90210',
      country: 'USA'
    },
    coordinates: [-118.2437, 34.0522],
    phone: '(555) 123-4567',
    website: 'https://precisionautoworks.com',
    hours: {
      'Monday': '8:00 AM - 6:00 PM',
      'Tuesday': '8:00 AM - 6:00 PM',
      'Wednesday': '8:00 AM - 6:00 PM',
      'Thursday': '8:00 AM - 6:00 PM',
      'Friday': '8:00 AM - 6:00 PM',
      'Saturday': '9:00 AM - 4:00 PM',
      'Sunday': 'Closed'
    },
    services: ['Engine Tuning', 'Suspension Work', 'Custom Fabrication', 'Dyno Testing'],
    specialties: [vehicleTypes[0], vehicleTypes[2]],
    rating: 4.8,
    reviewCount: 156,
    priceRange: '$$$'
  },
  {
    id: '2',
    name: 'AutoZone Store #1234',
    type: 'parts-store',
    address: {
      street: '456 Commerce Blvd',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90211',
      country: 'USA'
    },
    coordinates: [-118.2537, 34.0622],
    phone: '(555) 987-6543',
    website: 'https://autozone.com',
    hours: {
      'Monday': '7:00 AM - 10:00 PM',
      'Tuesday': '7:00 AM - 10:00 PM',
      'Wednesday': '7:00 AM - 10:00 PM',
      'Thursday': '7:00 AM - 10:00 PM',
      'Friday': '7:00 AM - 10:00 PM',
      'Saturday': '7:00 AM - 10:00 PM',
      'Sunday': '8:00 AM - 9:00 PM'
    },
    services: ['Parts Sales', 'Battery Testing', 'Tool Rental', 'Installation Help'],
    specialties: [vehicleTypes[0], vehicleTypes[1], vehicleTypes[2]],
    rating: 4.2,
    reviewCount: 89,
    priceRange: '$$'
  }
];