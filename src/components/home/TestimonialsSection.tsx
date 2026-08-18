import React from 'react';
import { TESTIMONIALS_DATA } from '../../data/siteData';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  // Duplicate the array for a seamless infinite loop
  const marqueeItems = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section className="py-24 md:py-32 bg-brand-surface relative overflow-hidden border-t border-brand-surface/80">

      {/* Section Header (No Pill Badge per PRD) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal tracking-tight">
          Trusted by Discerning Travellers
        </h2>
        <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 font-body max-w-2xl mx-auto">
          Real feedback and experiences from clients who trust us with their visa applications, luxury vacations, and global travel itineraries.
        </p>
      </div>

      {/* Marquee Outer Container with Edge Fades */}
      <div className="relative w-full overflow-hidden">

        {/* Left Gradient Edge Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-brand-surface to-transparent z-10" />

        {/* Right Gradient Edge Fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-brand-surface to-transparent z-10" />

        {/* Continuous Auto-Scrolling Track (Pauses on Hover) */}
        <div className="animate-marquee-slow py-4 flex gap-6 px-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[340px] sm:w-[410px] shrink-0 bg-white p-7 sm:p-8 rounded-3xl shadow-soft hover:shadow-card border border-brand-surface hover:border-brand-green/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Quote Icon Aligned Right */}
                <div className="mb-5 flex justify-end">
                  <Quote className="w-8 h-8 text-brand-green/25" />
                </div>

                {/* Quote Body */}
                <p className="text-sm sm:text-base text-brand-charcoal/90 font-body italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Attribution Footer */}
              <div className="pt-4 border-t border-brand-surface/80 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-charcoal">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-brand-muted font-body mt-0.5">
                    {item.roleOrLocation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
