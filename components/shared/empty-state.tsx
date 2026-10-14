'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export interface EmptyStateProps {
  icon?: string;
  title: string;
  description: string;
  primaryActionLabel?: string;
  primaryActionHref?: string;
  onPrimaryAction?: () => void;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
  className?: string;
}

export function EmptyState({
  icon = 'history_edu',
  title,
  description,
  primaryActionLabel,
  primaryActionHref,
  onPrimaryAction,
  secondaryActionLabel,
  onSecondaryAction,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-8 sm:p-12 bg-surface-container-lowest rounded-2xl shadow-sm text-center border border-outline-variant/30 select-none my-6',
        className
      )}
    >
      <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center mb-4 text-primary shadow-xs">
        <span className="material-symbols-outlined text-[40px]">{icon}</span>
      </div>
      <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1.5">
        {title}
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {secondaryActionLabel && onSecondaryAction && (
          <Button variant="outline" onClick={onSecondaryAction}>
            {secondaryActionLabel}
          </Button>
        )}
        {primaryActionLabel && primaryActionHref && (
          <Link href={primaryActionHref}>
            <Button variant="primary">
              <span className="material-symbols-outlined text-[18px]">upload_file</span>
              <span>{primaryActionLabel}</span>
            </Button>
          </Link>
        )}
        {primaryActionLabel && onPrimaryAction && !primaryActionHref && (
          <Button variant="primary" onClick={onPrimaryAction}>
            <span className="material-symbols-outlined text-[18px]">upload_file</span>
            <span>{primaryActionLabel}</span>
          </Button>
        )}
      </div>
    </div>
  );
}
