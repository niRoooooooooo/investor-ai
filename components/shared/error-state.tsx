'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({
  title = 'Something went wrong',
  message,
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        'w-full bg-error-container/30 border border-error/20 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start justify-between gap-4 select-none',
        className
      )}
    >
      <div className="flex items-start gap-3.5">
        <div className="w-12 h-12 rounded-xl bg-error-container flex items-center justify-center text-error shrink-0">
          <span className="material-symbols-outlined text-[26px]">error_outline</span>
        </div>
        <div className="flex flex-col">
          <h4 className="font-label-lg text-label-lg text-error font-bold">{title}</h4>
          <p className="font-body-sm text-body-sm text-on-error-container mt-1 max-w-lg leading-relaxed">
            {message}
          </p>
        </div>
      </div>

      {onRetry && (
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          className="shrink-0 bg-surface-container-lowest hover:bg-surface-container self-end sm:self-center"
        >
          <span className="material-symbols-outlined text-[16px]">refresh</span>
          <span>Try Again</span>
        </Button>
      )}
    </div>
  );
}
