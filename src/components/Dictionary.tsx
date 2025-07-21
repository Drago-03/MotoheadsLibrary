import React, { useState, useMemo } from 'react';
import { Search, Book, ArrowLeft, Volume2, ExternalLink } from 'lucide-react';
import { dictionaryTerms, categories } from '../data/dictionary';
import { DictionaryTerm } from '../types';

interface DictionaryProps {
  onBack: () => void;
}

const Dictionary: React.FC<DictionaryProps> = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTerm, setSelectedTerm] = useState<DictionaryTerm | null>(null);

  const filteredTerms = useMemo(() => {
    return dictionaryTerms.filter(term => {
      const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           term.definition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const playPronunciation = (term: DictionaryTerm) => {
    // In a real app, you'd use Web Speech API or audio files
    console.log(`🔊 Playing pronunciation for: ${term.term}`);
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(term.term);
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  if (selectedTerm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setSelectedTerm(null)}
              className="flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dictionary</span>
            </button>
            <button
              onClick={onBack}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Close Dictionary
            </button>
          </div>

          {/* Term Detail */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-amber-500/30">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <h1 className="text-4xl font-bold text-white">{selectedTerm.term}</h1>
                  <button
                    onClick={() => playPronunciation(selectedTerm)}
                    className="bg-amber-500 hover:bg-amber-600 p-2 rounded-full transition-colors"
                    title="Play pronunciation"
                  >
                    <Volume2 className="w-5 h-5 text-slate-900" />
                  </button>
                </div>

                {selectedTerm.pronunciation && (
                  <div className="mb-4">
                    <span className="text-gray-400">Pronunciation: </span>
                    <span className="text-amber-400 font-mono">{selectedTerm.pronunciation}</span>
                  </div>
                )}

                <div className="mb-6">
                  <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {categories.find(cat => cat.id === selectedTerm.category)?.name}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-amber-400 mb-3">Definition</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{selectedTerm.definition}</p>
                </div>

                {selectedTerm.relatedTerms && selectedTerm.relatedTerms.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-3">Related Terms</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedTerm.relatedTerms.map((relatedTerm, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            const term = dictionaryTerms.find(t => t.term === relatedTerm);
                            if (term) setSelectedTerm(term);
                          }}
                          className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1 rounded-full text-sm transition-colors flex items-center space-x-1"
                        >
                          <span>{relatedTerm}</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div>
                {selectedTerm.image && (
                  <div className="mb-6">
                    <img
                      src={selectedTerm.image}
                      alt={selectedTerm.term}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                )}

                <div className="bg-slate-700 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-amber-400 mb-3">Quick Facts</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Category:</span>
                      <span className="text-white">{categories.find(cat => cat.id === selectedTerm.category)?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Related Terms:</span>
                      <span className="text-white">{selectedTerm.relatedTerms?.length || 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-amber-500 p-3 rounded-full">
              <Book className="w-8 h-8 text-slate-900" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Car Enthusiast Dictionary</h1>
              <p className="text-gray-400">Master the language of automotive excellence</p>
            </div>
          </div>
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Garage</span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-slate-800 rounded-2xl p-6 mb-8 border border-amber-500/30">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Search */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Search Terms
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search automotive terms..."
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">{dictionaryTerms.length}</div>
              <div className="text-sm text-gray-400">Total Terms</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">{categories.length - 1}</div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">{filteredTerms.length}</div>
              <div className="text-sm text-gray-400">Filtered Results</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">
                {dictionaryTerms.filter(term => term.pronunciation).length}
              </div>
              <div className="text-sm text-gray-400">With Audio</div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-amber-500 text-slate-900'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Terms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTerms.map(term => (
            <div
              key={term.id}
              onClick={() => setSelectedTerm(term)}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-amber-500 transition-all duration-300 cursor-pointer group hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {term.term}
                </h3>
                <span className="text-2xl">
                  {categories.find(cat => cat.id === term.category)?.icon}
                </span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {term.definition}
              </p>

              <div className="flex items-center justify-between">
                <span className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs">
                  {categories.find(cat => cat.id === term.category)?.name}
                </span>
                {term.pronunciation && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playPronunciation(term);
                    }}
                    className="text-amber-400 hover:text-amber-300 transition-colors"
                    title="Play pronunciation"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {term.relatedTerms && term.relatedTerms.length > 0 && (
                <div className="mt-3 pt-3 border-t border-slate-700">
                  <div className="text-xs text-gray-400 mb-1">Related:</div>
                  <div className="flex flex-wrap gap-1">
                    {term.relatedTerms.slice(0, 3).map((relatedTerm, index) => (
                      <span key={index} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                        {relatedTerm}
                      </span>
                    ))}
                    {term.relatedTerms.length > 3 && (
                      <span className="text-xs text-amber-400">+{term.relatedTerms.length - 3} more</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <Book className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-400 mb-2">No terms found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 bg-amber-500 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dictionary;