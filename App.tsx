
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIEstimator from './components/AIEstimator';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { ShieldCheck, HardHat, Clock, Trophy, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Features/Stats Strip */}
      <section className="bg-slate-900 py-12 relative z-20 -mt-12 md:-mt-20 max-w-6xl mx-auto rounded-3xl shadow-2xl overflow-hidden border border-white/10">
        <div className="grid md:grid-cols-4 gap-8 px-8 text-white divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex items-center space-x-4 pt-4 md:pt-0">
            <ShieldCheck className="w-8 h-8 text-amber-500" />
            <div>
              <p className="font-bold text-lg">Fully Insured</p>
              <p className="text-slate-400 text-xs uppercase tracking-widest">Safety Certified</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 pt-4 md:pt-0 md:pl-8">
            <HardHat className="w-8 h-8 text-amber-500" />
            <div>
              <p className="font-bold text-lg">Expert Team</p>
              <p className="text-slate-400 text-xs uppercase tracking-widest">Licensed Pros</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 pt-4 md:pt-0 md:pl-8">
            <Clock className="w-8 h-8 text-amber-500" />
            <div>
              <p className="font-bold text-lg">On-Time</p>
              <p className="text-slate-400 text-xs uppercase tracking-widest">Project Deadlines</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 pt-4 md:pt-0 md:pl-8">
            <Trophy className="w-8 h-8 text-amber-500" />
            <div>
              <p className="font-bold text-lg">Best Value</p>
              <p className="text-slate-400 text-xs uppercase tracking-widest">Quality Materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Core <span className="text-amber-500">Expertise</span></h2>
              <p className="text-slate-600 text-lg">We provide specialized services across multiple domains of engineering and construction.</p>
            </div>
            <a href="#" className="flex items-center text-slate-900 font-bold group">
              View All Services
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Residential Construction', desc: 'Custom luxury homes and multi-family developments built with attention to detail.', icon: <Home className="w-8 h-8 text-amber-500" /> },
              { title: 'Commercial Real Estate', desc: 'Office spaces, retail hubs, and hospitality centers designed for modern business.', icon: <Building2 className="w-8 h-8 text-amber-500" /> },
              { title: 'Industrial Development', desc: 'Warehouses, logistics parks, and manufacturing plants with high-spec requirements.', icon: <Factory className="w-8 h-8 text-amber-500" /> }
            ].map((service, i) => (
              <div key={i} className="group p-8 bg-slate-50 hover:bg-white border border-slate-100 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                <button className="text-amber-500 font-bold text-sm uppercase tracking-widest">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AIEstimator />
      <Portfolio />
      
      {/* CTA Section */}
      <section className="py-24 bg-amber-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to break ground on your next project?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Contact us today for a professional consultation and discover how we can build your vision with excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-slate-800 transition-all">Schedule Consultation</button>
            <button className="bg-white text-amber-600 px-10 py-4 rounded-2xl font-black text-lg shadow-xl hover:bg-slate-50 transition-all">Contact Sales</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Internal icon helpers for simple mapping
const Home = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
const Building2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);
const Factory = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default App;
