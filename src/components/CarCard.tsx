import React from 'react';
import { Star, Calendar, MapPin, Zap, Settings, Eye, Heart } from 'lucide-react';
import { Car } from '../types/car';

interface CarCardProps {
  car: Car;
  onClick: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  const getEngineIcon = (type: string) => {
    switch (type) {
      case 'Electric':
        return <Zap className="h-4 w-4 text-blue-400" />;
      default:
        return <Settings className="h-4 w-4 text-slate-400" />;
    }
  };

  return (
    <div 
      className="bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-700 hover:border-amber-500 group overflow-hidden"
      onClick={() => onClick(car)}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={car.images[0]}
          alt={car.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Featured Badge */}
        {car.featured && (
          <div className="absolute top-3 left-3 bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
            <Heart className="h-4 w-4 text-white" />
          </button>
          <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
            <Eye className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
              {car.name}
            </h3>
            <p className="text-slate-400 text-sm">{car.manufacturer} • {car.model}</p>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-amber-400 fill-current" />
            <span className="text-sm text-slate-300">{car.rating}</span>
          </div>
        </div>

        {/* Key Information */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-slate-300">{car.year}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-slate-300">{car.country}</span>
          </div>
          <div className="flex items-center space-x-2">
            {getEngineIcon(car.engine.type)}
            <span className="text-sm text-slate-300">{car.engine.type}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Settings className="h-4 w-4 text-amber-400" />
            <span className="text-sm text-slate-300">{car.engine.horsepower}hp</span>
          </div>
        </div>

        {/* Price and Type */}
        <div className="flex items-center justify-between mb-4">
          <div className="bg-slate-700 px-3 py-1 rounded-full">
            <span className="text-sm text-slate-300">{car.type}</span>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-amber-400">
              ${car.price.msrp.toLocaleString()}
            </span>
            <p className="text-xs text-slate-400">Original MSRP</p>
          </div>
        </div>

        {/* Production Info */}
        <div className="text-sm text-slate-400 mb-4">
          <p>
            {car.production.total.toLocaleString()} units produced
            {car.production.end 
              ? ` (${car.production.start}-${car.production.end})`
              : ` (${car.production.start}+)`
            }
          </p>
        </div>

        {/* Description Preview */}
        <p className="text-slate-300 text-sm leading-relaxed line-clamp-2">
          {car.description}
        </p>

        {/* Learn More Button */}
        <div className="mt-4 pt-4 border-t border-slate-700">
          <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 py-2 px-4 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-200 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;