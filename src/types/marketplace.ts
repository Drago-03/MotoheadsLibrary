export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  location?: {
    latitude: number;
    longitude: number;
    city: string;
    state: string;
    country: string;
  };
  vehiclePreferences: VehicleType[];
  createdAt: string;
  updatedAt: string;
}

export interface VehicleType {
  id: string;
  name: string;
  category: 'car' | 'motorcycle' | 'truck' | 'atv' | 'boat' | 'other';
  icon: string;
  isActive: boolean;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  type: VehicleType;
  engine?: string;
  transmission?: string;
  drivetrain?: string;
}

export interface ModificationCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  vehicleTypes: string[];
  parentCategory?: string;
  subcategories?: ModificationCategory[];
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: number;
  views: number;
  likes: number;
  dislikes: number;
  uploadDate: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
    verified: boolean;
  };
  vehicle: Vehicle;
  modificationCategory: ModificationCategory;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  tools: string[];
  estimatedTime: string;
  cost: {
    min: number;
    max: number;
    currency: string;
  };
  tags: string[];
  rating: number;
  reviewCount: number;
}

export interface Part {
  id: string;
  name: string;
  description: string;
  partNumber: string;
  brand: string;
  category: ModificationCategory;
  compatibleVehicles: Vehicle[];
  images: string[];
  specifications: { [key: string]: string };
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
    unit: string;
  };
  warranty?: string;
  rating: number;
  reviewCount: number;
  tags: string[];
}

export interface PartListing {
  distance: any;
  id: string;
  part: Part;
  supplier: Supplier;
  price: number;
  currency: string;
  availability: 'in-stock' | 'low-stock' | 'out-of-stock' | 'backorder';
  quantity: number;
  condition: 'new' | 'used' | 'refurbished';
  shipping: {
    cost: number;
    estimatedDays: number;
    methods: string[];
    freeShippingThreshold?: number;
  };
  location: {
    city: string;
    state: string;
    country: string;
    coordinates?: [number, number];
  };
  lastUpdated: string;
}

export interface Supplier {
  id: string;
  name: string;
  logo?: string;
  website: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  location: {
    city: string;
    state: string;
    country: string;
  };
  shippingRegions: string[];
  returnPolicy: string;
  contactInfo: {
    phone?: string;
    email?: string;
  };
}

export interface CartItem {
  id: string;
  partListing: PartListing;
  quantity: number;
  addedAt: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  currency: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  trackingNumber?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Review {
  id: string;
  userId: string;
  user: {
    username: string;
    avatar?: string;
  };
  targetId: string;
  targetType: 'video' | 'part' | 'supplier';
  rating: number;
  title: string;
  content: string;
  images?: string[];
  helpful: number;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceCenter {
  id: string;
  name: string;
  type: 'auto-shop' | 'parts-store' | 'service-center' | 'dealership';
  address: Address;
  coordinates: [number, number];
  phone: string;
  website?: string;
  hours: { [day: string]: string };
  services: string[];
  specialties: VehicleType[];
  rating: number;
  reviewCount: number;
  distance?: number;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
}

export interface SearchFilters {
  query: string;
  vehicleType?: string;
  make?: string;
  model?: string;
  year?: number;
  category?: string;
  priceRange?: [number, number];
  location?: {
    latitude: number;
    longitude: number;
    radius: number;
  };
  availability?: string;
  condition?: string;
  rating?: number;
  sortBy: 'relevance' | 'price-low' | 'price-high' | 'rating' | 'distance' | 'newest';
}