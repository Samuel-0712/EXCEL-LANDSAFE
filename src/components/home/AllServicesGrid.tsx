import React from 'react';
import { Plane, Building2, Compass, ShieldCheck, Ship, Users, Briefcase, FileCheck, ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface AllServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

export const AllServicesGrid: React.FC<AllServicesGridProps> = ({ onSelectService }) => {
  const categories = [
    {
      category: "Travel Essentials",
      badge: "Core Logistics",
      services: [
        { name: "Flight Tickets", desc: "Global airline seat reservations & business class upgrades", icon: Plane },
        { name: "Hotel Reservations", desc: "Vetted luxury resort stays & private villa bookings", icon: Building2 },
        { name: "Airport Logistics", desc: "VIP fast-track airport clearance & luxury transfers", icon: MapPin }
      ]
    },
    {
      category: "Trip Experiences",
      badge: "Curated Escapes",
      services: [
        { name: "Tour Packaging", desc: "Tailored private & group luxury tour itineraries", icon: Compass },
        { name: "Cruise Bookings", desc: "Luxury ocean & river cruise voyage packaging", icon: Ship }
      ]
    },
    {
      category: "Visa & Protection",
      badge: "Advisory & Safety",
      services: [
        { name: "Visa Consultation", desc: "Schengen, UK, US & global document vetting advisory", icon: FileCheck },
        { name: "Travel Health Insurance", desc: "Comprehensive worldwide medical & trip protection cover", icon: ShieldCheck }
      ]
    },
    {
      category: "Corporate & Group",
      badge: "Enterprise Solutions",
      services: [
        { name: "MICE Packages", desc: "Meetings, Incentives, Conferences & Executive Events", icon: Briefcase },
        { name: "Comprehensive Travel Solutions", desc: "End-to-end corporate travel & group management", icon: Users }
      ]
    }
  ];

  return (
    <div className="mt-20 pt-16 border-t border-brand-surface">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-charcoal tracking-tight">
          Complete Range of Travel Services
        </h3>
        <p className="mt-2 text-sm text-brand-muted font-body leading-relaxed">
          Explore our full suite of professional services tailored for individuals, families, and corporate organizations.
        </p>
      </div>

      {/* 4 Cards Row Container with items-start (natural height per card) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-soft border border-brand-surface hover:border-brand-green/40 hover:shadow-elevated transition-all space-y-4"
          >
            {/* Card Header Top */}
            <div className="pb-3 border-b border-brand-surface">
              <span className="text-[11px] font-semibold text-brand-green uppercase tracking-wider block mb-1">
                {cat.badge}
              </span>
              <h4 className="font-display font-bold text-xl text-brand-charcoal leading-snug">
                {cat.category}
              </h4>
            </div>

            {/* Service Items Stack (Top-aligned right under divider) */}
            <div className="space-y-3">
              {cat.services.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => onSelectService(item.name)}
                    className="w-full text-left p-3.5 rounded-xl bg-brand-bg/50 hover:bg-brand-light/60 transition-all group flex items-start gap-3.5 border border-transparent hover:border-brand-green/20"
                  >
                    {/* Squircle Badge Container */}
                    <div className="relative w-10 h-10 rounded-xl bg-brand-light text-brand-green flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <ItemIcon className="w-5 h-5" strokeWidth={1.75} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-display font-semibold text-xs text-brand-charcoal group-hover:text-brand-green transition-colors leading-snug">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-brand-muted font-body leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer Action Link (Sitting directly after last item) */}
            <div className="pt-4 border-t border-brand-surface text-center">
              <button
                onClick={() => onSelectService(cat.category)}
                className="text-xs font-semibold text-brand-green hover:underline inline-flex items-center gap-1.5 group"
              >
                <span>Inquire About {cat.category}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
