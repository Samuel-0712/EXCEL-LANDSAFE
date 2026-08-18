import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/siteData';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingWhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      
      {/* Quick Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="bg-brand-charcoal text-white text-xs font-medium px-3.5 py-2 rounded-2xl shadow-elevated border border-white/10 flex items-center gap-2 max-w-xs"
          >
            <span>Have questions? Chat live on WhatsApp</span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-white/60 hover:text-white p-0.5"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Action Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Excel Landsafe Travels, I am visiting your website and would like quick travel assistance.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-brand hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
        
        {/* Subtle Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />
      </a>

    </div>
  );
};
