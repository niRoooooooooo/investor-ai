import { User } from '@/types/user';

export const SAMPLE_USER: User = {
  id: 'usr-tanvir-01',
  name: 'Tanvir Ahmed',
  email: 'tanvir.ahmed@example.com',
  phone: '+880 1712-345678',
  role: 'Standard User', // Replaced "Dhaka Bar / Adv." with neutral citizen role
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  preferences: {
    interfaceLanguage: 'en',
    reportLanguage: 'bilingual',
    saveDocumentsInCloud: true,
    autoDeleteAfterReport: false,
    allowDiagnosticLogging: false,
    emailOnReviewFinish: true,
    statutoryLawAlerts: true,
  },
};
