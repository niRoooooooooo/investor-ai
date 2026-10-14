'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ProgressRingProps {
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  className?: string;
  circleColorClass?: string;
  trackColorClass?: string;
  showLabel?: boolean;
}

export function ProgressRing({
  progress,
  size = 48,
  strokeWidth = 4,
  className,
  circleColorClass = 'text-secondary',
  trackColorClass = 'text-surface-container-high',
  showLabel = true,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const strokeDashoffset = circumference - (clampedProgress / 100) * circumference;

  return (
    <div className={cn('relative inline-flex items-center justify-center select-none', className)} style={{ width: size, height: size }}>
      <svg className="w-full h-full -rotate-90 transform" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background Track */}
        <circle
          className={trackColorClass}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
        />
        {/* Animated Progress Ring */}
        <motion.circle
          className={circleColorClass}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </svg>
      {showLabel && (
        <span className="absolute font-label-sm text-label-sm font-bold text-on-surface">
          {Math.round(clampedProgress)}%
        </span>
      )}
    </div>
  );
}
