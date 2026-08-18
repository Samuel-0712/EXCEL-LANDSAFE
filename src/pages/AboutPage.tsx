import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/common/Button';
import { RouteLine } from '../components/common/RouteLine';
import { COMPANY_INFO } from '../data/siteData';

interface AboutPageProps {
  onOpenInquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenInquiry }) => {
  const coreValues = [
    { 
      num: '01', 
      title: 'Commitment to Excellence',
      description: 'Every detail handled with precision and care'
    },
    { 
      num: '02', 
      title: 'Customer-Centric Approach',
      description: 'Your journey, planned around your needs'
    },
    { 
      num: '03', 
      title: 'Continuous Learning and Growth',
      description: 'Always improving how we serve you'
    },
    { 
      num: '04', 
      title: 'Integrity and Transparency',
      description: 'Honest advice, no hidden surprises'
    },
    { 
      num: '05', 
      title: 'Team Spirit',
      description: 'A dedicated team working as one for you'
    },
  ];

  const leadership = [
    { name: 'Oluwayomi Elizabeth Dada', role: 'Managing Director' },
    { name: 'Babatunde Leo Dada', role: 'Managing Partner' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-charcoal pt-28 md:pt-36">

      {/* Part 1: Opener & Story Section with RouteLine */}
      <section className="relative overflow-hidden border-b border-brand-surface/60">
        <RouteLine variant="about">
          
          {/* 1. Founding-Year Opener (Generous Editorial Breathing Room) */}
          <div className="py-20 md:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-center max-w-3xl mx-auto"
            >
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-charcoal tracking-tight leading-[1.2] sm:leading-[1.15]">
                Since{' '}
                <span className="font-accent italic text-brand-green text-5xl sm:text-7xl md:text-8xl align-baseline inline-block px-1">
                  2011
                </span>
                , we&apos;ve been making journeys seamless.
              </h1>

              <p className="text-xs sm:text-sm font-semibold tracking-widest text-brand-muted uppercase font-body pt-2">
                OVER A DECADE OF TRUSTED VISA ADVISORY &amp; LUXURY TRAVEL
              </p>
            </motion.div>
          </div>

          {/* 2. Company Story Pull-Quote & Narrative */}
          <div className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">
            <motion.blockquote
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-charcoal tracking-tight leading-snug">
                &ldquo;Every journey is well-planned, hassle-free, and enriching.&rdquo;
              </p>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl mx-auto space-y-4 text-base sm:text-lg text-brand-charcoal/80 font-body leading-relaxed"
            >
              <p>
                Excel Landsafe Travel and Tours Ltd. is a dynamic and innovative travel and tourism management company dedicated to providing a comprehensive array of travel services tailored to cater to the diverse needs and preferences of its clients.
              </p>
              <p>
                Our company prioritizes safety and commitment to excellence at every stage of its customers&apos; trips, ensuring peace of mind and value for money. Additionally, it specializes in the packaging of unique and immersive travel experiences that showcase the excellence, culture, and diversity of destinations around the world.
              </p>
              <p>
                With a strong commitment to customer satisfaction and safety, we ensure that every journey is well-planned, hassle-free, and enriching.
              </p>
            </motion.div>
          </div>

        </RouteLine>
      </section>

      {/* 3. Mission & Vision as a Diptych (Tightened Spacing) */}
      <section className="border-t border-brand-surface/80">
        
        {/* Mission (Base Neutral Background) */}
        <div className="py-12 md:py-16 bg-brand-bg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2.5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold text-brand-green uppercase tracking-widest"
            >
              Our Mission
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-brand-charcoal leading-snug tracking-tight"
            >
              &ldquo;To provide unparalleled adventures and seamless experiences fuelled by our unwavering commitment to exceed expectations, ensuring your journey is not just a trip but a cherished commitment to your travel dreams.&rdquo;
            </motion.p>
          </div>
        </div>

        {/* Vision (Light Green Tint #E4EEDD) */}
        <div className="py-12 md:py-16 bg-[#E4EEDD]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2.5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold text-brand-dark uppercase tracking-widest"
            >
              Our Vision
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-brand-dark leading-snug tracking-tight"
            >
              &ldquo;To be an epitome of excellence in the travel industry, where every journey we curate not only exceeds expectations but also becomes a testament to our unwavering commitment to delivering unparalleled and seamless experiences.&rdquo;
            </motion.p>
          </div>
        </div>

      </section>

      {/* 4. Core Values as an Authored Numbered List (Tightened Spacing) */}
      <section className="relative overflow-hidden border-t border-brand-surface/80 bg-brand-bg py-12 md:py-16">
        <RouteLine variant="packages">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 md:mb-8">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-charcoal tracking-tight">
                Our Core Values
              </h2>
            </div>

            <div className="divide-y divide-brand-surface border-y border-brand-surface">
              {coreValues.map((val, idx) => (
                <motion.div
                  key={val.num}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="py-4 sm:py-5 flex items-start gap-4 sm:gap-6 group"
                >
                  <span className="font-accent italic text-2xl sm:text-3xl text-brand-green shrink-0 select-none group-hover:scale-105 transition-transform duration-200 pt-0.5">
                    {val.num}
                  </span>
                  <div className="space-y-0.5">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-brand-charcoal group-hover:text-brand-green transition-colors duration-200">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted font-body leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </RouteLine>
      </section>

      {/* 5. Leadership as a Masthead Credit Line (Distinct Darker Neutral Background & Tightened Spacing) */}
      <section className="py-12 md:py-16 bg-[#EBE5DA] border-t border-b border-brand-charcoal/10 relative overflow-hidden">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-charcoal tracking-tight mb-6">
            Leadership &amp; Management
          </h2>

          <div className="space-y-4 sm:space-y-5">
            {leadership.map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 text-base sm:text-lg font-body"
              >
                <span className="font-display font-bold text-brand-charcoal">
                  {person.name}
                </span>
                <span className="hidden sm:inline text-brand-charcoal/40">&mdash;</span>
                <span className="text-brand-charcoal/70 text-sm sm:text-base">
                  {person.role}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Facts Strip (Thin, quiet, footer-style bar) */}
      <section className="py-5 bg-white border-b border-brand-surface text-xs sm:text-sm text-brand-muted font-body">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <span>Founded 2011</span>
          <span className="hidden md:inline text-brand-surface">&bull;</span>
          <span>60 Allen Avenue, by Adeboye Sholanke Entrance Gate, Ikeja, Lagos</span>
          <span className="hidden md:inline text-brand-surface">&bull;</span>
          <span>CAC Registered &middot; NANTA Member</span>
        </div>
      </section>

      {/* 7. Closing CTA Band (Tightened Spacing) */}
      <section className="relative py-14 md:py-20 bg-brand-dark text-white overflow-hidden text-center">
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Ready to Begin Your Seamless Journey?
          </h2>
          <p className="text-sm sm:text-base text-white/80 font-body leading-relaxed max-w-xl mx-auto">
            Let our senior travel specialists and visa consultants take care of every detail. Reach out today for personalized advisory.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={onOpenInquiry}>
              Start Visa &amp; Travel Inquiry
            </Button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Excel Landsafe, I was reading your story on the About page and would like to make an inquiry.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
