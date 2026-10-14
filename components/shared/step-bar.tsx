'use client';

import * as React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export interface StepBarProps {
  currentStep: 1 | 2 | 3;
  className?: string;
}

export function StepBar({ currentStep, className }: StepBarProps) {
  const t = useTranslations('wizard');

  const steps = [
    { number: 1, label: t('step1'), href: '/review/new/upload' },
    { number: 2, label: t('step2'), href: '/review/new/details' },
    { number: 3, label: t('step3'), href: '/review/new/processing' },
  ];

  return (
    <nav
      aria-label="Review Progress"
      className={cn('w-full max-w-2xl mx-auto my-6 px-4 select-none', className)}
    >
      <div className="flex items-center justify-between relative">
        {/* Background Connecting Line */}
        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-surface-container-high -z-0" />

        {/* Active Connecting Fill Line */}
        <div
          className="absolute left-6 top-1/2 -translate-y-1/2 h-0.5 bg-primary transition-all duration-500 -z-0"
          style={{
            width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : 'calc(100% - 48px)',
          }}
        />

        {steps.map((step) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;

          return (
            <Link
              key={step.number}
              href={step.href}
              className="flex flex-col items-center gap-1.5 z-10 group"
            >
              <div
                className={cn(
                  'w-9 h-9 rounded-full flex items-center justify-center font-label-md text-label-md font-bold transition-all duration-300 shadow-sm',
                  isCompleted && 'bg-primary text-on-primary ring-4 ring-primary-fixed/50',
                  isCurrent && 'bg-primary text-on-primary ring-4 ring-secondary-container/40 scale-105',
                  !isCompleted && !isCurrent && 'bg-surface-container-high text-on-surface-variant group-hover:bg-surface-container-highest'
                )}
              >
                {isCompleted ? (
                  <span className="material-symbols-outlined text-[18px]">check</span>
                ) : (
                  step.number
                )}
              </div>
              <span
                className={cn(
                  'font-label-sm text-label-sm text-center transition-colors',
                  isCurrent ? 'text-primary font-bold' : 'text-on-surface-variant font-medium'
                )}
              >
                {step.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
