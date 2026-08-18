import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, COMPANY_STATS } from '../../data/siteData';
import { Button } from '../common/Button';
import { ShieldCheck } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

interface AboutSectionProps {
  onOpenInquiry: () => void;
}

const AnimatedStatValue: React.FC<{ value: string }> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    if (value === "500+") {
      const end = 500;
      const duration = 1800;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // cubic easeOut
        const current = Math.floor(easeProgress * end);
        setDisplayValue(`${current}+`);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setDisplayValue("500+");
        }
      };
      requestAnimationFrame(updateCounter);
    } else if (value === "98%") {
      const end = 98;
      const duration = 1600;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeProgress * end);
        setDisplayValue(`${current}%`);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setDisplayValue("98%");
        }
      };
      requestAnimationFrame(updateCounter);
    } else if (value === "24/7") {
      const end = 24;
      const duration = 1400;
      const startTime = performance.now();

      const updateCounter = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeProgress * end);
        setDisplayValue(`${current}/7`);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setDisplayValue("24/7");
        }
      };
      requestAnimationFrame(updateCounter);
    } else {
      setDisplayValue(value);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="about" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Image Layer */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-brand-surface">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80" 
                alt="Excel Landsafe Travel Advisory" 
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
            </div>

            {/* Floating Trust Card Overlay */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 rounded-2xl shadow-elevated border border-brand-surface max-w-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-green shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-display font-bold text-sm text-brand-charcoal">
                  Embassy-Vetted Standards
                </p>
                <p className="text-xs text-brand-muted font-body">
                  Zero guesswork applications
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-charcoal tracking-tight leading-tight">
              We Turn Complex Travel Requirements into Effortless Journeys
            </h2>

            <p className="text-base sm:text-lg text-brand-muted font-body leading-relaxed">
              At {COMPANY_INFO.name}, we believe luxury is defined by peace of mind. Navigating international visas, flight logistics, and resort bookings should feel as smooth as the holiday itself.
            </p>

            <p className="text-sm sm:text-base text-brand-charcoal/80 font-body leading-relaxed">
              Our travel specialists personally vet visa applications before submission to embassy portals, curate handpicked luxury itineraries, and provide 24/7 assistance throughout your trip.
            </p>

            {/* Understated 3-Stat Row with Counting Effect */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-surface">
              {COMPANY_STATS.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-brand-green tracking-tight tabular-nums">
                    <AnimatedStatValue value={stat.value} />
                  </p>
                  <p className="font-display font-semibold text-sm text-brand-charcoal">
                    {stat.label}
                  </p>
                  <p className="text-xs text-brand-muted font-body">
                    {stat.subtext}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing Trust Statement & Action */}
            <div className="pt-4 space-y-4">
              <p className="text-xs sm:text-sm text-brand-muted font-body leading-relaxed">
                Officially registered with the CAC and a proud member of NANTA.
              </p>

              <div>
                <Link to="/about">
                  <Button variant="secondary">
                    <span>Learn Our Story</span>
                    <span className="ml-1">&rarr;</span>
                  </Button>
                </Link>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
