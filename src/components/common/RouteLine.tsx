import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteLineProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'services' | 'destinations' | 'packages' | 'about' | 'general';
}

export const RouteLine: React.FC<RouteLineProps> = ({ 
  children, 
  className = '',
  variant = 'services' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Synchronized directly with visible viewport scroll:
  // Starts drawing when the section top enters 85% of viewport,
  // finishes drawing smoothly as the user scrolls through to the bottom.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 35%'],
  });

  // 1-to-1 scroll synchronization so the user actively sees the line draw as they scroll
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0.6, 1, 1, 0.6]);

  // Continuous organic journey paths tailored for each section
  let pathD = `M -40,100
    C 240,80 320,240 520,220
    C 720,200 800,360 620,420
    C 440,480 380,360 540,320
    C 780,260 880,400 980,480
    C 1080,560 1140,620 1250,700`;

  if (variant === 'destinations') {
    pathD = `M 1150,30
      C 920,80 780,180 580,160
      C 380,140 220,300 360,420
      C 500,540 680,480 820,580
      C 960,680 780,740 420,720
      C 180,700 -20,780 -60,820`;
  } else if (variant === 'packages') {
    pathD = `M -50,60
      C 180,120 320,80 460,200
      C 600,320 840,240 920,360
      C 1000,480 860,600 680,540
      C 500,480 380,620 540,700
      C 700,780 1020,720 1260,820`;
  } else if (variant === 'about') {
    pathD = `M -40,80
      C 260,40 380,220 580,160
      C 780,100 860,320 680,400
      C 500,480 420,340 600,280
      C 820,220 960,400 1060,500
      C 1160,600 1180,660 1260,740`;
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Background Journey Route Line SVG */}
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`routeGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A7C3C" stopOpacity="0.30" />
            <stop offset="50%" stopColor="#4A7C3C" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#4A7C3C" stopOpacity="0.45" />
          </linearGradient>
        </defs>

        {/* Ambient Faded Base Trace */}
        <path
          d={pathD}
          fill="none"
          stroke="#4A7C3C"
          strokeOpacity="0.14"
          strokeWidth="2.5"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />

        {/* Dynamic Scroll-Drawn Route Path with Higher Visibility */}
        <motion.path
          d={pathD}
          fill="none"
          stroke={`url(#routeGradient-${variant})`}
          strokeWidth="3.5"
          strokeLinecap="round"
          style={{ pathLength, opacity }}
        />
      </svg>

      {/* Section Content sitting above the route line */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
