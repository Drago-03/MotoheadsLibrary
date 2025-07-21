import React from 'react';
import { Clock, Globe, Zap, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
            The Ultimate Automotive Archive
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore the complete evolution of automotive history, from the first horseless carriages of the 1900s to today's cutting-edge electric supercars. 
            Discover the stories, specifications, and significance of the machines that shaped our world.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-amber-400">125+ Years</h3>
            <p className="text-slate-300">Complete automotive timeline from 1900 to present</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-emerald-400">Global Coverage</h3>
            <p className="text-slate-300">Vehicles from every major automotive nation</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Electric Era</h3>
            <p className="text-slate-300">Latest electric and hybrid innovations</p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-purple-400">Curated Collection</h3>
            <p className="text-slate-300">Expert-reviewed specifications and history</p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 shadow-2xl border border-slate-600">
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Featured This Month</h3>
            <p className="text-slate-300 mb-6">
              Explore the revolutionary vehicles that defined each era of automotive innovation
            </p>
            <div className="flex justify-center space-x-4">
              <span className="bg-amber-500 text-slate-900 px-4 py-2 rounded-full font-semibold">1900s Pioneers</span>
              <span className="bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold">Golden Age</span>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold">Modern Era</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;