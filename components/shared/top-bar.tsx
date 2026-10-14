'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import { LanguageToggle } from './language-toggle';
import { SAMPLE_USER } from '@/mocks/sample-user';
import { cn } from '@/lib/utils';

export interface TopBarProps {
  className?: string;
  isSidebarLayout?: boolean;
}

export function TopBar({ className, isSidebarLayout = true }: TopBarProps) {
  const t = useTranslations('brand');

  return (
    <header
      className={cn(
        'h-20 bg-surface/85 backdrop-blur-xl border-b border-surface-container-high/60 z-30 flex items-center justify-between px-6 lg:px-8 transition-all',
        isSidebarLayout ? 'fixed top-0 left-0 lg:left-72 right-0' : 'fixed top-0 left-0 right-0',
        className
      )}
    >
      {/* Left items: Jurisdiction badge */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-lg text-on-surface-variant font-body-sm text-body-sm border border-outline-variant/30">
          <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
          <span className="font-medium">{t('jurisdiction')}</span>
        </div>
      </div>

      {/* Right items: Language toggle, Notifications, Help, User Avatar */}
      <div className="flex items-center gap-4">
        <LanguageToggle size="sm" />

        <button
          type="button"
          aria-label="Notifications"
          className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">notifications</span>
        </button>

        <button
          type="button"
          aria-label="Help & FAQ"
          className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">help_outline</span>
        </button>

        {/* User Profile Capsule (Tanvir Ahmed) */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-surface-container-high">
          <div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed font-bold flex items-center justify-center text-xs ring-2 ring-surface-container-high overflow-hidden">
            TA
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-label-md text-label-md text-on-surface font-semibold leading-tight">
              {SAMPLE_USER.name}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
              {SAMPLE_USER.role}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
