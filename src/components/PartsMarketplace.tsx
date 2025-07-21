import React, { useState, useMemo, useEffect } from 'react';
import { Search, Filter, MapPin, Star, ShoppingCart, Truck, Clock, DollarSign, Package, AlertCircle } from 'lucide-react';
import { PartListing, SearchFilters, ServiceCenter } from '../types/marketplace';
import { samplePartListings, sampleServiceCenters, vehicleTypes, modificationCategories } from '../data/marketplace';

interface PartsMarketplaceProps {
  userLocation?: { latitude: number; longitude: number; city: string; state: string; country: string };
  onAddToCart: (listing: PartListing, quantity: number) => void;
}

const PartsMarketplace: React.FC<PartsMarketplaceProps> = ({ userLocation, onAddToCart }) => {
  const [filters, setFilters] = useState<Partial<SearchFilters>>({
    query: '',
    vehicleType: '',
    category: '',
    priceRange: [0, 5000],
    availability: '',
    condition: '',
    sortBy: 'relevance'
  });
  const [selectedListing, setSelectedListing] = useState<PartListing | null>(null);
  const [nearbyServices, setNearbyServices] = useState<ServiceCenter[]>([]);

  // Calculate distance between two coordinates
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Filter and sort parts
  const filteredListings = useMemo(() => {
    let filtered = samplePartListings.filter(listing => {
      if (filters.query && !listing.part.name.toLowerCase().includes(filters.query.toLowerCase()) &&
          !listing.part.description.toLowerCase().includes(filters.query.toLowerCase()) &&
          !listing.part.tags.some(tag => tag.toLowerCase().includes(filters.query?.toLowerCase() || ''))) {
        return false;
      }
      
      if (filters.availability && listing.availability !== filters.availability) {
        return false;
      }
      
      if (filters.condition && listing.condition !== filters.condition) {
        return false;
      }
      
      if (filters.priceRange && (listing.price < filters.priceRange[0] || listing.price > filters.priceRange[1])) {
        return false;
      }
      
      return true;
    });

    // Add distance calculation if user location is available
    if (userLocation) {
      filtered = filtered.map(listing => ({
        ...listing,
        distance: listing.location.coordinates 
          ? calculateDistance(
              userLocation.latitude, 
              userLocation.longitude,
              listing.location.coordinates[1],
              listing.location.coordinates[0]
            )
          : undefined
      }));
    }

    // Sort listings
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'distance':
          if (a.distance && b.distance) return a.distance - b.distance;
          return 0;
        case 'rating':
          return b.part.rating - a.part.rating;
        case 'relevance':
        default:
          return 0;
      }
    });

    return filtered;
  }, [filters, userLocation]);

  // Get nearby service centers
  useEffect(() => {
    if (userLocation) {
      const nearby = sampleServiceCenters.map(center => ({
        ...center,
        distance: calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          center.coordinates[1],
          center.coordinates[0]
        )
      })).filter(center => center.distance! <= 25).sort((a, b) => a.distance! - b.distance!);
      
      setNearbyServices(nearby);
    }
  }, [userLocation]);

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'in-stock': return 'text-green-400';
      case 'low-stock': return 'text-yellow-400';
      case 'out-of-stock': return 'text-red-400';
      case 'backorder': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'in-stock': return <Package className="w-4 h-4 text-green-400" />;
      case 'low-stock': return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case 'out-of-stock': return <AlertCircle className="w-4 h-4 text-red-400" />;
      case 'backorder': return <Clock className="w-4 h-4 text-orange-400" />;
      default: return <Package className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Parts Marketplace</h1>
          <p className="text-gray-300">Find the best deals on automotive parts from trusted suppliers</p>
          {userLocation && (
            <div className="flex items-center space-x-2 mt-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Showing results near {userLocation.city}, {userLocation.state}</span>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30 sticky top-6">
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-semibold mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search parts..."
                    value={filters.query}
                    onChange={(e) => setFilters({ ...filters, query: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Price Range: ${filters.priceRange?.[0]} - ${filters.priceRange?.[1]}
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="50"
                    value={filters.priceRange?.[0] || 0}
                    onChange={(e) => setFilters({ 
                      ...filters, 
                      priceRange: [parseInt(e.target.value), filters.priceRange?.[1] || 5000] 
                    })}
                    className="w-full accent-red-500"
                  />
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="50"
                    value={filters.priceRange?.[1] || 5000}
                    onChange={(e) => setFilters({ 
                      ...filters, 
                      priceRange: [filters.priceRange?.[0] || 0, parseInt(e.target.value)] 
                    })}
                    className="w-full accent-red-500"
                  />
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <label className="block text-gray-300 text-sm font-semibold mb-2">Availability</label>
                <select
                  value={filters.availability}
                  onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Filter by availability"
                >
                  <option value="">All</option>
                  <option value="in-stock">In Stock</option>
                  <option value="low-stock">Low Stock</option>
                  <option value="backorder">Backorder</option>
                </select>
              </div>

              {/* Condition */}
              <div className="mb-6">
                <select
                  value={filters.condition}
                  onChange={(e) => setFilters({ ...filters, condition: e.target.value })}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Filter by condition"
                >
                  <option value="">All</option>
                  <option value="new">New</option>
                  <option value="used">Used</option>
                  <option value="refurbished">Refurbished</option>
                </select>
              </div>

              {/* Sort */}
              <div className="mb-6">
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label="Sort results by"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  {userLocation && <option value="distance">Distance</option>}
                </select>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => setFilters({
                  query: '',
                  vehicleType: '',
                  category: '',
                  priceRange: [0, 5000],
                  availability: '',
                  condition: '',
                  sortBy: 'relevance'
                })}
                className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>

            {/* Nearby Services */}
            {nearbyServices.length > 0 && (
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30 mt-6">
                <h3 className="text-white font-bold mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Nearby Services
                </h3>
                <div className="space-y-3">
                  {nearbyServices.slice(0, 3).map(service => (
                    <div key={service.id} className="bg-gray-800 rounded-lg p-3">
                      <h4 className="text-white font-semibold text-sm">{service.name}</h4>
                      <p className="text-gray-400 text-xs">{service.type.replace('-', ' ')}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-yellow-400 text-xs">{service.rating}</span>
                        </div>
                        <span className="text-gray-400 text-xs">{service.distance?.toFixed(1)} mi</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="mb-6">
              <p className="text-gray-300">
                Showing {filteredListings.length} result{filteredListings.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Parts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredListings.map(listing => (
                <div
                  key={listing.id}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300"
                >
                  {/* Part Image */}
                  <div className="mb-4">
                    <img
                      src={listing.part.images[0]}
                      alt={listing.part.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  {/* Part Info */}
                  <div className="mb-4">
                    <h3 className="text-white font-bold text-lg mb-2">{listing.part.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{listing.part.brand} • {listing.part.partNumber}</p>
                    <p className="text-gray-300 text-sm line-clamp-2">{listing.part.description}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= Math.floor(listing.part.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">({listing.part.reviewCount})</span>
                  </div>

                  {/* Supplier Info */}
                  <div className="bg-gray-700 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">{listing.supplier.name}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 text-sm">{listing.supplier.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Location:</span>
                      <span className="text-gray-300">{listing.location.city}, {listing.location.state}</span>
                    </div>
                    {listing.distance && (
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Distance:</span>
                        <span className="text-gray-300">{listing.distance.toFixed(1)} miles</span>
                      </div>
                    )}
                  </div>

                  {/* Availability & Condition */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      {getAvailabilityIcon(listing.availability)}
                      <span className={`text-sm font-semibold ${getAvailabilityColor(listing.availability)}`}>
                        {listing.availability.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      {listing.condition.toUpperCase()}
                    </span>
                  </div>

                  {/* Shipping Info */}
                  <div className="bg-gray-700 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Truck className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">Shipping:</span>
                      </div>
                      <span className="text-white">
                        {listing.shipping.cost === 0 ? 'FREE' : `$${listing.shipping.cost}`}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-gray-400">Estimated delivery:</span>
                      <span className="text-gray-300">{listing.shipping.estimatedDays} days</span>
                    </div>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-green-400">${listing.price}</span>
                      <span className="text-gray-400 text-sm ml-1">{listing.currency}</span>
                    </div>
                    <button
                      onClick={() => onAddToCart(listing, 1)}
                      disabled={listing.availability === 'out-of-stock'}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredListings.length === 0 && (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400 mb-2">No parts found</h3>
                <p className="text-gray-500">Try adjusting your search filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartsMarketplace;