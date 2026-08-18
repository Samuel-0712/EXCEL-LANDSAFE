import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './CustomAssets';
import { COMPANY_INFO } from '../../data/siteData';
import { Phone, Mail, Instagram, MapPin, ArrowUpRight, MessageSquare } from 'lucide-react';

interface FooterProps {
  onOpenLegal?: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col space-y-5">
            <div className="flex justify-center w-full mb-3">
              <BrandLogo light={true} height={96} />
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm pt-1 text-left">
              Premier travel agency offering expert visa assistance, luxury curated tours, and seamless flight & hotel arrangements for discerning global travellers.
            </p>
            <div className="flex items-center gap-3 pt-3">
              <a 
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-brand-green hover:border-brand-green/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-brand-green hover:border-brand-green/50 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-base text-white tracking-wide uppercase text-xs text-brand-accent">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#hero" className="hover:text-brand-green transition-colors inline-flex items-center gap-1 group">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-green transition-colors inline-flex items-center gap-1 group">
                  <span>Visa & Travel Services</span>
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-brand-green transition-colors inline-flex items-center gap-1 group">
                  <span>Curated Destinations</span>
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-brand-green transition-colors inline-flex items-center gap-1 group">
                  <span>Seasonal Packages & Offers</span>
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-green transition-colors inline-flex items-center gap-1 group">
                  <span>About Our Company</span>
                </Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-brand-green transition-colors inline-flex items-center gap-1 group">
                  <span>Inquire Now</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-base text-white tracking-wide uppercase text-xs text-brand-accent">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li className="hover:text-brand-green transition-colors">Schengen & UK Visa Advisory</li>
              <li className="hover:text-brand-green transition-colors">US & Canada Visa Assistance</li>
              <li className="hover:text-brand-green transition-colors">Bespoke Luxury Honeymoons</li>
              <li className="hover:text-brand-green transition-colors">Corporate Travel & VIP Concierge</li>
              <li className="hover:text-brand-green transition-colors">Flight Seat Upgrades & Transfers</li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-base text-white tracking-wide uppercase text-xs text-brand-accent">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-white/70">
              <a 
                href={`tel:${COMPANY_INFO.phoneRaw}`} 
                className="flex items-center gap-3 hover:text-brand-green transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-green shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="flex items-center gap-3 hover:text-brand-green transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {onOpenLegal && (
              <>
                <button onClick={() => onOpenLegal('privacy')} className="hover:text-brand-green transition-colors">
                  Privacy Policy
                </button>
                <span>·</span>
                <button onClick={() => onOpenLegal('terms')} className="hover:text-brand-green transition-colors">
                  Terms of Service
                </button>
                <span>·</span>
              </>
            )}
            <span>Seamless Travels · Expert Visas · Luxury Tours</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
