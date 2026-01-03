
import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { Building2, Home, Factory, Maximize2 } from 'lucide-react';

const projects: PortfolioItem[] = [
  { id: '1', title: 'The Vertex Corporate Hub', category: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', location: 'Chicago, IL' },
  { id: '2', title: 'Evergreen Smart Lofts', category: 'Residential', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop', location: 'Austin, TX' },
  { id: '3', title: 'Steelworks Factory X', category: 'Industrial', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop', location: 'Detroit, MI' },
  { id: '4', title: 'Skyline Plaza', category: 'Commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop', location: 'New York, NY' },
  { id: '5', title: 'Modern Cliffside Villa', category: 'Residential', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop', location: 'Malibu, CA' },
  { id: '6', title: 'BioTech R&D Facility', category: 'Industrial', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop', location: 'Seattle, WA' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Industrial'>('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = [
    { name: 'All', icon: <Building2 className="w-4 h-4 mr-2" /> },
    { name: 'Residential', icon: <Home className="w-4 h-4 mr-2" /> },
    { name: 'Commercial', icon: <Building2 className="w-4 h-4 mr-2" /> },
    { name: 'Industrial', icon: <Factory className="w-4 h-4 mr-2" /> },
  ] as const;

  return (
    <section id="portfolio" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0">
          <div>
            <h2 className="text-4xl font-black mb-4">Featured <span className="text-amber-500 underline decoration-4 underline-offset-8">Projects</span></h2>
            <p className="text-slate-400 max-w-xl">
              Showcasing our commitment to quality across diverse sectors. Each project represents a unique challenge met with innovative engineering.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setFilter(cat.name)}
                className={`flex items-center px-4 py-2.5 rounded-full text-sm font-bold transition-all ${
                  filter === cat.name 
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-3xl bg-slate-800 aspect-[4/5] animate-in zoom-in-95 duration-500"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest rounded-md mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-1 leading-tight">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6">{project.location}</p>
                  
                  <button className="flex items-center text-amber-500 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Explore Project
                    <Maximize2 className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
