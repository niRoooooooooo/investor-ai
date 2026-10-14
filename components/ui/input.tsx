import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', icon, error, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">
            {icon}
          </span>
        )}
        <input
          type={type}
          ref={ref}
          className={cn(
            'w-full rounded-lg bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md transition-all duration-200 border border-transparent',
            'focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            icon ? 'pl-10 pr-4 py-2.5' : 'px-4 py-2.5',
            error && 'border-error focus:ring-error bg-error-container/20',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-label-sm font-label-sm text-error">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
