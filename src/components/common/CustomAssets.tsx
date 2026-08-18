import React from 'react';

interface SquircleBadgeProps {
  type: 'passport' | 'compass' | 'plane' | 'concierge' | 'mice';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SquircleBadgeIcon: React.FC<SquircleBadgeProps> = ({
  type,
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  }[size];

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10'
  }[size];

  return (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeClasses} ${className}`}>
      {/* Soft Squircle SVG Badge Container */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full text-brand-green/15 fill-current transition-transform duration-300 group-hover:scale-105 group-hover:text-brand-green/25"
      >
        <path d="M 50,0 C 78,0 100,22 100,50 C 100,78 78,100 50,100 C 22,100 0,78 0,50 C 0,22 22,0 50,0 Z" />
      </svg>

      {/* Icon Path */}
      <div className={`relative z-10 text-brand-green ${iconSizes}`}>
        {type === 'passport' && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <rect width="14" height="18" x="5" y="3" rx="2" />
            <circle cx="12" cy="11" r="3" />
            <path d="M12 8v.01" />
            <path d="M10 17h4" />
          </svg>
        )}
        {type === 'compass' && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <circle cx="12" cy="12" r="9" />
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
          </svg>
        )}
        {type === 'plane' && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.8-.2-1.6.3-1.8 1.1l-.3 1.2c-.2.7.2 1.5.9 1.8l5.4 2.8-3.1 3.1-2.4-.6c-.4-.1-.9.1-1.1.5l-.4.6c-.3.4-.2 1 .2 1.3l2.8 2.1 2.1 2.8c.3.4.9.5 1.3.2l.6-.4c.4-.2.6-.7.5-1.1l-.6-2.4 3.1-3.1 2.8 5.4c.3.7 1.1 1.1 1.8.9l1.2-.3c.8-.2 1.3-1 1.1-1.8z" />
          </svg>
        )}
        {type === 'concierge' && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
          </svg>
        )}
        {type === 'mice' && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        )}
      </div>
    </div>
  );
};

export const OrganicWaveDivider: React.FC<{ flip?: boolean; className?: string }> = ({ flip = false, className = '' }) => (
  <div className={`w-full overflow-hidden leading-none select-none pointer-events-none ${className} ${flip ? 'rotate-180' : ''}`}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 md:h-16 lg:h-20 text-brand-surface fill-current">
      <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,30 L1200,120 L0,120 Z" />
      <path d="M0,15 C200,80 400,-10 600,45 C800,100 1000,20 1200,40" fill="none" stroke="#4A7C3C" strokeWidth="2" strokeOpacity="0.25" />
    </svg>
  </div>
);

export const DotPatternBackground: React.FC<{ opacity?: number; className?: string }> = ({ opacity = 0.04, className = '' }) => (
  <div
    className={`absolute inset-0 pointer-events-none bg-repeat ${className}`}
    style={{
      backgroundImage: `radial-gradient(#1C1C1A 1px, transparent 1px)`,
      backgroundSize: '24px 24px',
      opacity: opacity
    }}
  />
);

export const BrandLogo: React.FC<{ light?: boolean; className?: string; height?: number }> = ({
  light = false,
  className = '',
  height = 56
}) => (
  <div className={`inline-flex items-center select-none ${className}`}>
    <img
      src={light ? "/logo-dark.svg" : "/logo-light.svg"}
      alt="Excel Landsafe Travels & Tours Ltd"
      style={{ height: `${height}px`, width: 'auto' }}
      className="block h-auto object-contain transition-all duration-300"
    />
  </div>
);
