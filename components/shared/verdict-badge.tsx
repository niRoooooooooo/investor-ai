'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { VerdictType } from '@/types/verdict';
import { cn } from '@/lib/utils';

export interface VerdictBadgeProps {
  verdict: VerdictType;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  animatePulse?: boolean;
}

export function VerdictBadge({
  verdict,
  className,
  size = 'md',
  animatePulse = false,
}: VerdictBadgeProps) {
  const t = useTranslations('verdict');

  const config = {
    LOOKS_FINE: {
      label: t('looksFine'),
      icon: 'check_circle',
      bgClass: 'bg-[#DCFCE7] text-[#15803D] border-[#86EFAC]',
    },
    NEEDS_CHANGES: {
      label: t('needsChanges'),
      icon: 'warning',
      bgClass: 'bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]',
    },
    HIGH_RISK: {
      label: t('highRisk'),
      icon: 'gpp_bad',
      bgClass: 'bg-[#FFE4E6] text-[#E11D48] border-[#FECDD3]',
    },
    CONSULT_LAWYER: {
      label: t('consultLawyer'),
      icon: 'support_agent',
      bgClass: 'bg-[#EEF2FF] text-[#4338CA] border-[#C7D2FE]',
    },
  }[verdict];

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-label-sm font-label-sm gap-1',
    md: 'px-2.5 py-1 text-label-md font-label-md gap-1.5',
    lg: 'px-3.5 py-1.5 text-label-lg font-label-lg gap-2 font-bold',
  }[size];

  return (
    <motion.div
      initial={animatePulse ? { scale: 0.95 } : undefined}
      animate={animatePulse ? { scale: [1, 1.06, 1] } : undefined}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'inline-flex items-center rounded-full border font-semibold select-none shadow-xs',
        config.bgClass,
        sizeStyles,
        className
      )}
    >
      <span className="material-symbols-outlined text-[16px] shrink-0">
        {config.icon}
      </span>
      <span>{config.label}</span>
    </motion.div>
  );
}
