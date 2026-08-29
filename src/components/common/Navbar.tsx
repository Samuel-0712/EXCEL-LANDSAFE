import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from './CustomAssets';
import { Button } from './Button';
import { COMPANY_INFO } from '../../data/siteData';
import { Menu, X, MessageSquare, Compass, ShieldCheck, MapPin, User, Home, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenInquiry: (defaultService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: isAboutPage ? '/' : '#hero', isRoute: isAboutPage, icon: Home },
    { label: 'Services', href: isAboutPage ? '/#services' : '#services', isRoute: false, icon: ShieldCheck },
    { label: 'Destinations', href: isAboutPage ? '/#destinations' : '#destinations', isRoute: false, icon: Compass },
    { label: 'Packages', href: isAboutPage ? '/#packages' : '#packages', isRoute: false, icon: Sparkles },
    { label: 'About', href: '/about', isRoute: true, icon: User },
    { label: 'Contact', href: isAboutPage ? '/#contact' : '#contact', isRoute: false, icon: MapPin },
  ];

  const headerBgClass = scrolled 
    ? 'glass-nav py-3.5 shadow-soft border-b border-brand-surface/60' 
    : isAboutPage
      ? 'bg-brand-charcoal py-4 text-white border-b border-white/10 shadow-soft'
      : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent py-5 text-white';

  const isLightLogo = !scrolled || (!scrolled && isAboutPage);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="group">
            <BrandLogo light={isLightLogo} height={scrolled ? 56 : 64} />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = (item.label === 'About' && isAboutPage) || (item.label === 'Home' && !isAboutPage && !scrolled);
              
              if (item.isRoute) {
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`font-body text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-brand-green ${
                      isActive 
                        ? 'text-brand-green' 
                        : scrolled ? 'text-brand-charcoal' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`font-body text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-brand-green ${
                    scrolled ? 'text-brand-charcoal' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Excel Landsafe Travels, I would like to inquire about your visa and tour services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border ${
                scrolled 
                  ? 'border-brand-green/30 text-brand-green hover:bg-brand-green/10' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-brand-green" />
              <span>WhatsApp</span>
            </a>

            <Button 
              size="sm"
              onClick={() => onOpenInquiry()}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-brand-green text-white"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-xl transition-colors ${
                scrolled ? 'text-brand-charcoal hover:bg-brand-surface' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#0F1714] text-white flex flex-col justify-between p-6 md:hidden overflow-y-auto"
            style={{ backgroundColor: '#0F1714' }}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <BrandLogo light={true} height={52} />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-5 py-6">
              {navItems.map((item) => {
                const IconComponent = item.icon;

                if (item.isRoute) {
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-4 text-xl font-display font-semibold text-white hover:text-brand-green transition-colors p-2 rounded-xl hover:bg-white/5"
                    >
                      <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-white font-medium">{item.label}</span>
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 text-xl font-display font-semibold text-white hover:text-brand-green transition-colors p-2 rounded-xl hover:bg-white/5"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-white font-medium">{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Drawer Footer Actions */}
            <div className="border-t border-white/15 pt-5 flex flex-col gap-3">
              <Button
                size="lg"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
              >
                Start Your Journey
              </Button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Excel Landsafe Travels, I would like to inquire about your visa and tour services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full border border-brand-green bg-brand-green/15 text-center text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-brand-green transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-brand-green" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
