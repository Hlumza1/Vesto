
import React from 'react';
import { Hammer, Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-amber-500 rounded-lg">
                <Hammer className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900">
                APEX<span className="text-amber-500 underline decoration-2 underline-offset-4">STRUCTURES</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Leading the construction industry with innovation, integrity, and superior craftsmanship since 2008. Your vision, our build.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-amber-500 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-600 hover:text-amber-500 transition-colors">Our Services</a></li>
              <li><a href="#" className="text-slate-600 hover:text-amber-500 transition-colors">Recent Projects</a></li>
              <li><a href="#" className="text-slate-600 hover:text-amber-500 transition-colors">Safety Records</a></li>
              <li><a href="#" className="text-slate-600 hover:text-amber-500 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-500 mr-3 shrink-0" />
                <span className="text-slate-600">1200 Architecture Way, Suite 400<br />Denver, CO 80202</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-amber-500 mr-3 shrink-0" />
                <span className="text-slate-600">+1 (303) 555-0123</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-amber-500 mr-3 shrink-0" />
                <span className="text-slate-600">hello@apexstructures.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-slate-500 mb-4 text-sm leading-relaxed">Subscribe for project updates and industry insights.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
              />
              <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-400 text-sm">
          <p>© 2024 Apex Structures Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-amber-500">Privacy Policy</a>
            <a href="#" className="hover:text-amber-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
