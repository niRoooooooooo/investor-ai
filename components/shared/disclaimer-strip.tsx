'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export interface DisclaimerStripProps {
  className?: string;
  variant?: 'compact' | 'banner';
}

export function DisclaimerStrip({ className, variant = 'compact' }: DisclaimerStripProps) {
  const t = useTranslations('brand');

  if (variant === 'banner') {
    return (
      <aside aria-label="Legal Disclaimer" className={cn('w-full bg-surface-container-low border-b border-surface-container-high/60 py-1.5 px-4', className)}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[16px]">info</span>
            <span>{t('disclaimer')}</span>
          </div>
          <span className="hidden sm:inline text-outline">{t('jurisdiction')}</span>
        </div>
      </aside>
    );
  }

  return (
    <aside aria-label="Legal Disclaimer" className={cn('p-3 bg-surface-container rounded-xl flex items-start gap-2 select-none border border-outline-variant/30', className)}>
      <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5 shrink-0">
        gavel
      </span>
      <p className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
        {t('disclaimer')}
      </p>
    </aside>
  );
}
