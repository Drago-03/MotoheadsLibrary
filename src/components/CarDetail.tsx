import React from 'react';
import { X, Star, Calendar, MapPin, Zap, Settings, Gauge, Car, Fuel, Cog } from 'lucide-react';
import { Car as CarType } from '../types/car';

interface CarDetailProps {
  car: CarType;
  onClose: () => void;
}

const CarDetail: React.FC<CarDetailProps> = ({ car, onClose }) => {
  const getEngineIcon = (type: string) => {
    switch (type) {
      case 'Electric':
        return <Zap className="h-5 w-5 text-blue-400" />;
      case 'Hybrid':
        return <Zap className="h-5 w-5 text-green-400" />;
      default:
        return <Settings className="h-5 w-5 text-slate-400" />;
    }
  };

  const specs = [
    { label: 'Length', value: car.specifications.length, icon: <Car className="h-4 w-4" /> },
    { label: 'Width', value: car.specifications.width, icon: <Car className="h-4 w-4" /> },
    { label: 'Height', value: car.specifications.height, icon: <Car className="h-4 w-4" /> },
    { label: 'Weight', value: car.specifications.weight, icon: <Car className="h-4 w-4" /> },
    { label: '0-60 mph', value: car.specifications.acceleration, icon: <Gauge className="h-4 w-4" /> },
    { label: 'Top Speed', value: car.specifications.topSpeed, icon: <Gauge className="h-4 w-4" /> },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">{car.name}</h2>
            <p className="text-slate-400">{car.manufacturer} • {car.model}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <X className="h-6 w-6 text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Hero Image */}
          <div className="mb-8">
            <img
              src={car.images[0]}
              alt={car.name}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
          </div>

          {/* Key Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-4">Overview</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-amber-400" />
                  <span className="text-slate-300">Year: {car.year}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  <span className="text-slate-300">Country: {car.country}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="h-5 w-5 text-amber-400" />
                  <span className="text-slate-300">Type: {car.type}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Cog className="h-5 w-5 text-amber-400" />
                  <span className="text-slate-300">Drivetrain: {car.drivetrain}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-amber-400 fill-current" />
                  <span className="text-slate-300">Rating: {car.rating}/5 ({car.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-4">Pricing & Production</h3>
              <div className="space-y-3">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <span className="text-2xl font-bold text-amber-400">
                    ${car.price.msrp.toLocaleString()}
                  </span>
                  <p className="text-slate-400 text-sm">Original MSRP</p>
                </div>
                <div className="text-slate-300">
                  <p className="font-semibold">Production Run:</p>
                  <p>
                    {car.production.start}
                    {car.production.end && ` - ${car.production.end}`}
                  </p>
                  <p className="text-sm text-slate-400">
                    {car.production.total.toLocaleString()} units produced
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Engine Specifications */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-amber-400 mb-4">Engine & Performance</h3>
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    {getEngineIcon(car.engine.type)}
                    <div>
                      <p className="text-white font-semibold">{car.engine.type}</p>
                      {car.engine.displacement && (
                        <p className="text-slate-400 text-sm">{car.engine.displacement}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Gauge className="h-5 w-5 text-red-400" />
                    <div>
                      <p className="text-white font-semibold">{car.engine.horsepower} hp</p>
                      <p className="text-slate-400 text-sm">Horsepower</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Cog className="h-5 w-5 text-green-400" />
                    <div>
                      <p className="text-white font-semibold">{car.engine.torque}</p>
                      <p className="text-slate-400 text-sm">Torque</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Cog className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-white font-semibold">{car.transmission}</p>
                      <p className="text-slate-400 text-sm">Transmission</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Fuel className="h-5 w-5 text-amber-400" />
                    <div>
                      <p className="text-white font-semibold">{car.fuelType}</p>
                      <p className="text-slate-400 text-sm">Fuel Type</p>
                    </div>
                  </div>
                  {car.mpg && (
                    <div className="flex items-center space-x-3">
                      <Fuel className="h-5 w-5 text-green-400" />
                      <div>
                        <p className="text-white font-semibold">{car.mpg.city}/{car.mpg.highway} MPG</p>
                        <p className="text-slate-400 text-sm">City/Highway</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-amber-400 mb-4">Specifications</h3>
            <div className="bg-slate-800 rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {specs.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border-b border-slate-700 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <div className="text-amber-400">{spec.icon}</div>
                      <span className="text-slate-300">{spec.label}</span>
                    </div>
                    <span className="text-white font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description and Significance */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-4">Description</h3>
              <p className="text-slate-300 leading-relaxed">{car.description}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-4">Historical Significance</h3>
              <p className="text-slate-300 leading-relaxed">{car.significance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;