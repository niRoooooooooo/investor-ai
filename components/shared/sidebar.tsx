'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { DisclaimerStrip } from './disclaimer-strip';
import { LanguageToggle } from './language-toggle';
import { cn } from '@/lib/utils';

export interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const t = useTranslations('nav');
  const tBrand = useTranslations('brand');

  const navItems = [
    { label: t('dashboard'), href: '/dashboard', icon: 'dashboard' },
    { label: t('newReview'), href: '/review/new/upload', icon: 'add_circle' },
    { label: t('myDocuments'), href: '/documents', icon: 'description' },
    {
      label: t('createAgreement'),
      href: '/create-agreement',
      icon: 'edit_document',
      badge: t('soon'),
    },
    { label: t('settings'), href: '/settings', icon: 'settings' },
  ];

  return (
    <aside
      className={cn(
        'hidden lg:flex fixed left-0 top-0 h-full w-72 bg-surface-container-low z-40 flex-col justify-between py-6 px-4 border-r border-surface-container-high/60 shadow-[1px_0_12px_rgba(0,0,0,0.03)] select-none',
        className
      )}
    >
      <div className="flex flex-col gap-6">
        {/* Brand Header */}
        <div className="px-3 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[20px]">balance</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
                {tBrand('name')}
              </span>
              <span className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">
                Legal AI Engine
              </span>
            </div>
          </Link>
        </div>

        {/* Language Switcher in Sidebar */}
        <div className="px-2">
          <LanguageToggle className="w-full justify-between" size="sm" />
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-1.5" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive =
              item.href === '/dashboard'
                ? pathname === '/dashboard'
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center justify-between px-3.5 py-2.5 rounded-xl font-label-md text-label-md transition-all duration-150',
                  isActive
                    ? 'bg-primary-container text-on-primary font-semibold shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'material-symbols-outlined text-[20px]',
                      isActive ? 'text-secondary-fixed' : 'text-on-surface-variant'
                    )}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm font-semibold">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Legal Disclaimer Footer */}
      <div className="px-1">
        <DisclaimerStrip />
      </div>
    </aside>
  );
}
