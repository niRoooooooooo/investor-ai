'use client';

import React, { useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { useLocaleStore, Locale } from '@/lib/i18n/store';
import enMessages from '@/messages/en.json';
import bnMessages from '@/messages/bn.json';

const messagesMap = {
  en: enMessages,
  bn: bnMessages,
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const { locale, setLocale } = useLocaleStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('tor_lawyer_locale') as Locale | null;
    if (saved === 'en' || saved === 'bn') {
      setLocale(saved);
      document.documentElement.lang = saved;
    }
    setMounted(true);
  }, [setLocale]);

  const messages = messagesMap[locale] || enMessages;

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Dhaka">
      <div className={locale === 'bn' ? 'font-bengali' : 'font-sans'}>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
