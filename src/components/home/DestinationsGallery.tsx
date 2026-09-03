import React, { useState } from 'react';
import { DESTINATIONS_DATA } from '../../data/siteData';
import { DestinationItem } from '../../types';
import { RouteLine } from '../common/RouteLine';
import { trackEvent } from '../../utils/analytics';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DestinationsGalleryProps {
  onSelectDestination: (destName: string) => void;
}

export const DestinationsGallery: React.FC<DestinationsGalleryProps> = ({ onSelectDestination }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Luxury Resort', 'City Break', 'Safari & Adventure', 'Cultural Heritage', 'Cruise Voyage'];

  const filteredDestinations = activeCategory === 'All' 
    ? DESTINATIONS_DATA 
    : DESTINATIONS_DATA.filter(d => d.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="destinations" className="py-24 bg-brand-surface relative overflow-hidden">
      <RouteLine variant="destinations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal tracking-tight">
              Where Will Your Next Chapter Begin?
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-brand-muted font-body leading-relaxed">
            Click any destination below to launch a direct, customized visa and holiday inquiry with our travel team.
          </p>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                  isActive 
                    ? 'bg-brand-green text-white shadow-brand' 
                    : 'bg-white text-brand-charcoal/80 hover:bg-brand-light hover:text-brand-green border border-brand-surface'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredDestinations.map((dest: DestinationItem, index: number) => {
              const isLarge = (index === 0 || index === 3) && filteredDestinations.length > 2;
              
              return (
                <motion.div
                  key={dest.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => {
                    trackEvent('destination_click', { destination: `${dest.name}, ${dest.country}` });
                    onSelectDestination(`${dest.name}, ${dest.country}`);
                  }}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-500 bg-brand-charcoal ${
                    isLarge ? 'md:col-span-2 lg:col-span-2 h-96' : 'h-96'
                  }`}
                >
                  {/* Background Image */}
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-90 group-hover:brightness-100"
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

                  {/* Arrow Icon Top Right */}
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-brand-green group-hover:border-brand-green group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>

                  {/* Card Content Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end">
                    {/* Location as Plain Text Line */}
                    <p className="text-brand-light/90 text-xs font-semibold uppercase tracking-widest mb-1">
                      {dest.country}
                    </p>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-brand-light transition-colors">
                      {dest.name}
                    </h3>

                    <p className="text-sm text-white/80 line-clamp-2 max-w-xl font-body leading-relaxed">
                      {dest.tagline}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
      </RouteLine>
    </section>
  );
};
