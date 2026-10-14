// Provisional UI contract. Will be revised when the backend is planned.

import { UserPreferences, User } from '@/types/user';

export interface SettingsService {
  getUserPreferences(): Promise<UserPreferences>;
  updateUserPreferences(preferences: Partial<UserPreferences>): Promise<UserPreferences>;
  updateProfile(profile: Partial<User>): Promise<User>;
  deleteAccount(): Promise<{ success: boolean }>;
  exportDataArchive(): Promise<{ downloadUrl: string }>;
}
