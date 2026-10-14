// Provisional UI contract. Will be revised when the backend is planned.

export interface UserPreferences {
  interfaceLanguage: 'bn' | 'en';
  reportLanguage: 'bilingual' | 'english';
  saveDocumentsInCloud: boolean;
  autoDeleteAfterReport: boolean;
  allowDiagnosticLogging: boolean;
  emailOnReviewFinish: boolean;
  statutoryLawAlerts: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  avatarUrl: string;
  preferences: UserPreferences;
}
