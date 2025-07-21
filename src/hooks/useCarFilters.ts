import { useState, useMemo } from 'react';
import { Car, FilterState } from '../types/car';

export const useCarFilters = (cars: Car[]) => {
  const [filters, setFilters] = useState<FilterState>({
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

  const filteredCars = useMemo(() => {
    let filtered = cars.filter(car => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const searchableText = `${car.name} ${car.manufacturer} ${car.model} ${car.description}`.toLowerCase();
        if (!searchableText.includes(searchTerm)) {
          return false;
        }
      }

      // Country filter
      if (filters.country && car.country !== filters.country) {
        return false;
      }

      // Manufacturer filter
      if (filters.manufacturer && car.manufacturer !== filters.manufacturer) {
        return false;
      }

      // Year range filter
      if (car.year < filters.yearRange[0] || car.year > filters.yearRange[1]) {
        return false;
      }

      // Type filter
      if (filters.type && car.type !== filters.type) {
        return false;
      }

      // Drivetrain filter
      if (filters.drivetrain && car.drivetrain !== filters.drivetrain) {
        return false;
      }

      // Engine type filter
      if (filters.engineType && car.engine.type !== filters.engineType) {
        return false;
      }

      // Price range filter
      if (car.price.msrp < filters.priceRange[0] || car.price.msrp > filters.priceRange[1]) {
        return false;
      }

      return true;
    });

    // Sort filtered results
    filtered.sort((a, b) => {
      let aValue, bValue;

      switch (filters.sortBy) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'year':
          aValue = a.year;
          bValue = b.year;
          break;
        case 'price':
          aValue = a.price.msrp;
          bValue = b.price.msrp;
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        default:
          aValue = a.year;
          bValue = b.year;
      }

      if (filters.sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [cars, filters]);

  return {
    filters,
    setFilters,
    filteredCars
  };
};