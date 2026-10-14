'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { LawReference } from '@/types/law';
import { cn } from '@/lib/utils';
import { buttonInteraction } from '@/lib/motion';

export interface LawReferenceChipProps {
  law: LawReference;
  onClick: (lawId: string) => void;
  className?: string;
}

export function LawReferenceChip({ law, onClick, className }: LawReferenceChipProps) {
  return (
    <motion.button
      type="button"
      whileHover={buttonInteraction.whileHover}
      whileTap={buttonInteraction.whileTap}
      onClick={() => onClick(law.id)}
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim transition-colors font-label-sm text-label-sm shadow-xs select-none border border-secondary/20 cursor-pointer',
        className
      )}
    >
      <span className="material-symbols-outlined text-[16px]">gavel</span>
      <span className="font-semibold">{law.actTitleEn}, {law.section}</span>
      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
    </motion.button>
  );
}
