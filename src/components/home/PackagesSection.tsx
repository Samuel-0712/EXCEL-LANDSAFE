import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Check, ChevronDown, ChevronUp, Users, User, ArrowRight } from 'lucide-react';
import { PACKAGES_DATA } from '../../data/siteData';
import { PackageItem } from '../../types';
import { RouteLine } from '../common/RouteLine';
import { trackEvent } from '../../utils/analytics';

interface PackagesSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedPackages = showAll ? PACKAGES_DATA : PACKAGES_DATA.slice(0, 3);

  return (
    <section id="packages" className="py-24 md:py-32 bg-brand-surface/40 border-t border-brand-surface/80 relative overflow-hidden">
      <RouteLine variant="packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (No Pill Badge per PRD v4) */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal tracking-tight">
            Seasonal Packages &amp; Curated Offers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 font-body leading-relaxed max-w-2xl mx-auto">
            Hand-crafted, all-inclusive seasonal travel itineraries featuring return flights, luxury stays, guided city tours, and full visa guidance.
          </p>
        </div>

        {/* Packages Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          <AnimatePresence>
            {displayedPackages.map((pkg: PackageItem) => (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-3xl overflow-hidden border border-brand-surface hover:border-brand-green/30 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col"
              >
                {/* Card Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-brand-charcoal">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category & Duration Plain Text Top */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold uppercase tracking-wider">
                    <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {pkg.destination}
                    </span>
                    <span className="bg-brand-green/90 backdrop-blur-md px-3 py-1 rounded-full text-white font-medium text-[11px]">
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Travel Dates Line Bottom of Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white/95 text-xs font-medium bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-brand-light" />
                    <span>{pkg.dateRange}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div>
                    <h3 className="font-display font-bold text-2xl text-brand-charcoal group-hover:text-brand-green transition-colors leading-snug mb-4">
                      {pkg.title}
                    </h3>

                    {/* Dual Pricing Container */}
                    <div className="bg-brand-surface/60 rounded-2xl p-4 border border-brand-surface grid grid-cols-2 gap-3 mb-6">
                      <div>
                        <div className="flex items-center gap-1.5 text-brand-charcoal/70 text-[11px] font-semibold uppercase tracking-wider">
                          <Users className="w-3.5 h-3.5 text-brand-green" />
                          <span>Per Person Sharing</span>
                        </div>
                        <p className="text-xl font-bold font-display text-brand-green mt-1">
                          {pkg.priceDouble}
                        </p>
                      </div>

                      {pkg.priceSingle && (
                        <div className="border-l border-brand-surface pl-3">
                          <div className="flex items-center gap-1.5 text-brand-charcoal/70 text-[11px] font-semibold uppercase tracking-wider">
                            <User className="w-3.5 h-3.5 text-brand-green" />
                            <span>Single Occupancy</span>
                          </div>
                          <p className="text-xl font-bold font-display text-brand-charcoal mt-1">
                            {pkg.priceSingle}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Inclusions Checklist */}
                    <div className="space-y-2.5">
                      <p className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">
                        Package Inclusions:
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-brand-charcoal/80 font-body">
                        {pkg.inclusions.slice(0, 5).map((inc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                            <span className="leading-tight">{inc}</span>
                          </li>
                        ))}
                        {pkg.inclusions.length > 5 && (
                          <li className="text-[11px] font-medium text-brand-green pl-6">
                            + {pkg.inclusions.length - 5} more activities &amp; excursions included
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Fine Print Note */}
                    {pkg.finePrint && (
                      <p className="text-[11px] font-semibold text-brand-green/90 mt-4 italic">
                        ✓ {pkg.finePrint}
                      </p>
                    )}
                  </div>

                  {/* Card Action CTA Button */}
                  <button
                    onClick={() => {
                      trackEvent('package_inquire', { package_name: pkg.title, destination: pkg.destination });
                      onSelectPackage(pkg.title);
                    }}
                    className="w-full py-3 px-5 rounded-full bg-brand-green text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-brand-green-hover transition-all duration-200 shadow-sm group-hover:shadow-md cursor-pointer"
                  >
                    <span>Inquire About This Package</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All / Show Fewer Toggle */}
        <div className="mt-14 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-brand-surface text-brand-charcoal font-semibold text-sm hover:border-brand-green hover:text-brand-green shadow-soft hover:shadow-card transition-all duration-200 cursor-pointer"
          >
            <span>{showAll ? 'Show Fewer Packages' : `View All ${PACKAGES_DATA.length} Seasonal Packages`}</span>
            {showAll ? (
              <ChevronUp className="w-4 h-4 text-brand-green" />
            ) : (
              <ChevronDown className="w-4 h-4 text-brand-green" />
            )}
          </button>
        </div>

        </div>
      </RouteLine>
    </section>
  );
};
