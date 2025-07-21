import React from 'react';
import { Filter, X, RotateCcw } from 'lucide-react';
import { FilterState } from '../types/car';
import { manufacturers, countries, types, drivetrains, engineTypes } from '../data/cars';

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, setFilters, isOpen, onClose }) => {
  const resetFilters = () => {
    setFilters({
      search: '',
      country: '',
      manufacturer: '',
      yearRange: [1900, 2024],
      type: '',
      drivetrain: '',
      engineType: '',
      priceRange: [0, 100000],
      sortBy: 'year',
      sortOrder: 'desc'
    });
  };

  const updateFilter = (key: keyof FilterState, value: any) => {
    setFilters({ ...filters, [key]: value });
  };

  const sidebarClasses = `fixed inset-y-0 left-0 z-50 w-80 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out overflow-y-auto ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  } lg:relative lg:translate-x-0 lg:z-auto`;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />
      )}
      
      <div className={sidebarClasses}>
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-6 w-6 text-amber-400" />
              <h2 className="text-xl font-bold text-amber-400">Filters</h2>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={resetFilters}
                className="p-2 rounded-lg hover:bg-slate-700 transition-colors"
                title="Reset Filters"
              >
                <RotateCcw className="h-5 w-5 text-slate-400" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-slate-700 transition-colors lg:hidden"
              >
                <X className="h-5 w-5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Country Filter */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-3">Country</label>
            <select
              value={filters.country}
              onChange={(e) => updateFilter('country', e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
            >
              <option value="">All Countries</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          {/* Manufacturer Filter */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-3">Manufacturer</label>
            <select
              value={filters.manufacturer}
              onChange={(e) => updateFilter('manufacturer', e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
            >
              <option value="">All Manufacturers</option>
              {manufacturers.map(manufacturer => (
                <option key={manufacturer} value={manufacturer}>{manufacturer}</option>
              ))}
            </select>
          </div>

          {/* Year Range */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-3">
              Year Range: {filters.yearRange[0]} - {filters.yearRange[1]}
            </label>
            <div className="space-y-3">
              <input
                type="range"
                min="1900"
                max="2024"
                value={filters.yearRange[0]}
                onChange={(e) => updateFilter('yearRange', [parseInt(e.target.value), filters.yearRange[1]])}
                className="w-full accent-amber-500"
              />
              <input
                type="range"
                min="1900"
                max="2024"
                value={filters.yearRange[1]}
                onChange={(e) => updateFilter('yearRange', [filters.yearRange[0], parseInt(e.target.value)])}
                className="w-full accent-amber-500"
              />
            </div>
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-3">Vehicle Type</label>
            <select
              value={filters.type}
              onChange={(e) => updateFilter('type', e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
            >
              <option value="">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Drivetrain */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-3">Drivetrain</label>
            <select
              value={filters.drivetrain}
              onChange={(e) => updateFilter('drivetrain', e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
            >
              <option value="">All Drivetrains</option>
              {drivetrains.map(drivetrain => (
                <option key={drivetrain} value={drivetrain}>{drivetrain}</option>
              ))}
            </select>
          </div>

          {/* Engine Type */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-3">Engine Type</label>
            <select
              value={filters.engineType}
              onChange={(e) => updateFilter('engineType', e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
            >
              <option value="">All Engine Types</option>
              {engineTypes.map(engineType => (
                <option key={engineType} value={engineType}>{engineType}</option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-3">
              Price Range: ${filters.priceRange[0].toLocaleString()} - ${filters.priceRange[1].toLocaleString()}
            </label>
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={filters.priceRange[0]}
                onChange={(e) => updateFilter('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
                className="w-full accent-amber-500"
              />
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={filters.priceRange[1]}
                onChange={(e) => updateFilter('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-amber-500"
              />
            </div>
          </div>

          {/* Sort Options */}
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-3">Sort By</label>
            <div className="space-y-3">
              <select
                value={filters.sortBy}
                onChange={(e) => updateFilter('sortBy', e.target.value)}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
              >
                <option value="year">Year</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
              <select
                value={filters.sortOrder}
                onChange={(e) => updateFilter('sortOrder', e.target.value)}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;