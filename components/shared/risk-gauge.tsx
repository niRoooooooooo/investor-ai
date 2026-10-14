'use client';

import * as React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { VerdictType } from '@/types/verdict';

export interface RiskGaugeProps {
  score: number; // 0-100
  verdict?: VerdictType;
  size?: number;
  className?: string;
  theme?: 'dark' | 'light';
}

export function RiskGauge({
  score,
  verdict = 'NEEDS_CHANGES',
  size = 112, // 28 in tailwind (7rem = 112px)
  className,
  theme = 'dark',
}: RiskGaugeProps) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius; // ~263.89
  const strokeWidth = 9;

  // Spring animation for score count-up
  const springScore = useSpring(0, { damping: 25, stiffness: 80 });
  const displayScore = useTransform(springScore, (val) => Math.round(val));

  React.useEffect(() => {
    springScore.set(score);
  }, [score, springScore]);

  // Stroke color determined by verdict
  const strokeColor = {
    LOOKS_FINE: '#10B981',      // Emerald Green
    NEEDS_CHANGES: '#F59E0B',   // Warm Amber
    HIGH_RISK: '#E11D48',       // Crimson
    CONSULT_LAWYER: '#6366F1',  // Indigo
  }[verdict];

  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div
      className={cn('relative inline-flex items-center justify-center shrink-0 select-none', className)}
      style={{ width: size, height: size }}
    >
      <svg
        className="w-full h-full -rotate-90 transform"
        viewBox="0 0 100 100"
      >
        {/* Track */}
        <circle
          className={theme === 'dark' ? 'text-white/15' : 'text-surface-container-high'}
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
        />
        {/* Dynamic Stroke */}
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>

      {/* Center Score Display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.span
          className={cn(
            'font-display-lg text-display-lg font-bold leading-none tracking-tight',
            theme === 'dark' ? 'text-white' : 'text-primary'
          )}
        >
          {score}
        </motion.span>
        <span
          className={cn(
            'font-label-sm text-label-sm uppercase tracking-widest mt-1 font-semibold',
            theme === 'dark' ? 'text-white/70' : 'text-on-surface-variant'
          )}
        >
          / 100
        </span>
      </div>
    </div>
  );
}
