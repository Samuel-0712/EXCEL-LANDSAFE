import React from 'react';
import { Button } from '../common/Button';
import { DotPatternBackground } from '../common/CustomAssets';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../data/siteData';
import { motion } from 'framer-motion';

interface CtaBandProps {
  onOpenInquiry: () => void;
}

export const CtaBand: React.FC<CtaBandProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative py-24 bg-brand-dark text-white overflow-hidden">
      {/* Background ambient pattern */}
      <DotPatternBackground opacity={0.08} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >


          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Plan Your Next Journey?
          </h2>

          <p className="max-w-2xl mx-auto font-body text-base sm:text-lg text-white/80 leading-relaxed">
            Reach out directly to our senior travel advisors for visa guidance, custom flight quotes, or tailored holiday planning.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              className="w-full sm:w-auto text-lg px-9 py-4 shadow-brand"
              onClick={onOpenInquiry}
            >
              Request Free Consultation
            </Button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Excel Landsafe Travels, I am ready to plan my trip.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold text-base flex items-center justify-center gap-2.5 transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5 text-brand-green" />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
