import React from 'react';
import { Search, Car, Menu, X } from 'lucide-react';

interface HeaderProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  onOpenDictionary?: () => void;
  cartItemCount?: number;
  onOpenCart?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onSearchChange, 
  searchQuery, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen, 
  onOpenDictionary,
  cartItemCount = 0,
  onOpenCart
}) => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl border-b-4 border-amber-500">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-amber-500 p-2 rounded-full">
              <Car className="h-8 w-8 text-slate-900" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                AutoVault
              </h1>
              <p className="text-slate-300 text-sm">Automotive Archive</p>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-400 w-80"
              />
            </div>
            <nav className="flex space-x-6">
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">Archive</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">Timeline</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">Manufacturers</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors">Compare</a>
              {onOpenDictionary && <button onClick={onOpenDictionary} className="text-slate-300 hover:text-amber-400 transition-colors">Dictionary</button>}
              {onOpenCart && (
                <button 
                  onClick={onOpenCart}
                  className="text-slate-300 hover:text-amber-400 transition-colors relative"
                >
                  Cart
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </button>
              )}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-700 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-400 w-full"
              />
            </div>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors py-2">Archive</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors py-2">Timeline</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors py-2">Manufacturers</a>
              <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors py-2">Compare</a>
              {onOpenDictionary && <button onClick={onOpenDictionary} className="text-slate-300 hover:text-amber-400 transition-colors py-2 text-left">Dictionary</button>}
              {onOpenCart && (
                <button 
                  onClick={onOpenCart}
                  className="text-slate-300 hover:text-amber-400 transition-colors py-2 text-left flex items-center space-x-2"
                >
                  <span>Cart</span>
                  {cartItemCount > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;