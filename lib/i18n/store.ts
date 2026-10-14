import { create } from 'zustand';

export type Locale = 'en' | 'bn';

interface LocaleState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

export const useLocaleStore = create<LocaleState>((set) => ({
  locale: 'en',
  setLocale: (locale) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tor_lawyer_locale', locale);
      document.documentElement.lang = locale;
    }
    set({ locale });
  },
  toggleLocale: () =>
    set((state) => {
      const next = state.locale === 'en' ? 'bn' : 'en';
      if (typeof window !== 'undefined') {
        localStorage.setItem('tor_lawyer_locale', next);
        document.documentElement.lang = next;
      }
      return { locale: next };
    }),
}));
