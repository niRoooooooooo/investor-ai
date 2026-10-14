// Provisional UI contract. Will be revised when the backend is planned.

import { SettingsService } from '../settings.service';
import { UserPreferences, User } from '@/types/user';
import { SAMPLE_USER } from '@/mocks/sample-user';

export class MockSettingsService implements SettingsService {
  private user: User = { ...SAMPLE_USER };

  async getUserPreferences(): Promise<UserPreferences> {
    await new Promise((r) => setTimeout(r, 100));
    return { ...this.user.preferences };
  }

  async updateUserPreferences(preferences: Partial<UserPreferences>): Promise<UserPreferences> {
    await new Promise((r) => setTimeout(r, 200));
    this.user.preferences = { ...this.user.preferences, ...preferences };
    return { ...this.user.preferences };
  }

  async updateProfile(profile: Partial<User>): Promise<User> {
    await new Promise((r) => setTimeout(r, 250));
    this.user = { ...this.user, ...profile };
    return { ...this.user };
  }

  async deleteAccount(): Promise<{ success: boolean }> {
    await new Promise((r) => setTimeout(r, 400));
    return { success: true };
  }

  async exportDataArchive(): Promise<{ downloadUrl: string }> {
    await new Promise((r) => setTimeout(r, 500));
    return { downloadUrl: '#' };
  }
}
