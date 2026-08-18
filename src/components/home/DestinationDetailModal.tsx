import React from 'react';
import { DestinationItem } from '../../types';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/siteData';
import { X, MapPin, Compass, ShieldCheck, Calendar, ArrowRight, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DestinationDetailModalProps {
  destination: DestinationItem | null;
  onClose: () => void;
  onInquire: (destName: string) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  onClose,
  onInquire
}) => {
  if (!destination) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-elevated border border-brand-surface overflow-hidden z-10 max-h-[90vh] overflow-y-auto no-scrollbar my-auto"
        >
          
          {/* Header Image Hero */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img 
              src={destination.image} 
              alt={destination.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-black/30" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-white/85 uppercase tracking-widest mb-1.5">
                <MapPin className="w-4 h-4 text-white/85" />
                <span>{destination.country} · {destination.category}</span>
              </div>
              <h3 className="font-display font-bold text-3xl sm:text-4xl">
                {destination.name}
              </h3>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            <p className="text-base text-brand-charcoal/90 font-body leading-relaxed">
              {destination.tagline} Experience bespoke 5-star accommodation, guided private tours, and complete end-to-end visa assistance handled by {COMPANY_INFO.name}.
            </p>

            {/* Key Inclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-brand-surface text-xs font-medium text-brand-charcoal">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
                <span>Pre-vetted Embassy Visa Advisory</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-brand-green shrink-0" />
                <span>Custom Private Itineraries</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-brand-green shrink-0" />
                <span>Flexible Flight & Resort Dates</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-brand-green shrink-0" />
                <span>24/7 On-Ground Support</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Button 
                size="lg"
                className="w-full sm:flex-1"
                onClick={() => {
                  onClose();
                  onInquire(`${destination.name}, ${destination.country}`);
                }}
              >
                Inquire About {destination.name}
              </Button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(`Hello Excel Landsafe, I want to inquire about your travel package for ${destination.name}, ${destination.country}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-brand-green/30 text-brand-green font-semibold text-sm flex items-center justify-center gap-2 hover:bg-brand-light transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Advisory</span>
              </a>
            </div>

          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
