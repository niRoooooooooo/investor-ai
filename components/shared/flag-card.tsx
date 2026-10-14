'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Flag } from '@/types/flag';
import { LawReferenceChip } from './law-reference-chip';
import { cn } from '@/lib/utils';
import { cardHoverVariants } from '@/lib/motion';

export interface FlagCardProps {
  flag: Flag;
  onOpenLaw?: (lawId: string) => void;
  className?: string;
  isHighlighted?: boolean;
}

export function FlagCard({ flag, onOpenLaw, className, isHighlighted = false }: FlagCardProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    if (flag.aiSuggestedWordingEn) {
      navigator.clipboard.writeText(flag.aiSuggestedWordingEn);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const severityBarColor = {
    red: 'bg-error',
    amber: 'bg-[#B45309]',
    green: 'bg-[#15803D]',
  }[flag.severity];

  const severityIcon = {
    red: 'error_outline',
    amber: 'warning',
    green: 'check_circle',
  }[flag.severity];

  const severityIconBox = {
    red: 'bg-error-container text-on-error-container',
    amber: 'bg-[#FEF3C7] text-[#B45309]',
    green: 'bg-[#DCFCE7] text-[#15803D]',
  }[flag.severity];

  return (
    <motion.article
      variants={cardHoverVariants}
      whileHover="hover"
      className={cn(
        'relative bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/40 transition-all duration-300 overflow-hidden',
        isHighlighted && 'ring-2 ring-primary shadow-lg',
        className
      )}
    >
      {/* 4px Left Flush Severity Bar */}
      <div className={cn('absolute left-0 top-0 bottom-0 w-1.5', severityBarColor)} />

      <div className="flex flex-col gap-3 pl-2">
        {/* Header row: Icon, Title, and Risk Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className={cn('p-1.5 rounded-lg flex items-center justify-center', severityIconBox)}>
              <span className="material-symbols-outlined text-[20px]">{severityIcon}</span>
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              {flag.titleEn}
            </h3>
          </div>

          {flag.riskPercent !== undefined && (
            <span
              className={cn(
                'px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold',
                flag.severity === 'red' && 'bg-error-container/60 text-error',
                flag.severity === 'amber' && 'bg-[#FEF3C7] text-[#B45309]',
                flag.severity === 'green' && 'bg-[#DCFCE7] text-[#15803D]'
              )}
            >
              {flag.severity === 'red' ? 'High Risk' : flag.severity === 'amber' ? 'Needs Changes' : 'Compliant'} • {flag.riskPercent}%
            </span>
          )}
        </div>

        {/* Severity % Bar */}
        {flag.riskPercent !== undefined && (
          <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
            <div
              className={cn('h-full rounded-full transition-all duration-500', severityBarColor)}
              style={{ width: `${flag.riskPercent}%` }}
            />
          </div>
        )}

        {/* Issue Description */}
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          {flag.issueSummaryEn}
        </p>

        {/* Law Reference Chip Trigger */}
        {flag.applicableLaw && onOpenLaw && (
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <LawReferenceChip law={flag.applicableLaw} onClick={onOpenLaw} />
          </div>
        )}

        {/* AI Suggested Wording Box */}
        {flag.aiSuggestedWordingEn && (
          <div className="mt-2 rounded-xl bg-surface-container-low p-4 border border-outline-variant/30">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-md text-label-md text-primary font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">auto_fix_high</span>
                AI Suggested Compliant Wording
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm shadow-xs transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copied ? 'check' : 'content_copy'}
                </span>
                <span>{copied ? 'Copied' : 'Copy Wording'}</span>
              </button>
            </div>
            <p className="font-body-sm text-body-sm font-mono text-on-surface-variant bg-surface-container-lowest p-3 rounded-lg leading-relaxed border border-outline-variant/20">
              {flag.aiSuggestedWordingEn}
            </p>
          </div>
        )}
      </div>
    </motion.article>
  );
}
