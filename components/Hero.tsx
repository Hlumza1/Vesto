
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
            <CheckCircle2 className="w-4 h-4 text-amber-500" />
            <span className="text-amber-500 text-sm font-semibold tracking-wide uppercase">Premier Construction Partners</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Building Excellence, <span className="text-amber-500">Delivering</span> Trust.
          </h1>
          
          <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
            From industrial complexes to modern luxury residences, we turn architectural visions into tangible reality with precision, safety, and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#portfolio" 
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center transition-all shadow-lg shadow-amber-500/30 group"
            >
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#estimator" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-bold text-center transition-all"
            >
              Estimate Your Project
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-slate-400 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">450+</p>
              <p className="text-slate-400 text-sm">Projects Completed</p>
            </div>
            <div className="hidden md:block">
              <p className="text-3xl font-bold text-white">99%</p>
              <p className="text-slate-400 text-sm">Safety Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
