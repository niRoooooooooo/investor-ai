'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { buttonInteraction } from '@/lib/motion';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, disabled, ...props }, ref) => {
    const variantStyles = {
      primary:
        'bg-primary text-on-primary hover:bg-primary-container shadow-[0_4px_12px_rgba(7,2,53,0.18)] hover:shadow-[0_6px_16px_rgba(7,2,53,0.25)] border border-transparent',
      secondary:
        'bg-secondary text-on-secondary hover:bg-secondary-container hover:text-on-secondary-container shadow-sm border border-transparent',
      ghost:
        'bg-transparent text-on-surface hover:bg-surface-container hover:text-primary border border-transparent',
      outline:
        'bg-surface-container-lowest text-on-surface border border-outline-variant/80 hover:bg-surface-container hover:border-outline shadow-sm',
      danger:
        'bg-error text-on-error hover:bg-error/90 shadow-sm border border-transparent',
    }[variant];

    const sizeStyles = {
      sm: 'px-3 py-1.5 text-label-sm font-label-sm rounded-md gap-1.5',
      md: 'px-4 py-2 text-label-md font-label-md rounded-lg gap-2',
      lg: 'px-6 py-3 text-label-lg font-label-lg rounded-lg gap-2.5',
    }[size];

    return (
      <motion.button
        ref={ref}
        disabled={disabled}
        whileHover={disabled ? undefined : buttonInteraction.whileHover}
        whileTap={disabled ? undefined : buttonInteraction.whileTap}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-colors select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary disabled:opacity-50 disabled:pointer-events-none cursor-pointer',
          variantStyles,
          sizeStyles,
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = 'Button';
