import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/home/Hero';
import { ServicesSection } from './components/home/ServicesSection';
import { PackagesSection } from './components/home/PackagesSection';
import { DestinationsGallery } from './components/home/DestinationsGallery';
import { AboutSection } from './components/home/AboutSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { CtaBand } from './components/home/CtaBand';
import { FormSection } from './components/home/FormSection';
import { Footer } from './components/common/Footer';
import { InquiryModal } from './components/home/InquiryModal';
import { DestinationDetailModal } from './components/home/DestinationDetailModal';
import { LegalModal } from './components/common/LegalModal';
import { FloatingWhatsAppButton } from './components/common/FloatingWhatsAppButton';
import { NotFoundPage } from './components/common/NotFoundPage';
import { ScrollToTop } from './components/common/ScrollToTop';
import { AboutPage } from './pages/AboutPage';
import { DestinationItem } from './types';
import { DESTINATIONS_DATA } from './data/siteData';
import { Analytics } from '@vercel/analytics/react';

function HomePage({
  onOpenInquiry,
  onSelectDestination
}: {
  onOpenInquiry: (serviceTitle?: string, destinationName?: string) => void;
  onSelectDestination: (destName: string) => void;
}) {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero onOpenInquiry={() => onOpenInquiry()} />

      {/* 2. Services Section (Hero Cards + 9-Service Category Grid) */}
      <ServicesSection onSelectService={(svc) => onOpenInquiry(svc)} />

      {/* 3. Destinations & Gallery Section */}
      <DestinationsGallery onSelectDestination={(dest) => onSelectDestination(dest)} />

      {/* 4. Seasonal Packages & Curated Offers */}
      <PackagesSection onSelectPackage={(pkgName) => onOpenInquiry('Tour Packaging', pkgName)} />

      {/* 5. About Section Teaser & Stats */}
      <AboutSection onOpenInquiry={() => onOpenInquiry()} />

      {/* 6. Client Testimonials */}
      <TestimonialsSection />

      {/* 7. High-Contrast CTA Band */}
      <CtaBand onOpenInquiry={() => onOpenInquiry()} />

      {/* 8. Inline Contact & Inquiry Form */}
      <FormSection />
    </main>
  );
}

function NotFoundRouteWrapper() {
  const navigate = useNavigate();
  return <NotFoundPage onReturnHome={() => navigate('/')} />;
}

export function AppContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Expert Visa Assistance');
  const [selectedDestinationName, setSelectedDestinationName] = useState('');
  
  const [activeDestination, setActiveDestination] = useState<DestinationItem | null>(null);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenInquiry = (serviceTitle?: string, destinationName?: string) => {
    if (serviceTitle) setSelectedService(serviceTitle);
    if (destinationName) setSelectedDestinationName(destinationName);
    setIsModalOpen(true);
  };

  const handleSelectDestination = (destName: string) => {
    const found = DESTINATIONS_DATA.find(d => `${d.name}, ${d.country}` === destName || d.name === destName);
    if (found) {
      setActiveDestination(found);
    } else {
      handleOpenInquiry('Curated Luxury Tours', destName);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-charcoal selection:bg-brand-green selection:text-white flex flex-col justify-between">
      <ScrollToTop />

      {/* Header & Navbar */}
      <Navbar onOpenInquiry={(svc) => handleOpenInquiry(svc)} />

      {/* Routing Views */}
      <div className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenInquiry={handleOpenInquiry} 
                onSelectDestination={handleSelectDestination} 
              />
            } 
          />
          <Route 
            path="/about" 
            element={<AboutPage onOpenInquiry={handleOpenInquiry} />} 
          />
          <Route path="*" element={<NotFoundRouteWrapper />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalType(type)} />

      {/* Floating Live WhatsApp Access */}
      <FloatingWhatsAppButton />

      {/* Global Interactive Inquiry Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedDestinationName('');
        }}
        initialService={selectedService}
        initialDestination={selectedDestinationName}
      />

      {/* Interactive Destination Preview Modal */}
      <DestinationDetailModal
        destination={activeDestination}
        onClose={() => setActiveDestination(null)}
        onInquire={(destName) => handleOpenInquiry('Curated Luxury Tours', destName)}
      />

      {/* Legal & Terms Modal */}
      <LegalModal
        isOpen={Boolean(legalType)}
        type={legalType}
        onClose={() => setLegalType(null)}
      />

      {/* Vercel Analytics Tracker */}
      <Analytics />

    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
