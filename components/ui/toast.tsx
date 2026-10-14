'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { create } from 'zustand';
import { toastVariants } from '@/lib/motion';

interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  icon?: string;
}

interface ToastStore {
  toasts: ToastMessage[];
  addToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) => {
    const id = Math.random().toString(36).substring(2, 9);
    set((state) => ({ toasts: [...state.toasts, { ...toast, id }] }));
    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
    }, 3500);
  },
  removeToast: (id) =>
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));

export function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed top-24 right-8 z-50 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            variants={toastVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pointer-events-auto flex items-center gap-3 bg-primary text-on-primary px-4 py-3 rounded-xl shadow-2xl border border-secondary/30 min-w-[280px] max-w-md"
          >
            <span className="material-symbols-outlined text-[20px] text-tertiary-fixed shrink-0">
              {toast.icon || 'check_circle'}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-label-md text-label-md leading-tight text-surface-bright font-semibold">
                {toast.title}
              </p>
              {toast.description && (
                <p className="font-body-sm text-body-sm text-surface-variant/80 mt-0.5">
                  {toast.description}
                </p>
              )}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-on-primary/60 hover:text-on-primary p-1 rounded transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
