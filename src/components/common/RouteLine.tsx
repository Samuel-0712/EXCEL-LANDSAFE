import React, { useRef, useId } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface RouteLineProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'services' | 'destinations' | 'packages' | 'about' | 'leadership' | 'general';
}

export const RouteLine: React.FC<RouteLineProps> = ({ 
  children, 
  className = '',
  variant = 'services' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientId = useId();

  // Snappy, direct scroll tracking:
  // Starts the moment the section enters the screen (start 85%)
  // and keeps drawing briskly right as the user scrolls through the content.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 20%'],
  });

  // Smooth, immediate spring physics so the line moves dynamically with the user's scroll speed
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  let viewBox = "0 0 1200 800";
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
  } else if (variant === 'leadership') {
    viewBox = "0 0 1200 2200";
    pathD = `M -40,80
      C 260,60 380,200 580,160
      C 780,120 880,320 720,440
      C 560,560 440,420 560,340
      C 760,240 980,460 1080,640
      C 1180,820 960,960 700,900
      C 440,840 340,1060 540,1180
      C 740,1300 960,1220 1060,1380
      C 1160,1540 980,1700 720,1660
      C 460,1620 340,1820 540,1960
      C 740,2100 1040,2020 1260,2160`;
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Background Journey Route Line SVG */}
      <svg
        viewBox={viewBox}
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        aria-hidden="true"
      >
        {/* Solid Uniform Faded Base Trace */}
        <path
          d={pathD}
          fill="none"
          stroke="#4A7C3C"
          strokeOpacity="0.18"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          strokeDasharray="7 7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dynamic Scroll-Drawn Route Path - 100% solid & uniform thickness across the entire line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="#4A7C3C"
          strokeOpacity="0.65"
          strokeWidth="2.75"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
        />
      </svg>

      {/* Section Content sitting above the route line */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
