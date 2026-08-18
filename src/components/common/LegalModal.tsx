import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../../data/siteData';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-elevated border border-brand-surface overflow-hidden z-10 p-6 sm:p-8 max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-brand-surface">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-light text-brand-green flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-brand-charcoal">
                  {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
                </h3>
                <p className="text-xs text-brand-muted font-body">
                  {COMPANY_INFO.name}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-brand-muted hover:text-brand-charcoal hover:bg-brand-surface transition-colors"
              aria-label="Close legal modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="py-6 overflow-y-auto no-scrollbar font-body text-sm text-brand-charcoal/80 space-y-4 pr-2">
            {isPrivacy ? (
              <>
                <p className="leading-relaxed">
                  At <strong>{COMPANY_INFO.name}</strong>, we are committed to protecting your personal information and respecting your privacy when using our website and advisory services.
                </p>
                <h4 className="font-display font-bold text-base text-brand-charcoal pt-2">1. Information We Collect</h4>
                <p className="leading-relaxed">
                  We collect information you voluntarily provide to us when submitting an inquiry form or contacting us via phone/WhatsApp, including your Full Name, Phone Number, Email Address, and Travel Details.
                </p>
                <h4 className="font-display font-bold text-base text-brand-charcoal pt-2">2. How We Use Your Data</h4>
                <p className="leading-relaxed">
                  Your data is used solely to respond to your travel inquiries, process visa evaluation requests, coordinate flight and hotel bookings, and send you important consultation updates. We do not sell or rent your personal information to third parties.
                </p>
                <h4 className="font-display font-bold text-base text-brand-charcoal pt-2">3. Data Security</h4>
                <p className="leading-relaxed">
                  We employ encrypted data storage standards via Supabase and secure TLS transport protocols to prevent unauthorized access to your information.
                </p>
              </>
            ) : (
              <>
                <p className="leading-relaxed">
                  Welcome to <strong>{COMPANY_INFO.name}</strong>. By accessing our website or utilizing our visa advisory and luxury tour services, you agree to comply with the following Terms of Service.
                </p>
                <h4 className="font-display font-bold text-base text-brand-charcoal pt-2">1. Advisory Services Scope</h4>
                <p className="leading-relaxed">
                  Excel Landsafe Travels provides expert visa application vetting, document guidance, flight bookings, and curated tour planning. Visa issuing decisions are at the sole discretion of respective foreign embassies and immigration authorities.
                </p>
                <h4 className="font-display font-bold text-base text-brand-charcoal pt-2">2. Client Responsibilities</h4>
                <p className="leading-relaxed">
                  Clients are responsible for providing authentic, complete, and accurate documentation during visa application preparation and adhering to international travel regulations.
                </p>
                <h4 className="font-display font-bold text-base text-brand-charcoal pt-2">3. Booking & Cancellation Policies</h4>
                <p className="leading-relaxed">
                  Flight seats, hotel reservations, and luxury tour packages are governed by specific airline, resort, and vendor terms discussed during itinerary confirmation.
                </p>
              </>
            )}
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-brand-surface text-right">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-brand-green text-white text-xs font-semibold hover:bg-brand-green/90 transition-colors"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
