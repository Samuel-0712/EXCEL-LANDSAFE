import React from 'react';
import { Button } from '../common/Button';
import { DotPatternBackground } from '../common/CustomAssets';
import { COMPANY_INFO } from '../../data/siteData';
import { MessageSquare, Shield, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenInquiry: (defaultService?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-charcoal text-white pt-24 pb-16">
      
      {/* Background Imagery with Ken-Burns animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85" 
          alt="Luxury travel scenery" 
          className="w-full h-full object-cover animate-ken-burns scale-105 filter brightness-90"
        />
        
        {/* Layered Gradient Overlays for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/80 via-transparent to-brand-charcoal/40" />
        
        {/* Subtle Ambient Dot Pattern Overlay */}
        <DotPatternBackground opacity={0.08} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        


        {/* Headline: Sans → Script Accent → Sans */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-6"
        >
          <span className="block text-white/95 drop-shadow-sm">Make Your</span>
          <span className="block font-accent italic font-normal text-brand-green text-6xl sm:text-7xl md:text-8xl lg:text-9xl my-2 drop-shadow-[0_4px_30px_rgba(74,124,60,0.6)]">
            Extraordinary
          </span>
          <span className="block text-white/95 drop-shadow-sm">Journeys Seamless</span>
        </motion.h1>

        {/* Sub-headline Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto font-body text-base sm:text-lg md:text-xl text-white/80 font-normal leading-relaxed mb-10"
        >
          Nigeria’s premier travel advisory for global visa approvals, curated luxury honeymoons, bespoke holidays, and VIP flight services.
        </motion.p>

        {/* CTA Button Group */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto"
            onClick={() => onOpenInquiry()}
          >
            Start Visa & Travel Inquiry
          </Button>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Excel Landsafe Travels, I would like to inquire about your travel and visa services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold text-base flex items-center justify-center gap-2 hover:bg-white/20 hover:border-white/50 transition-all duration-200"
          >
            <MessageSquare className="w-5 h-5 text-brand-green" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

        {/* Micro Trust Indicators below CTAs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-semibold uppercase tracking-wider text-white/70"
        >
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-brand-green" />
            <span>High Visa Approval</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-brand-green" />
            <span>Curated VIP Luxury</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-brand-green" />
            <span>Global Destinations</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4 text-brand-green" />
            <span>24/7 Personal Advisory</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
