'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useLocaleStore } from '@/lib/i18n/store';
import { cn } from '@/lib/utils';

export interface LanguageToggleProps {
  className?: string;
  size?: 'sm' | 'md';
}

export function LanguageToggle({ className, size = 'sm' }: LanguageToggleProps) {
  const { locale, setLocale } = useLocaleStore();

  const isBn = locale === 'bn';

  return (
    <div
      className={cn(
        'relative inline-flex items-center bg-surface-container-high rounded-full p-1 select-none border border-outline-variant/30',
        className
      )}
    >
      <button
        type="button"
        onClick={() => setLocale('bn')}
        className={cn(
          'relative z-10 rounded-full font-label-sm text-label-sm transition-colors duration-200 cursor-pointer font-medium',
          size === 'sm' ? 'px-3 py-0.5' : 'px-4 py-1.5',
          isBn ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
        )}
      >
        বাংলা
      </button>

      <button
        type="button"
        onClick={() => setLocale('en')}
        className={cn(
          'relative z-10 rounded-full font-label-sm text-label-sm transition-colors duration-200 cursor-pointer font-medium',
          size === 'sm' ? 'px-3 py-0.5' : 'px-4 py-1.5',
          !isBn ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
        )}
      >
        English
      </button>

      {/* Sliding Active Pill Background */}
      <motion.div
        layout
        className="absolute top-1 bottom-1 rounded-full bg-surface-container-lowest shadow-[0_1px_4px_rgba(0,0,0,0.08)]"
        initial={false}
        animate={{
          left: isBn ? '4px' : '50%',
          right: isBn ? '50%' : '4px',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      />
    </div>
  );
}
