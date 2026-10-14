import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  clickable?: boolean;
  size?: 'sm' | 'md';
  variant?: 'default' | 'primary' | 'secondary' | 'error';
}

export function Chip({
  className,
  active = false,
  clickable = false,
  size = 'md',
  variant = 'default',
  children,
  ...props
}: ChipProps) {
  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-label-sm font-label-sm',
    md: 'px-3.5 py-1.5 text-label-md font-label-md',
  }[size];

  const variantStyles = {
    default: active
      ? 'bg-primary text-on-primary font-semibold shadow-xs'
      : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface',
    primary: 'bg-primary-fixed text-on-primary-fixed font-semibold',
    secondary: 'bg-secondary-fixed text-on-secondary-fixed-variant font-semibold',
    error: 'bg-error-container text-on-error-container font-semibold',
  }[variant];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full transition-all duration-150 select-none shrink-0',
        sizeStyles,
        variantStyles,
        clickable && 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
