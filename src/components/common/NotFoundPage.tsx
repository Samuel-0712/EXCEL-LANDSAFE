import React from 'react';
import { Compass, Home, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../../data/siteData';

interface NotFoundProps {
  onReturnHome?: () => void;
}

export const NotFoundPage: React.FC<NotFoundProps> = ({ onReturnHome }) => {
  const handleHomeClick = () => {
    if (onReturnHome) {
      onReturnHome();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-brand-charcoal text-white flex items-center justify-center p-6 text-center relative overflow-hidden">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#4A7C3C_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-md mx-auto relative z-10 space-y-6">
        
        {/* Pulsing Beacon Icon Badge */}
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          {/* Expanding Pulsing Beacon Ring 1 */}
          <motion.div
            animate={{
              scale: [1, 1.8, 2.2],
              opacity: [0.6, 0.25, 0]
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute inset-0 rounded-full bg-brand-green/30 pointer-events-none"
          />

          {/* Secondary Pulse Ring */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1.8],
              opacity: [0.7, 0.3, 0]
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: 0.8,
              ease: "easeOut"
            }}
            className="absolute inset-0 rounded-full bg-brand-green/20 pointer-events-none"
          />

          {/* Glowing Center Badge Container */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              boxShadow: [
                "0 0 20px 2px rgba(74, 124, 60, 0.3)",
                "0 0 35px 8px rgba(74, 124, 60, 0.65)",
                "0 0 20px 2px rgba(74, 124, 60, 0.3)"
              ]
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-20 h-20 rounded-full bg-brand-dark/90 border border-brand-green/40 flex items-center justify-center text-brand-green shadow-elevated z-10"
          >
            <Compass className="w-10 h-10 drop-shadow-[0_0_12px_rgba(74,124,60,0.8)]" />
          </motion.div>
        </div>

        <p className="text-xs font-semibold text-brand-green uppercase tracking-widest">
          Error 404
        </p>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Destination Not Found
        </h1>

        <p className="text-sm sm:text-base text-white/70 font-body leading-relaxed max-w-sm mx-auto">
          It looks like the travel route or page you are looking for has moved or does not exist. Let us guide you back to safety.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleHomeClick}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-green text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-brand-green-hover transition-colors shadow-sm cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </button>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Excel Landsafe, I reached a 404 page on your website.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-brand-green" />
            <span>Contact WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
