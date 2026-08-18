import React from 'react';
import { SERVICES_DATA } from '../../data/siteData';
import { SquircleBadgeIcon } from '../common/CustomAssets';
import { AllServicesGrid } from './AllServicesGrid';
import { RouteLine } from '../common/RouteLine';
import { Button } from '../common/Button';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 bg-brand-bg relative overflow-hidden">
      <RouteLine>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal tracking-tight">
            Tailored Travel Solutions Crafted to Perfection
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-muted font-body leading-relaxed">
            Whether you need urgent visa documentation, a bespoke honeymoon itinerary, or MICE event logistics, we take care of every detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-soft border border-brand-surface hover:border-brand-green/40 hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >

              {/* Image Container with Hover Scale */}
              <div className="relative h-48 w-full">
                <div className="w-full h-full overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Squircle Badge floating over image bottom */}
                <div className="absolute -bottom-6 left-6 z-10 transition-transform duration-300 group-hover:scale-110">
                  <SquircleBadgeIcon type={service.iconName as any} size="md" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-10 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-brand-charcoal mb-2 group-hover:text-brand-green transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold text-brand-green uppercase tracking-wide mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-brand-charcoal/80 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link (Text button with arrow nudge) */}
                <div className="pt-4 border-t border-brand-surface">
                  <Button
                    variant="text"
                    onClick={() => onSelectService(service.title)}
                  >
                    Inquire About {service.title}
                  </Button>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Complete Range of 9-Service Scope Category Grid */}
        <AllServicesGrid onSelectService={onSelectService} />

        </div>
      </RouteLine>
    </section>
  );
};
