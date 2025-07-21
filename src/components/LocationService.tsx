import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Phone, Clock, Star, ExternalLink, Car, Wrench, Package, Building } from 'lucide-react';
import { ServiceCenter } from '../types/marketplace';
import { sampleServiceCenters } from '../data/marketplace';

interface LocationServiceProps {
  userLocation?: { latitude: number; longitude: number; city: string; state: string; country: string };
  onLocationUpdate: (location: { latitude: number; longitude: number; city: string; state: string; country: string }) => void;
}

const LocationService: React.FC<LocationServiceProps> = ({ userLocation, onLocationUpdate }) => {
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [nearbyServices, setNearbyServices] = useState<(ServiceCenter & { distance?: number })[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');

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

  // Get user's current location
  const getCurrentLocation = () => {
    setIsLocating(true);
    setLocationError(null);

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by this browser');
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // In a real app, you'd use a reverse geocoding service
          // For demo purposes, we'll use a mock location
          const mockLocation = {
            latitude,
            longitude,
            city: 'Los Angeles',
            state: 'CA',
            country: 'USA'
          };
          
          onLocationUpdate(mockLocation);
          setIsLocating(false);
        } catch (error) {
          setLocationError('Failed to get location details');
          setIsLocating(false);
        }
      },
      (error) => {
        let errorMessage = 'Failed to get location';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied by user';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information unavailable';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out';
            break;
        }
        setLocationError(errorMessage);
        setIsLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000
      }
    );
  };

  // Update nearby services when location changes
  useEffect(() => {
    if (userLocation) {
      const servicesWithDistance = sampleServiceCenters.map(service => ({
        ...service,
        distance: calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          service.coordinates[1],
          service.coordinates[0]
        )
      })).filter(service => service.distance! <= 50) // Within 50 miles
        .sort((a, b) => a.distance! - b.distance!);
      
      setNearbyServices(servicesWithDistance);
    }
  }, [userLocation]);

  // Filter services by type
  const filteredServices = nearbyServices.filter(service => 
    selectedType === 'all' || service.type === selectedType
  );

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'auto-shop': return <Wrench className="w-5 h-5" />;
      case 'parts-store': return <Package className="w-5 h-5" />;
      case 'service-center': return <Car className="w-5 h-5" />;
      case 'dealership': return <Building className="w-5 h-5" />;
      default: return <MapPin className="w-5 h-5" />;
    }
  };

  const getServiceTypeColor = (type: string) => {
    switch (type) {
      case 'auto-shop': return 'text-red-400';
      case 'parts-store': return 'text-blue-400';
      case 'service-center': return 'text-green-400';
      case 'dealership': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const formatHours = (hours: { [day: string]: string }) => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    return hours[today] || 'Hours not available';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Location Services</h1>
          <p className="text-gray-300">Find nearby auto shops, parts stores, and service centers</p>
        </div>

        {/* Location Controls */}
        <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-red-500/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold flex items-center">
              <Navigation className="w-5 h-5 mr-2" />
              Your Location
            </h3>
            <button
              onClick={getCurrentLocation}
              disabled={isLocating}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <MapPin className="w-4 h-4" />
              <span>{isLocating ? 'Locating...' : 'Get Current Location'}</span>
            </button>
          </div>

          {userLocation && (
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-green-400 mb-2">
                <MapPin className="w-4 h-4" />
                <span className="font-semibold">Location Detected</span>
              </div>
              <p className="text-white">{userLocation.city}, {userLocation.state}, {userLocation.country}</p>
              <p className="text-gray-400 text-sm">
                Coordinates: {userLocation.latitude.toFixed(4)}, {userLocation.longitude.toFixed(4)}
              </p>
            </div>
          )}

          {locationError && (
            <div className="bg-red-900/50 border border-red-500 rounded-lg p-4">
              <p className="text-red-400">{locationError}</p>
            </div>
          )}

          {!userLocation && !locationError && (
            <div className="bg-yellow-900/50 border border-yellow-500 rounded-lg p-4">
              <p className="text-yellow-400">
                Enable location services to find nearby automotive services and get accurate shipping estimates.
              </p>
            </div>
          )}
        </div>

        {/* Service Type Filter */}
        {userLocation && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', name: 'All Services', icon: '🏪' },
                { id: 'auto-shop', name: 'Auto Shops', icon: '🔧' },
                { id: 'parts-store', name: 'Parts Stores', icon: '📦' },
                { id: 'service-center', name: 'Service Centers', icon: '🚗' },
                { id: 'dealership', name: 'Dealerships', icon: '🏢' }
              ].map(type => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedType === type.id
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {type.icon} {type.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Services List */}
        {userLocation && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">
                Nearby Services ({filteredServices.length})
              </h3>
              <p className="text-gray-400">Within 50 miles of your location</p>
            </div>

            {filteredServices.length === 0 ? (
              <div className="text-center py-12">
                <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400 mb-2">No services found</h3>
                <p className="text-gray-500">Try expanding your search radius or changing the service type</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredServices.map(service => (
                  <div
                    key={service.id}
                    className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className={getServiceTypeColor(service.type)}>
                            {getServiceIcon(service.type)}
                          </div>
                          <h4 className="text-white font-bold text-lg">{service.name}</h4>
                        </div>
                        <p className="text-gray-400 text-sm capitalize">
                          {service.type.replace('-', ' ')}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 mb-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-yellow-400 font-semibold">{service.rating}</span>
                          <span className="text-gray-400 text-sm">({service.reviewCount})</span>
                        </div>
                        <span className="text-green-400 font-semibold">
                          {service.distance?.toFixed(1)} mi
                        </span>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                        <div>
                          <p className="text-white">{service.address.street}</p>
                          <p className="text-gray-400">
                            {service.address.city}, {service.address.state} {service.address.zipCode}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-blue-400" />
                        <a href={`tel:${service.phone}`} className="text-blue-400 hover:text-blue-300">
                          {service.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{formatHours(service.hours)}</span>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mb-4">
                      <h5 className="text-white font-semibold mb-2">Services:</h5>
                      <div className="flex flex-wrap gap-1">
                        {service.services.slice(0, 3).map((serviceItem, index) => (
                          <span
                            key={index}
                            className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                          >
                            {serviceItem}
                          </span>
                        ))}
                        {service.services.length > 3 && (
                          <span className="text-gray-400 text-xs">
                            +{service.services.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="mb-4">
                      <span className="text-gray-400">Price Range: </span>
                      <span className="text-green-400 font-semibold">{service.priceRange}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                        <Navigation className="w-4 h-4" />
                        <span>Directions</span>
                      </button>
                      {service.website && (
                        <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2">
                          <ExternalLink className="w-4 h-4" />
                          <span>Website</span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Map Placeholder */}
        {userLocation && (
          <div className="mt-8 bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-white font-bold mb-4">Service Locations Map</h3>
            <div className="bg-gray-700 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Interactive map would be displayed here</p>
                <p className="text-gray-500 text-sm">
                  In production, integrate with Google Maps, Mapbox, or similar mapping service
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationService;