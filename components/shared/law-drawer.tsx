'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LawReference } from '@/types/law';
import { lawDrawerVariants } from '@/lib/motion';

export interface LawDrawerProps {
  isOpen: boolean;
  law: LawReference | null;
  onClose: () => void;
}

export function LawDrawer({ isOpen, law, onClose }: LawDrawerProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && law && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm"
          />

          {/* Slide-In Panel */}
          <motion.aside
            aria-label="Bangladesh Code Reference"
            variants={lawDrawerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10 w-full max-w-xl bg-surface-container-lowest h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-l border-outline-variant/40"
          >
            <div className="flex flex-col gap-6">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between pb-4 border-b border-surface-container">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-secondary-container/30 text-primary">
                    <span className="material-symbols-outlined text-[24px]">menu_book</span>
                  </div>
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                      Statutory Law Inspector
                    </span>
                    <h2 className="font-headline-md text-headline-md text-primary font-bold">
                      Bangladesh Code Reference
                    </h2>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {/* Act Identifier Box */}
              <div className="p-5 rounded-2xl bg-primary text-on-primary shadow-md relative overflow-hidden">
                <div className="flex items-center gap-2 text-secondary-fixed text-label-sm font-label-sm mb-1.5">
                  <span className="material-symbols-outlined text-[16px]">gavel</span>
                  <span>{law.actNumber} • {law.section}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-on-primary">
                  {law.actTitleEn}
                </h3>
                <p className="font-body-sm text-body-sm text-surface-variant/90 mt-1">
                  {law.actTitleBn}
                </p>
                <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-xs font-medium text-amber-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Sample Reference (UI Preview)</span>
                </div>
              </div>

              {/* Section Details & Statutory Quote */}
              <div className="flex flex-col gap-3">
                <h4 className="font-label-lg text-label-lg text-primary font-bold">
                  {law.sectionTitleEn}
                </h4>
                <div className="p-4 rounded-xl bg-surface-container-low border-l-4 border-secondary text-on-surface">
                  <p className="font-body-md text-body-md italic leading-relaxed">
                    {law.statutoryQuoteEn}
                  </p>
                  {law.statutoryQuoteBn && (
                    <p className="font-body-sm text-body-sm font-bengali text-on-surface-variant mt-2 pt-2 border-t border-outline-variant/30">
                      {law.statutoryQuoteBn}
                    </p>
                  )}
                </div>
              </div>

              {/* Practical Legal Implication */}
              <div className="flex flex-col gap-2">
                <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
                  Practical Application
                </span>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  {law.practicalImplicationEn}
                </p>
                <p className="font-body-sm text-body-sm font-bengali text-on-surface-variant">
                  {law.practicalImplicationBn}
                </p>
              </div>

              {/* Precedents */}
              {law.courtPrecedents.length > 0 && (
                <div className="flex flex-col gap-2.5">
                  <span className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">
                    Judicial Interpretation
                  </span>
                  {law.courtPrecedents.map((p, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-surface-container text-on-surface">
                      <div className="flex items-center justify-between text-label-sm font-label-sm font-semibold text-primary">
                        <span>{p.title}</span>
                        <span className="text-secondary">{p.citation}</span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                        {p.principle}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Caution Strip */}
            <div className="mt-8 pt-4 border-t border-surface-container flex items-center justify-between text-on-surface-variant text-label-sm font-label-sm">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary">info</span>
                General information only; consult an advocate for specific disputes.
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
