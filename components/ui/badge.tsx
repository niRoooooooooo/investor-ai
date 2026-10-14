import * as React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'indigo' | 'outline';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-surface-container-high text-on-surface-variant',
    success: 'bg-[#DCFCE7] text-[#15803D] border border-[#86EFAC]',
    warning: 'bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]',
    error: 'bg-[#FFE4E6] text-[#E11D48] border border-[#FECDD3]',
    indigo: 'bg-[#EEF2FF] text-[#4338CA] border border-[#C7D2FE]',
    outline: 'border border-outline-variant text-on-surface-variant bg-transparent',
  }[variant];

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-label-sm font-label-sm',
    md: 'px-2.5 py-1 text-label-md font-label-md',
  }[size];

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-semibold select-none shrink-0',
        sizeStyles,
        variantStyles,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
